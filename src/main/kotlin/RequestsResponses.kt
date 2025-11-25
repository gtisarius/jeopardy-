data class GameStartRequest(val players: List<String>, val categoryCount: Int?)
data class GameStartResponse(val gameId: String, val categories: Set<String>)

