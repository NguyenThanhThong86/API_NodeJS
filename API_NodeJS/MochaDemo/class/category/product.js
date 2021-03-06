const db = require('../../db_apis/database');
const N1qlQuery = require('couchbase').N1qlQuery;
const getItem = function (product_id){
    return new Promise((resolve, reject) => {
        
        let query = `select f.product_id, f.product_addr, f.product_descprition, f.product_name FROM digitalPlatform f  `;
        let binds = [];
        if (product_id) {
            binds.push(product_id.toString());
            query += ` WHERE f.product_id=$1 `;
        }
        db.bucket.query(N1qlQuery.fromString(query), binds, (err, rows) => {
                if (err)
                    reject(err);
                else
                    resolve(rows);
            });
    });
};
const addItem = function (product_id, product_name, product_descprition, product_addr){
    const item = {
        product_id,
        product_name,
        product_descprition,
        product_addr
    };
    return new Promise((resovle,reject)=>{
        db.bucket.upsert(product_id.toString(),item, (err, result)=>{
            // if(err)
            // {
            //     reject(err);
            // }
            resovle({
                message:"add data success",
                data: result
            });
        });
    });
};
const updateItem = function (product_id, product_name, product_descprition, product_addr){
    const item = {
        product_id,
        product_name,
        product_descprition,
        product_addr
    };
    return new Promise((resovle,reject)=>{
        db.bucket.upsert(product_id.toString(),item, (err, result)=>{
            // if(err)
            // {
            //     reject(err);
            // }
            resovle({
                message:"update data success",
                data: result
            });
        });
    });
};
const deleteItem = function (product_id){
    return new Promise((resovle,reject)=>{
        db.bucket.remove(product_id.toString(), (err, result)=>{
            if(err)
            {
                reject(err);
            }
            resovle({
                message:"delete data success",
                data: result
            });
        });
    });
};

// const deleteItem1 = function (product_id){
//     return new Promise((resovle,reject)=>{
//         db.bucket.remove(product_id.toString(), (err, result)=>{
//             if(err)
//             {
//                 reject(err);
//             }
//             resovle({
//                 message:"delete data success",
//                 data: result
//             });
//         });
//     });
// };
module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem
};
