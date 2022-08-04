const messages = {
    create(name) {
        return `${name} has been created`;
    },
    update(name) {
        return `${name} has been updated`;
    },
    delete(name) {
        return `${name} has been deleted`;
    }
};

module.exports = messages;