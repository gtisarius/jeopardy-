import io.ktor.http.ContentType
import io.ktor.server.engine.embeddedServer
import io.ktor.server.http.content.default
import io.ktor.server.http.content.files
import io.ktor.server.http.content.static
import io.ktor.server.http.content.staticFiles
import io.ktor.server.netty.Netty
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import java.io.File

fun main() {
    embeddedServer(Netty, port = 12345) {
        routing {
            staticFiles("/", File("src/main/resources/webroot")) {
                default("index.html")
            }
        }
    }.start(wait = true)
}