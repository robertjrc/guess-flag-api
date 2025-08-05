const { Message } = require("../../../common/message");
const { Group } = require("../../../domain/entities/Group");

class GroupCreateUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository
    }

    async execute(request) {
        const group = await this.#_repository.getBySession(request.session);
        if (group) return Message.failure("Grupo não encontrado.");

        const newGroup = new Group(request.session, request.name);

        await this.#_repository.add(newGroup);

        return Message.success("Grupo criado com sucesso.", newGroup);
    }
}

module.exports = { GroupCreateUseCase }
