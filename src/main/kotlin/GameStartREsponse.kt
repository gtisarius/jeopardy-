data class GameStartRequest(val players: Set<String>)
data class GameStartResponse(val gameId: String, val categories: Set<String>)

