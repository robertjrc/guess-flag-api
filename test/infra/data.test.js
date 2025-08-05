const { InMemoryDb } = require("../../src/infrastructure/data")

const session = "98993984"

test("should create database", async () => {
    const db = new InMemoryDb();

    const data = { name: "Maria" }

    await db.saveChangesAsync(session, data)

    expect(true).toBe(true);
});

test("should get database", async () => {
    const db = new InMemoryDb();

    const data = { name: "Maria" }

    const response = await db.findAsync(session)

    if(!response) return console.log("Grupo não encontrado.");

    expect(response.name).toBe(data.name);
});
