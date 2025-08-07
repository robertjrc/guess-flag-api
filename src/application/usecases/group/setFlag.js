const { Group } = require("../../../domain/entities/Group");
const { RNG } = require("../../utils/RNG");

class GroupSetFlagUseCase {
    execute(group) {
        const { difficulty, number } = Group.difficultyGenerator();

        const flags = group[difficulty];
        const randFlag = flags[RNG(0, flags.length)];

        group.current_info.flag_name = randFlag.name;
        group.current_info.flag_img = randFlag.img;
        group.current_info.flags_difficulty = difficulty;
        group.current_info.alternatives = Group.alternativesGenerator(
            group[difficulty],
            group.current_info.flag_name);
        group.level = number;
        group.moves += 1;

        return group;
    }
}

module.exports = { GroupSetFlagUseCase };
