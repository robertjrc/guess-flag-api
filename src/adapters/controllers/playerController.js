const { PlayerCreateUseCase } = require("../../application/usecases/player/create");
const { Player } = require("../../domain/entities/Player");
const { PlayerInMemoryRepository } = require("../../infrastructure/repositories/playerInMemoryRepository");

class PlayerController {
    #repository = new PlayerInMemoryRepository();

    create(request) {
        return new PlayerCreateUseCase(this.#repository).execute(request);
    }

    won(player, difficultyLevel) {
        return Player.won(player, difficultyLevel);
    }

    lose(player) {
        return Player.lose(player);
    }
}

module.exports = { PlayerController };
