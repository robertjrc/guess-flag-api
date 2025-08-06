const { GroupGetBySessionUseCase } = require("../../src/application/usecases/group/getBySession");

const session = "930202030"

test("should get group by session", async () => {
    const repository = new GroupInMemoryRepository();

    const getGroupUseCase = new GroupGetBySessionUseCase(repository);
    const response = await getGroupUseCase.execute(session);

    console.log(response);

    expect(response.success).toBe(true);
});
