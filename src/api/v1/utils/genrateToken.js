module.exports.generateToken = () => {
    return Math.random().toString(36).slice(2);
};