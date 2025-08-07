class GroupRemoveFlagUseCase {
    execute(flags, currentFlag) {
        flags = flags.filter((jsonObject) => {
            return jsonObject["name"] != currentFlag;
        });

        return flags;
    };
}

module.exports = { GroupRemoveFlagUseCase }
