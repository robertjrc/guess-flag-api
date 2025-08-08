const { Message } = require("../../../common/message");

class GroupDeleteByIdUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id) {
        const group = await this.#_repository.getBySession(id);
        if (!group) return Message.failure("Grupo não encontrado.");

        await this.#_repository.removeAsync(id);

        return Message.success(`grupo deletado com sucesso.`, null);
    }
}

module.exports = { GroupDeleteByIdUseCase }
