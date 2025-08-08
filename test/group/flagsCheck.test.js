const { GroupFlagsCheckUseCase } = require("../../src/application/usecases/group/flagsCheck");
const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should check if flags length is below 5 or iguals", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    const difficulty = response.value.current_info.flags_difficulty;

    console.log("before: ", response.value["easy"].length);

    const checkResponse = new GroupFlagsCheckUseCase().execute(response.value[difficulty], difficulty);

    response.value["easy"] = checkResponse.flags

    console.log("after: ", response.value["easy"].length);

    expect(checkResponse.success).toBe(true);
});
