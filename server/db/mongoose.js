var mongoose = require('mongoose');


// if(process.env.PORT){
//     connectPath = "mongodb://<dbuser>:<dbpassword>@ds229549.mlab.com:29549/todoapp";
//     options= {
//         auth: {
//             user: 'sys',
//             password: 'admin'
//         }
//     }
//    }else{
//     connectPath = "mongodb://localhost:27017/TodoApp";
//     options = {}
//    }


// mongoose.Promise = global.Promise;
// mongoose.connect(connectPath,options);


//copy the link from "To connect using a driver via the standard MongoDB URI" section
//insert db user name and password here
const REMOTE_MONGO = 'mongodb://sys:admin@ds229549.mlab.com:29549/todoapp';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to Mongo instance.')
}, (err) => {
    console.log('Error connecting to Mongo instance: ', err);
});

module.exports = { mongoose };