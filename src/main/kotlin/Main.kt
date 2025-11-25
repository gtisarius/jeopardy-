import io.ktor.http.*
import io.ktor.server.application.Application
import io.ktor.server.engine.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import com.google.gson.Gson
import java.io.File

fun main() {
    embeddedServer(Netty, port = 12345, module = Application::module).start(wait = true)
}

val categories = mutableSetOf(
    Category("Math", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 2", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 3", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 4", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 5", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 6", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 7", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
    Category("Math 8", listOf(
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.EASY,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.MEDIUM,"2"),
        Question("1+1", Difficulty.HARD,"2"),
        Question("1+1", Difficulty.HARD,"2"),
    )),
)

val games = mutableListOf<GameInstance>()

fun Application.module() {
    routing {
        staticFiles("/", File("src/main/resources/webroot")) {
            default("index.html")
        }
        route("api") {
            post("/start_game") {
                val gson = Gson()
                val postData = call.receiveText()
                println("Game start request: $postData")
                val gameStartRequest = gson.fromJson(postData, GameStartRequest::class.java)
                val categoryCount = gameStartRequest.categoryCount?:5
                val categoryNames = categories.shuffled().take(categoryCount).toSet()
                val game = GameInstance(gameStartRequest.players, categoryNames)
                games.add(game)
                val gameStartResponse = GameStartResponse(game.gameId, game.categories.map { it.name }.toSet())
                val responseMessage = gson.toJson(gameStartResponse)
                call.respondText(responseMessage, ContentType.Application.Json, HttpStatusCode.OK)
            }
        }
    }
}