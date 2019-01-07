'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('People', {
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
			username: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true
			},
			role: {
				allowNull: false,
				type: Sequelize.ENUM('engineer', 'tester'),
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
		return queryInterface.dropTable('People');
	}
};