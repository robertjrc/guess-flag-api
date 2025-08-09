const { GroupCreateUseCase } = require("../../src/application/usecases/group/create");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should create a group", async () => {
    const repository = new GroupInMemoryRepository();

    const data = {
        id,
        name: "JOGOS"
    }

    const createGroupUseCase = new GroupCreateUseCase(repository);
    const response = await createGroupUseCase.execute(data);

    const groupSaveUsecase = new GroupSaveChangesUseCase(repository);
    await groupSaveUsecase.execute(id, response.value);

    expect(response.success).toBe(true);
});
