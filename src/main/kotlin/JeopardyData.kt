import java.lang.IllegalStateException
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
    var currentPoints: Int = 0
    val playerOrder = players.toMutableList()
    val scores = players.associateWith { 0 }.toMutableMap()
    val totalQuestions: Int

    init {
        if (players.size < 2 || players.size > categories.size * 5) {
            throw IllegalArgumentException("Bad number of players")
        }
        val newMap = mutableMapOf<Category, Map<Int, Question>>()
        var questionCount = 0
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
            questionCount += 5
        }
        totalQuestions = questionCount
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
        currentPoints = pointValue
    }

    fun currentPlayer() : String {
        return playerOrder[0]
    }

    fun submitAnswer(answer: String) : SubmitAnswerResponse {
        currentQuestion?.let {
            val correctAnswer = it.answer
            val correct = correctAnswer == answer
            val scoreDelta = if (correct) {currentPoints} else {-currentPoints}
            val currentPlayer = currentPlayer()
            val currentScore = scores[currentPlayer]
            val newScore = currentScore!! + scoreDelta
            scores[currentPlayer] = newScore
            answeredQuestions.add(it)
            val gameOver = gameOver()
            playerOrder.remove(currentPlayer)
            playerOrder.add(currentPlayer)
            val nextPlayer = currentPlayer()
            currentQuestion = null
            return SubmitAnswerResponse(correct, correctAnswer, newScore, nextPlayer, gameOver)
        }
        throw IllegalStateException("No question loaded")
    }

    fun gameOver(): Boolean = answeredQuestions.size == totalQuestions
}