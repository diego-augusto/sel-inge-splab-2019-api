module.exports = (sequelize, DataTypes) => {

    const Tests = sequelize.define('Tests', {
        name: { type: DataTypes.STRING },
        type: DataTypes.ENUM('integration', 'unit', 'functional')
    }, { paranoid: true });

    Tests.associate = models => {
        Tests.belongsTo(models.Softwares, { foreignKey: 'softwareId' });
    };

    return Tests;
}