const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should get group by id", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    console.log(response);

    expect(response.success).toBe(true);
});
