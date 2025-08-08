const { InMemoryDb } = require("../data/dbContext");

class GroupInMemoryRepository {
    #db = new InMemoryDb(); 

    async getBySession(id) {
        const group = await this.#db.findAsync(id);
        return (!group) ? null : group;
    }

    async saveAsync(id, group) {
        await this.#db.saveChangesAsync(id, group);
    }

    async removeAsync(id) {
        await this.#db.removeAsync(id);
    }
}

module.exports = { GroupInMemoryRepository }
