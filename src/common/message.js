class Message {
    static success(message, value) {
        return {
            success: true,
            message,
            value
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
