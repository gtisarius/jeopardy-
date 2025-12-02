data class ErrorResponse(val error: String)

data class GameStartRequest(val players: List<String>, val categoryCount: Int?)
data class GameStartResponse(val gameId: String, val categories: Set<String>, val startingPlayer: String)

data class ChooseQuestionRequest(val gameId: String, val category: String, val pointValue: Int)
data class ChooseQuestionResponse(val questionText: String, val pointValue: Int)

data class SubmitAnswerRequest(val gameId: String, val answer: String)
data class SubmitAnswerResponse(val correct: Boolean, val correctAnswer: String, val newScore: Int, val nextPlayer: String?, val gameOver: Boolean)

data class WireQuestion(val text: String, val difficulty: String, val answer: String)
data class UploadDatasetRequest(val categoryName: String, val questions: List<WireQuestion>)
data class UploadDatasetResponse(val success: Boolean)

data class ExportGameRequest(val gameId: String, val format: String)
data class ExportGameResponse(val downloadLink: String)

data class GenerateQuestionSetRequest(val categoryName: String, val categoryType: String, val count: Int)
data class GenerateQuestionSetResponse(val status: String)