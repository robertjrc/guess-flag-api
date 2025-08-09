const { Message } = require("../../../common/message");
const { Player } = require("../../../domain/entities/Player");

class PlayerCreateUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    };

    execute(request) {
        const player = this.#_repository.getById(request.id, request.group);
        if (player) return Message.failure("Jogador já existe.");

        const newPlayer = new Player(request.id, request.name);

        return Message.success(`${newPlayer.name} foi criado com sucesso.`, newPlayer);
    };
}

module.exports = { PlayerCreateUseCase };
