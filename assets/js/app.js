// ========================================
// Clase UsersService
// Gestión de usuarios desde endpoint
// ========================================

class UsersService {

    constructor() {
        // Propiedad donde se almacenarán los usuarios
        this.users = [];
    }

    // ========================================
    // Método para inicializar datos con fetch
    // ========================================
    async init() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            this.users = data;

            this.print("✅ Usuarios cargados correctamente.");

        } catch (error) {
            console.error("Error al obtener los datos:", error);
            this.print("❌ Error al cargar los usuarios.");
        }
    }

    // ========================================
    // Método auxiliar para imprimir resultados
    // ========================================
    print(data) {
        const out = document.getElementById('output');
        out.textContent = (typeof data === 'string')
            ? data
            : JSON.stringify(data, null, 2);
    }

    // ========================================
    // Método auxiliar para buscar usuario
    // Ignora mayúsculas y minúsculas
    // ========================================
    buscarUsuarioPorNombre(nombreIngresado) {

        if (!nombreIngresado) return null;

        return this.users.find(user =>
            user.name.toLowerCase() === nombreIngresado.toLowerCase()
        );
    }

    // ========================================
    // a) Listar nombres
    // ========================================
    listarNombres() {
        const nombres = this.users.map(user => user.name);
        this.print(nombres);
    }

    // ========================================
    // b) Info básica por nombre
    // ========================================
    mostrarInfoBasicaPorNombre() {

        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.buscarUsuarioPorNombre(nombre);

        if (!usuario) {
            this.print("❌ Usuario no encontrado.");
            return;
        }

        this.print({
            username: usuario.username,
            email: usuario.email
        });
    }

    // ========================================
    // c) Dirección por nombre
    // ========================================
    mostrarDireccionPorNombre() {

        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.buscarUsuarioPorNombre(nombre);

        if (!usuario) {
            this.print("❌ Usuario no encontrado.");
            return;
        }

        this.print({
            street: usuario.address.street,
            suite: usuario.address.suite,
            city: usuario.address.city,
            zipcode: usuario.address.zipcode,
            geo: usuario.address.geo
        });
    }

    // ========================================
    // d) Info avanzada por nombre
    // ========================================
    mostrarInfoAvanzadaPorNombre() {

        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.buscarUsuarioPorNombre(nombre);

        if (!usuario) {
            this.print("❌ Usuario no encontrado.");
            return;
        }

        this.print({
            phone: usuario.phone,
            website: usuario.website,
            company: usuario.company
        });
    }

    // ========================================
    // e) Listar compañías y catchPhrase
    // ========================================
    listarCompaniasYCatchphrase() {

        const companias = this.users.map(user => ({
            company: user.company.name,
            catchPhrase: user.company.catchPhrase
        }));

        this.print(companias);
    }

    // ========================================
    // f) Listar nombres ordenados
    // ========================================
    listarNombresOrdenados() {

        const ordenados = this.users
            .map(user => user.name)
            .sort((a, b) => a.localeCompare(b));

        this.print(ordenados);
    }
}


// ========================================
// INSTANCIA Y EVENTOS
// ========================================

const svc = new UsersService();

// Se inicializan los datos y luego se activan los botones
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