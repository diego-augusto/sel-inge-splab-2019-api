module.exports = (sequelize, DataTypes) => {

    const Results = sequelize.define('Results', {
        result: { type: DataTypes.BOOLEAN },
    }, { paranoid: true });

    Results.associate = models => {
        Results.belongsTo(models.Tests, { foreignKey: 'testId' });
        Results.belongsTo(models.People, { foreignKey: 'createdBy' });
    };

    return Results;
}