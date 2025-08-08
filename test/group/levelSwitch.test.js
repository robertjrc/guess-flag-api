const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupLevelSwitchUseCase } = require("../../src/application/usecases/group/levelSwitch");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should switch level difficulty", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    const switchResponse = new GroupLevelSwitchUseCase().execute(response.value.level);

    console.log(switchResponse);

    expect(switchResponse).toBe("Nível: *Fácil* 🟢");
});
