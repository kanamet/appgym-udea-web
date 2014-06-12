var listarUsuarios = angular.module('ListarUsuarios', ['ngGrid']);

listarUsuarios.controller('CuadriculaCtrl', function($scope) {
    $scope.lista = [{Cedula: "123456", Nombre: "Alejandro", Apellido: "Rendon", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Pablo", Apellido: "Norenha", fecha: "10/10/2010", estado: "Nuevo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Johan", Apellido: "Torres", fecha: "10/10/2010", estado: "Antiguo"},
                    {Cedula: "123456", Nombre: "Alejandro", Apellido: "Rendon", fecha: "10/10/2010", estado: "Nuevo"}                    
                    ];
    
    $scope.usuarios = { data: 'lista' };
});