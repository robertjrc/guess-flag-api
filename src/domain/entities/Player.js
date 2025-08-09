class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.score = 0;
        this.hits = 0;
        this.errors = 0;
        this.moves = 0;
    }

    static won(player, difficultyLevel) {
        switch (difficultyLevel) {
            case 1:
                player.score += 3;
                break;
            case 2:
                player.score += 5;
                break;
            case 3:
                player.score += 9;
                break;
        }

        player.hits += 1;
        player.moves += 1;

        return player;
    };

    static lose(player) {
        player.score -= 3;
        player.errors += 1;
        player.moves += 1;

        return player;
    };
}

module.exports = { Player };
