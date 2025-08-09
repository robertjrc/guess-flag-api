const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupOverallPlayersScore } = require("../../src/application/usecases/group/overallPlayersScore");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const groupId = "930202030"

test("should get overall score.", async () => {
    const groupRepository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(groupRepository);
    const groupResponse = await getGroupUseCase.execute(groupId);

    const overallScoreUseCase = new GroupOverallPlayersScore();
    const overallScoreResponse = overallScoreUseCase.execute(groupResponse.value.players);

    console.log(overallScoreResponse);

    expect(groupResponse.success).toBe(true);
});
