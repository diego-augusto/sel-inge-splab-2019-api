module.exports = (sequelize, DataTypes) => {

    const People = sequelize.define('People', {
        name: { type: DataTypes.STRING },
        username: { type: DataTypes.STRING },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.ENUM('engineer', 'tester')
    }, { paranoid: true });

    return People;
}