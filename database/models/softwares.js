module.exports = (sequelize, DataTypes) => {

    const Softwares = sequelize.define('Softwares', {
        name: { type: DataTypes.STRING },
        type: DataTypes.ENUM('web', 'mobile', 'desktop')
    }, { paranoid: true });

    Softwares.associate = models => {

        Softwares.hasMany(models.Tests, { foreignKey: 'softwareId', as: 'tests' });
    }

    return Softwares;
}