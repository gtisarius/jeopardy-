import kotlin.time.Clock.System
import kotlin.time.ExperimentalTime

data class Category(val name: String, val questions: List<Question>) {
    init {
        if (questions.size < 5) {
            throw IllegalArgumentException("Not enough questions!")
        }
    }
}

data class Question(val text: String, val difficulty: Difficulty, val answer: String)

enum class Difficulty {
    // 100-200 pts
    EASY,
    // 200-400 pts
    MEDIUM,
    // 400-500 pts
    HARD;
}

data class GameInstance(val players: List<String>, val categories: Set<Category>) {
    init {
        if (players.size < 2 || players.size > categories.size * 5) {
            throw IllegalArgumentException("bad number of players")
        }
    }
    @OptIn(ExperimentalTime::class)
    val gameId: String = System.now().toString()
}