const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { PlayerCreateUseCase } = require("../../src/application/usecases/player/create");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");
const { PlayerInMemoryRepository } = require("../../src/infrastructure/repositories/playerInMemoryRepository");

const groupId = "930202030"

test("should create player", async () => {
    const groupRepository = new GroupInMemoryRepository();
    const playerRepository = new PlayerInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(groupRepository);
    const getGroupResponse = await getGroupUseCase.execute(groupId);

    expect(getGroupResponse.success).toBe(true);

    const data = {
        id: "939920394092@c.us",
        name: "Maria",
        group: getGroupResponse.value
    }

    const createPlayerUseCase = new PlayerCreateUseCase(playerRepository);
    const createPlayerResponse = createPlayerUseCase.execute(data);

    getGroupResponse.value.players.push(createPlayerResponse.value);

    console.log(createPlayerResponse);

    const groupSaveUsecase = new GroupSaveChangesUseCase(groupRepository);
    await groupSaveUsecase.execute(groupId, getGroupResponse.value);

    expect(createPlayerResponse.success).toBe(true);
});
