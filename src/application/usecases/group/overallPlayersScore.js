class GroupOverallPlayersScore {
    execute(players) {
        let text = "*PONTUAÇÃO GERAL*\n";

        players.sort((x, y) => {
            return x.score - y.score;
        }).reverse();

        for (let player of players) {
            text += `\n*${player.name}\n`
            text += "╰─ ";
            text += `🔥 ${player.score} pontos\n`;
            text += `       🎯 ${((player.hits / player.moves) * 100).toFixed(0)}% de certos`;
            text += "\n";
        }

        return text;
    }
}

module.exports = { GroupOverallPlayersScore }
