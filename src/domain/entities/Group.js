class Group {
    constructor(session, name) {
        this.status = true
        this.session = session
        this.name = name
        this.players = []
        this.easy = []
        this.medium = []
        this.hard = []
        this.current_info = {
            name: null,
            img_url: null,
            difficulty: null,
            alternatives: []
        }
        this.moves = 0
        this.level = 1
    }
}

module.exports = { Group }
