process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
const server = require('../unittest/unittest_server');
let should = chai.should();
chai.use(chaiHttp);

describe('Products', () => {
    beforeEach((done) => {
        done();
    });
    // Menthod Get 
    describe('/GET products', () => {
        it('GET all the product', (done) => {
            chai.request(server)
                .get('/v1/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('Get the product_id exist in couchbase',(done) => {
            chai.request(server)
                .get('/v1/products').query({product_id : 3})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('Get the product_id not exist in couchbase',(done) => {
            chai.request(server)
                .get('/v1/products').query({product_id : 100})
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('message').eql('No data found');
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
    });
   

    // Menthod Post
    describe('/POST product', () => {
        it('POST a product have to product_id and product_name', (done) => {
            let item = {
                    product_id : "1",
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .post('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('add data success');
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('POST a product do not have product_id and have to product_name', (done) => {
            let item = {
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .post('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Invalid parameters');
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('POST a product have to product_id and do not have to product_name', (done) => {
            let item = {
                    product_id : "1",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .post('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Invalid parameters');
                    res.should.be.json;
                    //console.log('Res:', res.body);
                    done();
                });
        });
       
    }); 

     // Menthod PUT
     describe('/PUT product', () => {
        it('PUT a product exist with product_id', (done) => {
            let item = {
                    product_id : "1",
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .put('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('update data success');
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('PUT a product do not exists with product_id', (done) => {
            let item = {
                    product_id : "101",
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .put('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('update data success');
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('PUT a product do not have product_id', (done) => {
            let item = {
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .put('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Invalid parameters');
                    //console.log('Res:', res.body);
                    done();
                });
        });
       
    }); 

    // Menthod DELETE
    describe('/DELETE product', () => {
        it('DELETE a product exist with product_id', (done) => {
            let item = {
                    product_id : "1",
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .delete('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('delete data success');
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('DELETE a product do not exists with product_id', (done) => {
            let item = {
                    product_id : "102",
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .delete('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Bad request !');
                    //console.log('Res:', res.body);
                    done();
                });
        });
        it('DELETE a product do not have product_id', (done) => {
            let item = {
                    product_name : "Card",
                    product_descprition : "Card Prepaid",
                    product_addr : "112, CMT8"
            };
            chai.request(server)
                .delete('/v1/products')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').eql('Invalid parameters');
                    //console.log('Res:', res.body);
                    done();
                });
        });
       
    }); 

});
