let Order = require("../../schema/Order");

let getOrder = function(req, res, callback) {
    Order.find({"openStatus": true}, function(err, orders){
        if(err){
            callback(err, null);
        } else{
            callback(null, orders);
        }
    });
};

module.exports = getOrder;