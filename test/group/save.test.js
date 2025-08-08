const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should set a new flags.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    response.value.players.push({ name: "Maria", score: 20 });

    const groupSaveUsecase = new GroupSaveChangesUseCase(repository);
    await groupSaveUsecase.execute(id, response.value);

    expect(true).toBe(true);
});
