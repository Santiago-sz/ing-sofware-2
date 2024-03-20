// Definición del constructor Celular
function Celular(marca, color, modelo) {
    this.marca = marca || 'Samsung';
    this.color = color || 'Blanco';
    this.modelo = modelo || 'A22';
  
    // Métodos para obtener y establecer la marca
    this.getMarca = function() {
        return this.marca; // Debes utilizar "this" para acceder a las propiedades del objeto
    }
  
    this.setMarca = function(nuevaMarca) {
        this.marca = nuevaMarca;
    }
  
    // Métodos para obtener y establecer el color
    this.getColor = function() {
        return this.color;
    }
  
    this.setColor = function(nuevoColor) {
        this.color = nuevoColor;
    }
  
    // Métodos para obtener y establecer el modelo
    this.getModelo = function() {
        return this.modelo;
    }
  
    this.setModelo = function(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
  }
  
  module.exports = Celular; // Exporta la función constructora