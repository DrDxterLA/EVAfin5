// Clase que gestiona los usuarios obtenidos desde el endpoint
class UsersService {

    constructor() {
        // Propiedad donde almacenaremos los usuarios
        this.users = [];
    }

    // Método para inicializar la carga de datos
    async init() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            this.users = data;
            console.log("Usuarios cargados correctamente");
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            print("Error al cargar los usuarios.");
        }
    }

    // Método auxiliar para mostrar datos en pantalla
    print(data) {
        const out = document.getElementById('output');
        out.textContent = (typeof data === 'string')
            ? data
            : JSON.stringify(data, null, 2);
    }

    // a) Listar nombres
    listarNombres() {
        const nombres = this.users.map(user => user.name);
        this.print(nombres);
    }

    // b) Mostrar info básica por nombre
    mostrarInfoBasicaPorNombre() {
        const nombre = prompt("Ingrese el nombre exacto del usuario:");

        const usuario = this.users.find(u => u.name === nombre);

        if (!usuario) {
            this.print("Usuario no encontrado.");
            return;
        }

        this.print({
            username: usuario.username,
            email: usuario.email
        });
    }

    // c) Mostrar dirección por nombre
    mostrarDireccionPorNombre() {
        const nombre = prompt("Ingrese el nombre exacto del usuario:");

        const usuario = this.users.find(u => u.name === nombre);

        if (!usuario) {
            this.print("Usuario no encontrado.");
            return;
        }

        this.print(usuario.address);
    }

    // d) Mostrar info avanzada por nombre
    mostrarInfoAvanzadaPorNombre() {
        const nombre = prompt("Ingrese el nombre exacto del usuario:");

        const usuario = this.users.find(u => u.name === nombre);

        if (!usuario) {
            this.print("Usuario no encontrado.");
            return;
        }

        this.print({
            phone: usuario.phone,
            website: usuario.website,
            company: usuario.company
        });
    }

    // e) Listar compañías y catchPhrase
    listarCompaniasYCatchphrase() {
        const companias = this.users.map(user => ({
            company: user.company.name,
            catchPhrase: user.company.catchPhrase
        }));

        this.print(companias);
    }

    // f) Listar nombres ordenados alfabéticamente
    listarNombresOrdenados() {
        const ordenados = this.users
            .map(user => user.name)
            .sort((a, b) => a.localeCompare(b));

        this.print(ordenados);
    }
}


// ==============================
// INSTANCIA Y EVENTOS
// ==============================

const svc = new UsersService();

svc.init().then(() => {

    document.getElementById('btnNombres')
        .addEventListener('click', () => svc.listarNombres());

    document.getElementById('btnBasica')
        .addEventListener('click', () => svc.mostrarInfoBasicaPorNombre());

    document.getElementById('btnDireccion')
        .addEventListener('click', () => svc.mostrarDireccionPorNombre());

    document.getElementById('btnAvanzada')
        .addEventListener('click', () => svc.mostrarInfoAvanzadaPorNombre());

    document.getElementById('btnCompanias')
        .addEventListener('click', () => svc.listarCompaniasYCatchphrase());

    document.getElementById('btnOrdenados')
        .addEventListener('click', () => svc.listarNombresOrdenados());
});