const BaseError = require("./base.error");
const {StatusCode}=require('http-status-codes');

const BaseError=require(./BaseError);
class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("BadRequest",StatusCode.BAD_REQUEST,`Invalid structure for ${propertyName} provided`,details)
    }

}

module.exports=BadRequest;