import app from "./app.js"



app.listen(process.env.PORT, () => {
  console.log( `Server listening on port ${process.env.PORT} `);
});

app.get('/',(req,res)=>{
  res.status(200).send('welcome to safas school management system backend')

 
})