'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Softwares', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			type: {
				allowNull: false,
				type: Sequelize.ENUM('web', 'mobile', 'desktop'),
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'People',
					key: 'id',
				},
				onDelete: 'CASCADE'
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Softwares');
	}
};