const product = require('../../class/category/product')
module.exports = {
    getProduct: async (req, res) => {
        try {
            req.setTimeout(50000);
            var rs = [];
            const result = await product.getItem(req.query.product_id);

            if (result.length <= 0) {
                return res.status(404).json({
                    errorCode: 404,
                    message: "No data found"
                });
            }
            for (var i = 0; i < result.length; i++) {
                rs.push({
                    "product_id": result[i].product_id,
                    "product_name": result[i].product_name,
                    "product_descprition": result[i].product_descprition,
                    "product_addr": result[i].product_addr
                })
            }
            return res.status(200).json(rs)
        }
        catch (err) {
            return res.status(400).json({
                errorCode: 400,
                message: 'Bad request !'
            });
        }
    },
    addProduct: async (req, res) => {
        try {
            const data = req.body;
            if (!data.product_id || !data.product_name) {
                return res.status(400).json({
                    errorCode: 400,
                    message: "Invalid parameters"
                });
            }
            const result = await product.addItem(data.product_id, data.product_name, data.product_descprition, data.product_addr);

            return res.status(200).json({
                message: result.message,
                data: result.data
            });
        }
        catch (err) {
            return res.status(400).json({
                errorCode: 400,
                message: 'Bad request !'
            });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const data = req.body;
            if (!data.product_id) {
                return res.status(400).json({
                    errorCode: 400,
                    message: "Invalid parameters"
                });
            }
            const result = await product.updateItem(data.product_id, data.product_name, data.product_descprition, data.product_addr);

            return res.status(200).json({
                message: result.message,
                data: result.data
            });
        }
        catch (err) {
                return res.status(400).json({
                    errorCode: 400,
                    message: 'Bad request !'
                });
            }
        },
        deleteProduct: async (req, res) => {
            try {
                const data = req.body;
                if (!data.product_id) {
                    return res.status(400).json({
                        errorCode: 400,
                        message: "Invalid parameters"
                    });
                }
                const result = await product.deleteItem(data.product_id);

                return res.status(200).json({
                    message: result.message,
                    data: result.data
                });
            }
            catch (error) {
                return res.status(400).json({
                    errorCode: 400,
                    message: "Bad request !"
                });
            }
        }
    };