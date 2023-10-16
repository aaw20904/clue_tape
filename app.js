const http = require("http");
const fs = require("fs")
const mime = require("mime")


async function processRequest(req, res){
     switch(req.method){
        case "GET":
         await pipeFile(req,res);
        break;
        case "POST":
         res.statusCode = 405;
         res.end('');
        break;
        default:
         res.statusCode = 405;
          res.end('');
        //bad request

     }
}

async function pipeFile(req, res){
    //get file info
    try{
        let stat = await fs.promises.stat(`${__dirname}${req.url}`);
        const fileLength = stat.size;
        res.statusCode = 200;
        const mimeType = mime.getType(req.url);
        res.setHeader("Content-Type",mimeType);
        res.setHeader("Content-Length", fileLength);
        let rdStream = fs.createReadStream(`${__dirname}${req.url}`);
        rdStream.pipe(res);
    }catch(e){
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        let msg = "Not Found!"
        res.setHeader("Content-Length", msg.length);
        res.end(msg);
    }
    

}

let server = http.createServer(processRequest);
server.listen(80,()=>console.log("start listen on 80"));