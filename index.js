import express from 'express';
import { graphqlHTTP } from 'express-graphql';

// import resolvers from './resolvers'
import schema from './schema';




const app = express();
const port = 8080;


app.get('/', (req,res)=>{
  res.send('Up and running')
})

const root = {lco: ()=> console.log("LearniingONline.io")};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(port, ()=>{
  console.log("Running at port "+ port);
})
