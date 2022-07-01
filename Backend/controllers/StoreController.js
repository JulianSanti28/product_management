let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};
const storeController = {};

storeController.listar = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM store WHERE user_id = ?', [id], (err, stores) => {
            if (err) {
                respuesta.error = true;
                respuesta.codigo = 500;
                respuesta.mensaje = 'Error interno del servidor';
                res.status(500).json(respuesta);
            }
            respuesta.stores = stores;
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Tiendas listadas correctamente';
            res.json(respuesta);
        });
    }
);
}

storeController.crear = (req, res) => {
    const data = req.body;
    data.estado = 'PENDIENTE';
    req.getConnection((err, conn) => {
        if(err){
            res.json(err);
        }
        conn.query('INSERT INTO store set ?', [data], (err, store) => {
            if(err){
                res.json(err);
            }
            respuesta.store = {
                nombre : data.nombre,
                usuario: data.nombre_sucursal,
                direccion: data.direccion,
                ciudad: data.ciudad,
                estado: data.estado,
                usuario: data.user_id,
            }
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Tienda creada exitosamente';
            res.json(respuesta);
        });
    }
);
}
module.exports = storeController;
