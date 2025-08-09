class PlayerInMemoryRepository {
    getById(id, group) {
        const player = group.players.find(x => x.id === id);
        return (!player) ? null : player;
    };
}

module.exports = { PlayerInMemoryRepository };
