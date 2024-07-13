const mongoose=require("mongoose");
const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title can not be empty']
    },
    description:{
        type:String,
        required:[true,'Description can not be empty']
    },
    difficulty:{
        type:String,
        enum:['Easy','Medium','Hard'],
        required:[true,'Difficulty can not be empty'],
        default:'easy'
    },
    testCases:[
        {
            input:{
               type:String,
               required:true
            },
            output:{
                type:String,
               required:true
            }
        }

    ],
    editorial: {
        type: String
    }

});


const Problem=mongoose.model('Problem',problemSchema);
module.exports=Problem;


