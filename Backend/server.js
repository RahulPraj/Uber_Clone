const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


// port at which server run
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});