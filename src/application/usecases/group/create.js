const { Message } = require("../../../common/message");
const { Group } = require("../../../domain/entities/Group");
const { RNG } = require("../../utils/RNG");

class GroupCreateUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository
    }

    async execute(request) {
        const group = await this.#_repository.getBySession(request.id);
        if (group) return Message.failure("Grupo não encontrado.");

        const newGroup = new Group(request.id, request.name);
        const { difficulty, number } = Group.difficultyGenerator();

        const randFlag = newGroup[difficulty][RNG(0, newGroup[difficulty].length)];

        newGroup.current_info.flag_name = randFlag.name;
        newGroup.current_info.flag_img = randFlag.img;
        newGroup.current_info.flags_difficulty = difficulty;
        newGroup.current_info.alternatives = Group.alternativesGenerator(
            newGroup[difficulty],
            newGroup.current_info.flag_name);
        newGroup.level = number;
        newGroup.moves += 1;

        return Message.success("Grupo criado com sucesso.", newGroup);
    }
}

module.exports = { GroupCreateUseCase }
