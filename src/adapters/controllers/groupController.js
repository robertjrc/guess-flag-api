const { GroupCreateUseCase } = require("../../application/usecases/group/create");
const { GroupDeleteByIdUseCase } = require("../../application/usecases/group/deleteById");
const { GroupFlagsCheckUseCase } = require("../../application/usecases/group/flagsCheck");
const { GroupGetByIdUseCase } = require("../../application/usecases/group/getById");
const { GroupLevelSwitchUseCase } = require("../../application/usecases/group/levelSwitch");
const { GroupSaveChangesUseCase } = require("../../application/usecases/group/save");
const { GroupSetFlagUseCase } = require("../../application/usecases/group/setFlag");
const { GroupInMemoryRepository } = require("../../infrastructure/repositories/groupInMemoryRepository");

class GroupController {
    #inMemoryRespository = new GroupInMemoryRepository();

    async create(request) {
        const createGroup = new GroupCreateUseCase(this.#inMemoryRespository);
        return await createGroup.execute(request);
    }

    async getById(id) {
        const getGroupById = new GroupGetByIdUseCase(this.#inMemoryRespository);
        return await getGroupById.execute(id);
    }

    async deleteById(id) {
        const deleteGroupById = new GroupDeleteByIdUseCase(this.#inMemoryRespository);
        await deleteGroupById.execute(id);
    }

    flagCheck(flags, difficulty) {
        return new GroupFlagsCheckUseCase().execute(flags, difficulty);
    }

    levelSwitch() {
        return new GroupLevelSwitchUseCase().execute();
    }

    setFlag(group) {
        return new GroupSetFlagUseCase().execute(group);
    }

    async save(id, data) {
        const saveGroupChanges = new GroupSaveChangesUseCase(this.#inMemoryRespository);
        await saveGroupChanges.execute(id, data);
    }
}

module.exports = { GroupController }
