import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';
// import resolvers from './resolvers';


const app = express();
const port = 8080;


app.get('/', (req,res)=>{
  res.send('Up and running')
})

const root = {lco: ()=> console.log("LeanrCodeOnline.in")}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,

}))

app.listen(port, ()=>{
  console.log("Running at port "+ port);
})
