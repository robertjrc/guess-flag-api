const { easy, medium, hard } = require("../../../infrastructure/seeds/flags.json")

class GroupFlagsCheckUseCase {
    execute(flags, difficulty) {
        if (flags.length >= 5) return { success: false };

        switch (difficulty) {
            case "easy":
                flags = easy;
                break;
            case "medium":
                flags = medium;
                break;
            case "hard":
                flags = hard;
                break;
        }

        return { success: true, flags }
    }
}

module.exports = { GroupFlagsCheckUseCase }
