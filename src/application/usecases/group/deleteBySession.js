const { Message } = require("../../../common/message");

class GroupDeleteBySessionUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(session) {
        const group = await this.#_repository.getBySession(session);
        if (!group) return Message.failure("Grupo não encontrado.");

        await this.#_repository.removeAsync(session);

        return Message.success(`grupo deletado com sucesso.`, null);
    }
}

module.exports = { GroupDeleteBySessionUseCase }
