const { Message } = require("../../../common/message");

class GroupGetByIdUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id) {
        const group = await this.#_repository.getBySession(id);
        if (!group) return Message.failure("Grupo não encontrado.");

        return Message.success(`${group.name} encontrado com sucesso.`, group);
    }
}

module.exports = { GroupGetByIdUseCase }
