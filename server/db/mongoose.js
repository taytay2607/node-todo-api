var mongoose = require('mongoose');


if(process.env.PORT){
    connectPath = "mongodb://<dbuser>:<dbpassword>@ds229549.mlab.com:29549/todoapp";
    options= {
        auth: {
            user: 'sys',
            password: 'admin'
        }
    }
   }else{
    connectPath = "mongodb://localhost:27017/TodoApp";
    options = {}
   }


mongoose.Promise = global.Promise;
mongoose.connect(connectPath,options);

module.exports={mongoose};