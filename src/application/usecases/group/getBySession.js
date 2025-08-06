const { Message } = require("../../../common/message");

class GroupGetBySessionUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(session) {
        const group = await this.#_repository.getBySession(session);
        if (!group) return Message.failure("Grupo não encontrado.");

        return Message.success(`${group.name} encontrado com sucesso.`, group);
    }
}

module.exports = { GroupGetBySessionUseCase }
