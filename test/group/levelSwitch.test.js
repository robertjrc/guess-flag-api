const { GroupGetBySessionUseCase } = require("../../src/application/usecases/group/getBySession");
const { LevelSwitchUseCase } = require("../../src/application/usecases/group/levelSwitch");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should switch level difficulty", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    const switchResponse = new LevelSwitchUseCase().execute(response.value.level);

    console.log(switchResponse);

    expect(switchResponse).toBe("Nível: *Fácil* 🟢");
});
