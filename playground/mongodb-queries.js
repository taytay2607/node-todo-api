const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var TodoId = '5abdd1ef73725d2a78f14464';
var UserId = '5abdd85cbfbf295f158e1af6'

if(!ObjectID.isValid(UserId)){
    return console.log('ID not valid')
}

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todo',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not match');
//     }
//     console.log('Todo by id',todo);
// }).catch((e)=>done(e));

User.findById(UserId).then((user)=>{
    if(!user){
        return console.log('Id not match');
    }
    console.log('user by id',JSON.stringify(user,undefined,2));
}).catch((e)=>done(e));
