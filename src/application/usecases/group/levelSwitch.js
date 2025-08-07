class GroupLevelSwitchUseCase {
    execute(level) {
        let text;

        switch (level) {
            case 1:
                text = "Nível: *Fácil* 🟢";
                break;
            case 2:
                text = "Nível: *Médio* 🟡";
                break;
            case 3:
                text = "Nível: *Difícil* 🔴";
                break;
        }

        return text;
    }
}

module.exports = { GroupLevelSwitchUseCase }
