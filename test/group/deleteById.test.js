const { GroupDeleteByIdUseCase } = require("../../src/application/usecases/group/deleteById");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should delete grupo by id", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupDeleteByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    console.log(response);

    expect(response.success).toBe(true);
});
