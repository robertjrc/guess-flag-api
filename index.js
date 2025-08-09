const { GroupController } = require("./src/adapters/controllers/groupController");
const { PlayerController } = require("./src/adapters/controllers/playerController");

class GuessFlag {
    constructor() {
        this.Group = new GroupController();
        this.Player = new PlayerController();
    };
}

module.exports = { GuessFlag };
