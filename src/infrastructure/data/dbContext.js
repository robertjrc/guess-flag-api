const { 
    existsSync,
    mkdirSync,
    writeFileSync,
    readFileSync,
    unlinkSync } = require("fs")
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

    async saveChangesAsync(id, data) {
        writeFileSync(`${this.#storage}/${id}.json`, JSON.stringify(data, null, 2));
    }

    async findAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        return (!existsSync(group) ? null : JSON.parse(readFileSync(group)));
    }

    async removeAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        if (existsSync(group)) unlinkSync(group);
    }
}

module.exports = { InMemoryDb }
