
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const listController = {}

listController.listar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM products_list', (err, lists) => {
            if (err) {
                res.json(err);
            }
            respuesta.listas = lists;
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Listas de productos listadas correctamente';
            res.json(respuesta);
        });
    }
);
}

listController.listarPorId = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM products_list WHERE user_id = ?', [id], (err, lists) => {
            if (err) {
                res.json(err);
            }
            respuesta.lists = lists;
            respuesta.error = false;
            respuesta.codigo = 200;
            respuesta.mensaje = 'Lista de productos listadas correctamente';
            res.json(respuesta);
        });
    }
);
}
listController.crear = (req, res) => {
const data = req.body;
req.getConnection((err, conn) => {
    if(err){
        res.json(err);
    }
    conn.query('INSERT INTO products_list set ?', [data], (err, list) => {
        if(err){
            res.json(err);
        }
        respuesta.list = {
            nombre : data.nombre,
            usuario: data.user_id
        }
        respuesta.error = false;
        respuesta.codigo = 200;
        respuesta.mensaje = 'Lista creada exitosamente';
        res.json(respuesta);
    });
})
}

module.exports = listController;