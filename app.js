const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send({
        status: 200,
        message: 'success running on docker'
    })
})

app.listen(port,() => {
    console.log(`server running on port ${port}`);
})