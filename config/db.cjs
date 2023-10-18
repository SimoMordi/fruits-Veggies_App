


const mongoose = require('mongoose');

let connectionString = `mongodb+srv://SimoMordi:${process.env.MONGO_PASS}@cluster0.484d4pn.mongodb.net/Food?retryWrites=true&w=majority`
console.log(connectionString);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});