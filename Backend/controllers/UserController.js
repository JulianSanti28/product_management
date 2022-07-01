
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const userController = {}
userController.listar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, users) => {
            if (err) {
                res.json(err);
            }
            res.json(users);
        });
    }
    );
}
userController.crear = (req, res) => {
   const data = req.body;
   req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        data.rol = "no_admin";
        conn.query('INSERT INTO users set ?', [data], (err, user) => {
            if(err){
                respuesta.error = true;
                respuesta.codigo = 500;
                respuesta.mensaje = 'Error al crear el usuario';
                res.json(respuesta);
            }
            respuesta.usuario = {
                nombre : data.nombre,
                apellido: data.apellido,
                email: data.email
            }
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Usuario creado correctamente';
            res.json(respuesta);
        });
    })
}
userController.login = (req, res) => {
        const data = req.body;
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM users WHERE email = ? AND contrasenia = ?', [data.email, data.contrasenia], (err, user) => {
                if (err) {
                    res.json(err);
                }
                if(user.length > 0){
                    respuesta.error = false;
                    respuesta.codigo = 200;
                    respuesta.ingreso = true;
                    respuesta.idUsuario = user[0]["id"];
                    respuesta.mensaje = 'Usuario encontrado';
                    res.json(respuesta);
                }else{
                    respuesta.error = false;
                    respuesta.codigo = 200;
                    respuesta.ingreso = false;
                    respuesta.mensaje = 'Usuario no encontrado';
                    res.json(respuesta);
                }
            }
        );
        }
    );
}

module.exports = userController;