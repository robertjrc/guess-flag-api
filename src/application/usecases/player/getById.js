const { Message } = require("../../../common/message");

class PlayerGetByIdUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    };

    execute(id, group) {
        const player = this.#_repository.getById(id, group);
        if (!player) Message.failure("Player não encontrado.");

        return Message.success("Player encontrado com sucesso.", player);
    };
}

module.exports = { PlayerGetByIdUseCase }
