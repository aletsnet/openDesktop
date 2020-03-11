const base = {
    bs_log : {
        id_log : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        nivel : ' INTEGER DEFAULT (1) ',
        descript : ' STRING ',
        date_event : ' DATETIME '
    },
    bs_roles : {
        id_roles : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        nombre : ' STRING NOT NULL',
        descripcion : ' STRING ',
        activo : ' BOOLEAN DEFAULT true ',
        borrado : ' BOOLEAN DEFAULT false NOT NULL'
    },
    bs_modulos : {
        id_modulos : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        modulo : ' STRING  NOT NULL ',
        icon : ' STRING ',
        img : ' STRING ',
        status : ' INTEGER NOT NULL DEFAULT (1) ',
        borrado : ' BOOLEAN NOT NULL DEFAULT false '
    },
    bs_servicios : {
        id_servicios : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        id_catalogos : ' REFERENCES bs_modulos (id_modulos) ON DELETE RESTRICT ON UPDATE CASCADE NOT NULL ',
        servicio : ' STRING  NOT NULL ',
        accion : ' STRING ',
        param_default : ' STRING ',
        icon : ' STRING ',
        img : ' STRING ',
        status : ' INTEGER DEFAULT (1) ',
        borrado : ' BOOLEAN NOT NULL DEFAULT false '
    },
    bs_catalogos : {
        id_catalogos : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        nombre : ' STRING  NOT NULL ',
        activo : ' BOOLEAN DEFAULT true ',
        borrado : ' BOOLEAN DEFAULT false '
    },
    bs_catalogos_detalle : {
        id_catalogos_detalle : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        id_catalogos : ' REFERENCES bs_catalogos (id_catalogos) ON DELETE RESTRICT ON UPDATE CASCADE NOT NULL ',
        elemento : ' STRING NOT NULL ',
        valor : ' STRING (11) NOT NULL ',
        activo : ' BOOLEAN DEFAULT true ',
        borrado : ' BOOLEAN DEFAULT false ',
    },
    bs_roles_servicios : {
        id_roles_servicios : ' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ',
        id_roles : ' REFERENCES bs_roles (id_roles) ON DELETE RESTRICT ON UPDATE CASCADE NOT NULL ',
        id_servicios : ' REFERENCES bs_servicios (id_servicios) ON DELETE RESTRICT ON UPDATE CASCADE NOT NULL '
    }
}

export default base;