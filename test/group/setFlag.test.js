const { GroupGetBySessionUseCase } = require("../../src/application/usecases/group/getBySession");
const { GroupSetFlagUseCase } = require("../../src/application/usecases/group/setFlag");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should set a new flags.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    console.log("before: ", response.value.current_info.flags_difficulty);

    const setedFlagResponse = new GroupSetFlagUseCase().execute(response.value);

    response.value = setedFlagResponse;

    console.log("after: ", response.value.current_info.flags_difficulty);

    expect(true).toBe(true);
});
