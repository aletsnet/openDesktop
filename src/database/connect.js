import base from './structure.js';
import data from './data.js';
import config from './config.js';
import Sequelize from 'sequelize';

const dataBase = {
    async comprobar() {


        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'local.db',
        })

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        // await sqlite.connect(config.database.ruta + config.database.nombre,config.database.keypass); // ,config.database.algorithm);
        // const sequelize = await new Sequelize({ dialect: 'sqlite', storage: config.database.nombre});
        //  sequelize.authenticate();
        /*
        const list = await sqlite.run("SELECT * FROM sqlite_master WHERE type ='table' AND name != 'sqlite_sequence'");
        console.log("Comprobando Base de datos", list.length);
        if(list.length == 0){
            //creando base de datos
            console.log("Creando Base", base);
            for(let index in base){
                let tabla = base[index];
                let querySQL;
                let sqlCampos = "";
                for(let cols in tabla){
                    sqlCampos += (sqlCampos != "" ? ", " : "") + cols + " " + tabla[cols]; 
                }
                querySQL = " create table if not exists " + index + " (" + sqlCampos + "); ";
                await sqlite.run(querySQL);
                console.log(index,"ok");
            }

            //data
            console.log("Data");
            for(let item in data){ 
                //console.log("Data ",item);
                let rows = data[item];
                let campos =  "";
                let insert = "";
                
                rows.campos.map( row => {
                    campos += (campos != "" ? "," : "") + row;
                });

                rows.data.map( row => {
                    let camp = "";
                    row.map((cols, i) => { if(rows.campos[i]){  camp += (camp!="" ? ", " : "") + '"' + cols + '"'; } });
                    insert += (insert!=""?", " : "") + '(' + camp + ')';
                });

                let sqlquery = 'INSERT INTO ' + item + '('+campos+') VALUES ' + insert;
                await sqlite.run(sqlquery);
                console.log("Data: ",item,"ok");
            }
        }else{
            console.log("Tablas: ",list.length);
        }
        */
        sequelize.close();
    }
/*
    async reset(){
        await sqlite.connect(config.database.ruta + config.database.nombre,config.database.keypass,config.database.algorithm);
        const list = await sqlite.run("SELECT * FROM sqlite_master WHERE type ='table' AND name != 'sqlite_sequence'");
        if(list.length > 0){
            for(let row in list) {
                let sql = " drop table " + row.name;
                await sqlite.run(sql);
            }
        }
        sqlite.close();
    },

    async query(stringSQL){
        try{
            await sqlite.connect(config.database.ruta + config.database.nombre,config.database.keypass,config.database.algorithm);
            const list = await sqlite.run(stringSQL);
            sqlite.close();
            return list
        }catch(e){
            console.log(e);
        }
    },

    /* async insert(query){
        // query = {from: 'sqlite_master', insert: [{campo: 'valor'},{}]
        const db = await this.connect();
        await db(query.from).insert(query.insert);
    }, 

    async raw(stringSQL){
        try{
            await sqlite.connect(config.database.ruta + config.database.nombre,config.database.keypass,config.database.algorithm);
            await sqlite.run(stringSQL);
            sqlite.close();
            return true
        }catch(e){
            console.log(e);
        }
    }
    */
}

export default dataBase;