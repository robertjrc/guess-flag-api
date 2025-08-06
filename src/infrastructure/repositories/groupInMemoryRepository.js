const { InMemoryDb } = require("../data/dbContext");

class GroupInMemoryRepository {
    #db = new InMemoryDb(); 

    async add(group) {
        await this.#db.saveChangesAsync(group.session, group);
    }

    async getBySession(session) {
        const group = await this.#db.findAsync(session);
        return (!group) ? null : group;
    }

    async saveAsync(session, group) {
        await this.#db.saveChangesAsync(session, group);
    }

    async removeAsync(session) {
        await this.#db.removeAsync(session);
    }
}

module.exports = { GroupInMemoryRepository }
