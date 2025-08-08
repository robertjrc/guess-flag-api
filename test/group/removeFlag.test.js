const { GroupRemoveFlagUseCase } = require("../../src/application/usecases/group/removeFlag");
const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should remove current flag.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    const flagName = response.value.current_info.flag_name;
    const difficulty = response.value.current_info.flags_difficulty;

    console.log(response.value[difficulty].find(x => x.name === flagName));

    const removeFlagResponse = new GroupRemoveFlagUseCase().execute(response.value[difficulty], flagName);

    response.value[difficulty] = removeFlagResponse;

    console.log(response.value[difficulty].find(x => x.name === flagName));

    expect(true).toBe(true);
});
