'use strict';

const Post = (sequelize, DataTypes) => sequelize.define('Post', {
    postTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postContent: {
        type: DataTypes.STRING,
        defaultValue: 'Just smile!'
    } 

})

module.exports = Post;