class GroupOverallPlayersScore {
    execute(players) {
        let text = "┌──⊣〔 *PONTUAÇÃO* 〕\n";
        text += "│\n"

        players.sort((x, y) => {
            return x.score - y.score;
        }).reverse();

        for (let player of players) {
            text += `├ 👤 *${player.name}*\n`
            text += `│  ├ pontos: *${player.score}*\n`;
            text += `│  └ acerto: *${((player.hits / player.moves) * 100).toFixed(0)}%*\n`;
            text += "│\n";
        }

        text += "│\n";
        text += "└──⊣";

        return text;
    }
}

module.exports = { GroupOverallPlayersScore }
