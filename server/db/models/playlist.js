'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

const Playlist = db.define('playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

module.exports = Playlist;
