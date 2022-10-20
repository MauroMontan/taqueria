import * as http from "http";
import * as nStatic from "node-static";

var fileServer = new nStatic.Server("./");

console.log("listening on 8000");
http
  .createServer(function (req, res) {
    fileServer.serve(req, res);
  })
  .listen(8000);
