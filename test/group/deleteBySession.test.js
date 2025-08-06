const { GroupDeleteBySessionUseCase } = require("../../src/application/usecases/group/deleteBySession");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should delete grupo by session", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupDeleteBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    console.log(response);

    expect(response.success).toBe(true);
});
