class Message {
    static success(message, data) {
        return {
            success: true,
            message,
            data
        }
    }

    static failure(message) {
        return {
            success: false,
            message
        }
    }
}

module.exports = { Message }
