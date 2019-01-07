module.exports = (sequelize, DataTypes) => {

    const Softwares = sequelize.define('Softwares', {
        name: { type: DataTypes.STRING },
        role: DataTypes.ENUM('web', 'moble', 'desktop')
    }, { paranoid: true });

    Softwares.associate = models => {

        Softwares.hasMany(models.Tests, { foreignKey: 'sofwtareId', as: 'tests' });
    }

    return Softwares;
}