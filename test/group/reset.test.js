const { GroupGetByIdUseCase } = require("../../src/application/usecases/group/getById");
const { GroupResetUseCase } = require("../../src/application/usecases/group/reset");
const { GroupSaveChangesUseCase } = require("../../src/application/usecases/group/save");
const { GroupInMemoryRepository } = require("../../src/infrastructure/repositories/groupInMemoryRepository");

const id = "930202030"

test("should reset group.", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetByIdUseCase(repository);
    const response = await getGroupUseCase.execute(id);

    console.log("before: ", response.value.current_info.flags_difficulty);

    const resetedGroupUsecase = new GroupResetUseCase();
    const resetedResponse = await resetedGroupUsecase.execute(
        { id: response.value.id, name: response.value.name });
    

    response.value = resetedResponse.value;

    console.log("after: ", response.value.current_info.flags_difficulty);

    const groupSaveUsecase = new GroupSaveChangesUseCase(repository);
    await groupSaveUsecase.execute(id, response.value);

    expect(resetedResponse.success).toBe(true);
});
