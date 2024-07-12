const { StatusCodes } = require("http-status-codes");

const BaseError=require("./base.error");
const InternalServerError extends BaseError{
    constructor(details){
        super("Internal Server Error",StatusCodes.INTERNAL_SERVER_ERROR,`Something went wrong!!`,details);
    }
}
module.exports=InternalServerError;