const { existsSync, mkdirSync, writeFileSync, readFileSync } = require("fs")
const path = require("node:path")
require("dotenv/config");

class InMemoryDb {
    #storage;

    constructor() {
        this.#storage = path.join(
            process.cwd(), `${process.env.INMEMORY_DATA_SOURCE}/guessFlag_storage`);
        this.#init();
    }

    async #init() {
        if (!existsSync(this.#storage)) mkdirSync(this.#storage);
    }

    async saveChangesAsync(session, data) {
        writeFileSync(`${this.#storage}/${session}.json`, JSON.stringify(data, null, 2));
    }

    async findAsync(session) {
        const group = `${this.#storage}/${session}.json`;
        return (!existsSync(group) ? null : JSON.parse(readFileSync(group)));
    }
}

module.exports = { InMemoryDb }
