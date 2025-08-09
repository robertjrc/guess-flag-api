const { PlayerCreateUseCase } = require("../../application/usecases/player/create");
const { Player } = require("../../domain/entities/Player");

class PlayerController {
    create(request) {
        return new PlayerCreateUseCase().execute(request);
    }

    won(player, difficultyLevel) {
        return Player.won(player, difficultyLevel);
    }

    lose(player) {
        return Player.lose(player);
    }
}

module.exports = { PlayerController };
