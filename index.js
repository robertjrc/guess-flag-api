const { GroupController } = require("./src/adapters/controllers/groupController");

class GuessFlag {
    constructor() {
        this.group = new GroupController();
    };
}

module.exports = { GuessFlag };
