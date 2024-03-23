const exp=require('express')
const app=exp();
const mongodb=require('mongodb')
const mclient=mongodb.MongoClient;
mclient.connect('mongodb://127.0.0.1:27017')
.then(dbRef=>{
    const dbObj=dbRef.db('')
    dbObj.collection('')
    app.set('',)
})