const fs = require("node:fs/promises");
const { existsSync, mkdirSync } = require("node:fs");
const { join } = require("node:path");

require("dotenv").config({ quiet: true });

class InMemoryDb {
    #storage;

    constructor() {
        this.#storage = join(
            process.cwd(),
            `${process.env.STORAGE_PATH}/flag_storage`
        );
        this.#init();
    }

    async #init() {
        if (!existsSync(this.#storage)) mkdirSync(this.#storage);
    }

    async saveChangesAsync(id, data) {
        await fs.writeFile(`${this.#storage}/${id}.json`, JSON.stringify(data, null, 2));
    }

    async findAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        return (!existsSync(group) ? null : JSON.parse(readFileSync(group)));
    }

    async removeAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        if (existsSync(group)) await fs.unlink(group);
    }
}

module.exports = { InMemoryDb }
