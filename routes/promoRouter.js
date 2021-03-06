const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')

.get((req,res,next) =>{
    res.end('will send all the promotions');
})
.post((req,res,next) =>{
    res.end('Will add the promotion: ' +req.body.name + ' with details: ' +req.body.description);
})
.put((req,res,next) =>{
     res.statusCode = 403;
     res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next) =>{
    res.end('Deleting all the promotions!');
})

module.exports = promoRouter;