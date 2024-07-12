const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class Notimplemented extends BaseError{
    constructor(methodName){
        super("Not implemented Error",StatusCodes.NOT_IMPLEMENTED,`${methodName} Not Implemented`,{})
    }
}
module.exports=Notimplemented; 

