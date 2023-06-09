test("Solo debería devolver el usuario David", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "David",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // comprueba si el array de usernames (de tipo string) devuelto contiene a 'David'
    expect(whoIsOnline(users)).toContain('David');
});

// Implementa otro test 
test("Solo debería devolver el usuario Pedro", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect
    expect(false).toBe(true);
});

// Implementa otro test 
test("Deberia devolver los usuarios de Pedro y Alex", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "online",
            lastActivity: 10,
        },
        {
            username: "Maria",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa los DOS expect
    expect(false).toBe(true);
    expect(false).toBe(true);

});

// Implementa otro test 
test("No debería devolver ningún usuario, es decir, debería devolver un array vacío", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Maria",
            status: "offline",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect. Debes buscar como comprobar con Jest si un array no tiene elementos!
    expect(false).toBe(true);
});

// Implementa otro test. CUIDADO! Puede que encuentres un bug en la función que debas arreglar ;)
test("Solamente debería devolver a 'Alex'.", function () {
    // importo la funcion desde app.js
    const { whoIsOnline } = require('./app.js')

    // mi lista de usuarios
    let users = [
        {
            username: "Pedro",
            status: "offline",
            lastActivity: 10,
        },
        {
            username: "Alex",
            status: "online",
            lastActivity: 10,
        },
    ];


    // TODO : completa el expect
    expect(false).toBe(true);
});




