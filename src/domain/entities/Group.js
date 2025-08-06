const { easy, medium, hard } = require("../../infrastructure/seeds/flags.json");
const { RNG } = require("../../application/utils/RNG")

class Group {
    constructor(session, name) {
        this.status = true
        this.session = session
        this.name = name
        this.players = []
        this.easy = easy
        this.medium = medium
        this.hard = hard
        this.current_info = {
            flag_name: null,
            flag_img: null,
            flags_difficulty: null,
            alternatives: []
        }
        this.moves = 0
        this.level = 1
    }

    static difficultyGenerator() {
        const randLevel = RNG(1, 4);
        let difficulty;

        switch (randLevel) {
            case 1:
                difficulty = "easy";
                break;
            case 2:
                difficulty = "medium";
                break;
            case 3:
                difficulty = "hard";
                break;
        }

        return { difficulty, number: randLevel };
    };

    static alternativesGenerator(flags, target) {
        let alternatives = [];

        alternatives.push(target);

        do {
            let newFlag = flags[RNG(0, flags.length)];

            if (!alternatives.includes(newFlag.name)) {
                alternatives.push(newFlag.name);
            }
        } while (alternatives.length <= 3);

        console.log(alternatives);

        const shuffleAlternatives = (input) => {
            for (let i = input.length - 1; i > 0; i--) {
                const j = RNG(0, i + 1);
                [input[i], input[j]] = [input[j], input[i]];
            };

            return input;
        };

        const shufflealternatives = shuffleAlternatives(alternatives);
        return shufflealternatives;
    };
}

module.exports = { Group }
