const data = {
    bs_roles : {
        campos:["nombre", "descripcion"],
        data: [
            ["Admin", "Usuario administrador"],
            ["User", "Usuario estandar"]
        ]
    },
    bs_modulos : {
        campos:["modulo", "icon", "img"],
        data: [
            ["Sistema", "fa fa-cogs", "assets/system/application_view_icons.png"],
        ]
    },
    bs_servicios : {
        campos:["id_catalogos", "servicio", "accion", "icon"],
        data: [
            [1, "Usuarios y permisos", "openView('view/usuarios')", "fa fa-user"],
            [1, "Servicios", "openView('view/servicios')", "fa fa-cubes"],
            [1, "Catalogos", "openView('view/catalogos')", "fa fa-list"],
        ]
    },
    bs_catalogos : {
        campos:["nombre"],
        data: [
            ["Estado del registro"]
        ]
    },
    bs_catalogos_detalle : {
        campos:["id_catalogos", "elemento", "valor"],
        data: [
            [1, "Activo", "1"],
            [1, "Inactivo", "2"]
        ]
    },
    bs_roles_servicios : {
        campos:["id_roles", "id_servicios"],
        data: [
            [1, 1],
            [1, 2],
            [1, 3],
        ]
    },
    bs_usuarios :{
        campos:['id_roles','usuario', 'pass', 'nombre', 'email', 'avatar'],
        data: [
            [1, 'user', '123456', 'Usuario Jessy', 'user@jessy.io', 'assets/img/avatar.jpg']
        ]
    }
}

export default data;