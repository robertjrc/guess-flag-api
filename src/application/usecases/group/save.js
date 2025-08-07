class GroupSaveChangesUseCase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(session, data) {
        await this.#_repository.saveAsync(session, data);
    }
}

module.exports = { GroupSaveChangesUseCase }
