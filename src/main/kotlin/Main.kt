import io.ktor.http.*
import io.ktor.server.application.Application
import io.ktor.server.engine.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import com.google.gson.Gson
import com.google.gson.JsonSyntaxException
import io.ktor.http.ContentType
import java.io.File
import java.lang.IllegalArgumentException
import kotlin.reflect.KClass

fun main() {
    embeddedServer(Netty, port = 12345, module = Application::module).start(wait = true)
}

val categories = mutableSetOf(
    Category("Math", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+2", Difficulty.EASY,"2"),
        Question("1+3", Difficulty.MEDIUM,"2"),
        Question("1+4", Difficulty.MEDIUM,"2"),
        Question("1+5", Difficulty.MEDIUM,"2"),
        Question("1+6", Difficulty.HARD,"2"),
        Question("1+7", Difficulty.HARD,"2"),
    )),
    Category("Math 2", listOf(
        Question("2+1", Difficulty.EASY,"2"),
        Question("2+2", Difficulty.EASY,"2"),
        Question("2+3", Difficulty.MEDIUM,"2"),
        Question("2+4", Difficulty.MEDIUM,"2"),
        Question("2+5", Difficulty.MEDIUM,"2"),
        Question("2+6", Difficulty.HARD,"2"),
        Question("2+7", Difficulty.HARD,"2"),
    )),
    Category("Math 3", listOf(
        Question("3+1", Difficulty.EASY,"2"),
        Question("3+2", Difficulty.EASY,"2"),
        Question("3+3", Difficulty.MEDIUM,"2"),
        Question("3+4", Difficulty.MEDIUM,"2"),
        Question("3+5", Difficulty.MEDIUM,"2"),
        Question("3+6", Difficulty.HARD,"2"),
        Question("3+7", Difficulty.HARD,"2"),
    )),
    Category("Math 4", listOf(
        Question("4+1", Difficulty.EASY,"2"),
        Question("4+2", Difficulty.EASY,"2"),
        Question("4+3", Difficulty.MEDIUM,"2"),
        Question("4+4", Difficulty.MEDIUM,"2"),
        Question("4+5", Difficulty.MEDIUM,"2"),
        Question("4+6", Difficulty.HARD,"2"),
        Question("4+7", Difficulty.HARD,"2"),
    )),
    Category("Math 5", listOf(
        Question("5+1", Difficulty.EASY,"2"),
        Question("5+2", Difficulty.EASY,"2"),
        Question("5+3", Difficulty.MEDIUM,"2"),
        Question("5+4", Difficulty.MEDIUM,"2"),
        Question("5+5", Difficulty.MEDIUM,"2"),
        Question("5+6", Difficulty.HARD,"2"),
        Question("5+7", Difficulty.HARD,"2"),
    )),
    Category("Math 6", listOf(
        Question("6+1", Difficulty.EASY,"2"),
        Question("6+2", Difficulty.EASY,"2"),
        Question("6+3", Difficulty.MEDIUM,"2"),
        Question("6+4", Difficulty.MEDIUM,"2"),
        Question("6+5", Difficulty.MEDIUM,"2"),
        Question("6+6", Difficulty.HARD,"2"),
        Question("6+7", Difficulty.HARD,"2"),
    )),
)

val games = mutableListOf<GameInstance>()
val gson = Gson()

fun Application.module() {
    routing {
        staticFiles("/", File("src/main/resources/webroot")) {
            default("index.html")
        }
        route("api") {
            post("/start_game") {
                val gameStartRequest = call.parseAs(GameStartRequest::class)
                val categoryCount = gameStartRequest.categoryCount?:5
                val applicableCategories = categories.shuffled().take(categoryCount)
                if (applicableCategories.size != categoryCount) {
                    call.respondError("Not enough categories")
                }
                val categoryNames = applicableCategories.toSet()
                val game = try {
                    GameInstance(gameStartRequest.players, categoryNames)
                } catch (e: Exception) {
                    call.respondError(e.message ?: "Error creating game")
                    return@post
                }
                games.add(game)
                val gameStartResponse = GameStartResponse(game.gameId, game.categories.map { it.name }.toSet())
                call.respondJson(gameStartResponse)
            }
            post("/choose_question") {
                val chooseQuestionRequest = call.parseAs(ChooseQuestionRequest::class)
                val game = getGameById(chooseQuestionRequest.gameId, call)
                if (game != null) {
                    game.fetchQuestion(chooseQuestionRequest.category, chooseQuestionRequest.pointValue)
                    val question = game.currentQuestion!!
                    val response = ChooseQuestionResponse(question.text, chooseQuestionRequest.pointValue)
                    call.respondJson(response)
                }
            }
        }
    }
}

private suspend fun getGameById(gameId: String, call: RoutingCall) : GameInstance? {
    val game = games.firstOrNull {it.gameId == gameId}
    if (game == null) {
        call.respondError("No game with that id found")
    }
    return game
}

private suspend fun <T : Any> RoutingCall.parseAs(clazz: KClass<T>) : T {
    val postData = receiveText()
    try {
        val thing = gson.fromJson(postData, clazz.java)
        return thing
    } catch (e: JsonSyntaxException) {
        respondError("Could not parse request")
        throw IllegalArgumentException("Improperly formatted request")
    }
}

private suspend fun RoutingCall.respondError(error: String) {
    respondJson(ErrorResponse("$error!"), HttpStatusCode.InternalServerError)
}

private suspend fun RoutingCall.respondJson(value: Any, statusCode: HttpStatusCode = HttpStatusCode.OK) {
    val json = gson.toJson(value)
    respondText(json, ContentType.Application.Json, statusCode)
}
