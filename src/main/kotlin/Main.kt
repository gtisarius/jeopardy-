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

fun Application.module() {
    routing {
        staticFiles("/", File("src/main/resources/webroot")) {
            default("index.html")
        }
        route("api") {
            post("/start_game") {
                val gson = Gson()
                val postData = call.receiveText()
//                val gameStartRequest = gson.fromJson(postData, GameStartRequest::class.java)
                val gameStartResponse = GameStartResponse("testID", setOf("Math"))
                val responseMessage = gson.toJson(gameStartResponse)
                call.respondText(responseMessage, ContentType.Application.Json, HttpStatusCode.OK)
            }
        }
    }
}