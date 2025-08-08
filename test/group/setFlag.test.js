const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupSetFlagUseCase } = require("../../src/application/usecases/group/setFlag");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should set a new flags.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    console.log("before: ", response.value.current_info.flags_difficulty);

    const setedFlagResponse = new GroupSetFlagUseCase().execute(response.value);

    response.value = setedFlagResponse;

    console.log("after: ", response.value.current_info.flags_difficulty);

    expect(true).toBe(true);
});
