const { Player } = require("../../../domain/entities/Player");

class PlayerCreateUseCase {
    execute(request) {
        const newPlayer = new Player(request.id, request.name);
        return newPlayer;
    };
}

module.exports = { PlayerCreateUseCase };
