module.exports = (sequelize, DataTypes) => {
    return sequelize.define('bs_usuarios', {
        id_usuarios: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        id_roles: {},
        usuario : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pass :  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre :  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email :  {
            type: DataTypes.STRING,
        },
        avatar :  {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        borrado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });
};

  /****
   * 
   *   :{
        id_usuarios : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL',
        id_roles : ' REFERENCES bs_roles (id_roles) ON DELETE RESTRICT ON UPDATE CASCADE NOT NULL ',
        usuario : ' STRING  NOT NULL ',
        pass : ' STRING  NOT NULL ',
        nombre : ' STRING ',
        email : ' STRING ',
        avatar : ' STRING ',
        status : ' INTEGER DEFAULT (1) ',
        borrado : ' BOOLEAN DEFAULT false NOT NULL'
    }
   */