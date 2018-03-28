//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongodb: '+err);
    }
    console.log('Connect to mongodb server')
    const db=client.db('TodoApp')


    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todos: ',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    // db.collection('Users').insertOne({
    //     name:'Naruepanat Kittasin',
    //     age:21,
    //     location:'Bangkok'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todos: ',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    //close connection
    client.close();
});