const { GroupCreateUseCase } = require("../../src/application/usecases/group/create");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should create a group", async () => {
    const repository = new GroupInMemoryRepository();

    const data = {
        session,
        name: "JOGOS"
    }

    const createGroupUseCase = new GroupCreateUseCase(repository);
    const response = await createGroupUseCase.execute(data);

    console.log(response);

    expect(response.success).toBe(true);
});
