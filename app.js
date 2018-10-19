const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

//connect to mlab database
mongoose.connect('mongodb://tanner:test123@ds039175.mlab.com:39175/graphql', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Connected to Database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000')
})