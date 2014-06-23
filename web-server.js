//imports
var express  = require('express');
var app      = express();                 

//Estableciendo el puerto
var port = process.env.PORT || 8000; 


 //Configuracion del comportamiento de la app
  app.configure(function() {
    //Se establese el directorio donde se encuentra los archivos estáticos
    app.use(express.static(__dirname + '/app'));     
    app.use(express.logger('dev'));             
    app.use(express.bodyParser());              
    app.use(express.methodOverride());          
  });

  //Inicio de app
  app.listen(port);
  console.log("App listening on port" + port);