const { FlagsCheckUseCase } = require("../../src/application/usecases/group/flagsCheck");
const { GroupGetBySessionUseCase } = require("../../src/application/usecases/group/getBySession");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const session = "930202030"

test("should check if flags length is below 5 or iguals", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    const difficulty = response.value.current_info.flags_difficulty;

    console.log("before: ", response.value["easy"].length);

    const checkResponse = new FlagsCheckUseCase().execute(response.value[difficulty], difficulty);

    response.value["easy"] = checkResponse.flags

    console.log("after: ", response.value["easy"].length);

    expect(checkResponse.success).toBe(true);
});
