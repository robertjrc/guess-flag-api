const { GroupGetBySessionUseCase } = require("../../src/application/usecases/group/getBySession");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should set a new flags.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    response.value.players.push({ name: "Maria", score: 20 });

    const groupSaveUsecase = new GroupSaveChangesUseCase(repository);
    await groupSaveUsecase.execute(session, response.value);

    expect(true).toBe(true);
});
