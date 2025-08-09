const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { PlayerGetByIdUseCase } = require("../../src/application/usecases/player/getById");
const { Player } = require("../../src/domain/entities/Player");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");
const { PlayerInMemoryRepository } = require("../../src/infrastructure/repositories/playerInMemoryRepository");

const groupId = "930202030"

test("should player won.", async () => {
    const groupRepository = new GroupInMemoryRepository();
    const playerRepository = new PlayerInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(groupRepository);
    const groupResponse = await getGroupUseCase.execute(groupId);

    expect(groupResponse.success).toBe(true);

    const id = "939920394092@c.us";

    const getByIdPlayerUseCase = new PlayerGetByIdUseCase(playerRepository);
    const playerResponse = getByIdPlayerUseCase.execute(id, groupResponse.value);

    const playerWinUseCase = Player.won(playerResponse.value, groupResponse.value.level);

    playerResponse.value = playerWinUseCase;

    console.log(groupResponse.value.players);

    const groupSaveUsecase = new GroupSaveChangesUseCase(groupRepository);
    await groupSaveUsecase.execute(groupId, groupResponse.value);

    expect(playerResponse.success).toBe(true);
});
