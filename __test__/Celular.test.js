const Celular = require('../src/Celular')
test('Celular', () => {
    const celular = new Celular('Samsung', 'Blanco', 'A22');
    expect(celular.getMarca()).toBe('Samsung');
    expect(celular.getModelo()).toBe('A22');
    expect(celular.getColor()).toBe('Blanco'); 
})