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

    val questionsToPoints: Map<Category, Map<Int, Question>>
    val answeredQuestions = mutableListOf<Question>()
    var currentQuestion: Question? = null

    init {
        if (players.size < 2 || players.size > categories.size * 5) {
            throw IllegalArgumentException("Bad number of players")
        }
        val newMap = mutableMapOf<Category, Map<Int, Question>>()
        categories.forEach { category ->
            val questionsToPoints = mutableMapOf<Int, Question>()
            val questions = category.questions
            val q100 = questions.filter { it.difficulty == Difficulty.EASY }.shuffled().first()
            questionsToPoints[100] = q100
            val q200 = questions.filter { it.difficulty == Difficulty.EASY || it.difficulty == Difficulty.MEDIUM}.shuffled().first()
            questionsToPoints[200] = q200
            val q300 = questions.filter { it.difficulty == Difficulty.MEDIUM }.shuffled().first()
            questionsToPoints[300] = q300
            val q400 = questions.filter { it.difficulty == Difficulty.MEDIUM || it.difficulty == Difficulty.HARD}.shuffled().first()
            questionsToPoints[400] = q400
            val q500 = questions.filter { it.difficulty == Difficulty.HARD }.shuffled().first()
            questionsToPoints[500] = q500
            newMap[category] = questionsToPoints
        }
        this.questionsToPoints = newMap
    }


    @OptIn(ExperimentalTime::class)
    val gameId: String = System.now().toString()

    fun fetchQuestion(category: String, pointValue: Int) {
        val selected = categories.firstOrNull { it.name == category }
        if (selected == null) {
            throw KotlinNullPointerException("No such category")
        }
        val selectedQuestion = questionsToPoints[selected]?.get(pointValue)
            ?: throw KotlinNullPointerException("No question with that point value")
        if (answeredQuestions.contains(selectedQuestion)) {
            throw IllegalArgumentException("Question already answered")
        }
        currentQuestion = selectedQuestion
    }
}