class Message {
    static success(message, value) {
        return {
            success: true,
            message,
            data: value
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
