# Proyecto Final: CRAD

## Descripción
Este proyecto consiste en una aplicación desarrollada con Express.js que gestiona diversos aspectos relacionados con videojuegos, usuarios, roles, modos de juego, desarrolladores, tiendas, géneros, clasificaciones PEGI, temas, métodos de pago y ofertas.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

Back-proyecto-final/
│
├── config/
│ ├── mongoose.config.js
│ └── multer.config.js
│
├── controllers/
│ ├── authControllers.js
│ ├── adminControllers.js
│ ├── userControllers.js
│ ├── videogameControllers.js
│ ├── gameModeControllers.js
│ ├── developerControllers.js
│ ├── shoopControllers.js
│ ├── genderControllers.js
│ ├── pegiControllers.js
│ ├── themeControllers.js
│ ├── paymentMethodControllers.js
│ ├── rolControllers.js
│ └── typeOfferControllers.js
│
├── middlewares/
│ ├── errorsIsEmpty.js
│ ├── validateGameMode.js
│ ├── validatedeveloper.js
│ ├── validateGender.js
│ ├── validatePegi.js
│ ├── validateTheme.js
│ ├── validatePaymentMethod.js
│ ├── validateRole.js
│ ├── validateTypeOffer.js
│ ├── validateUser.js
│ ├── validateVideogame.js
│ └── validateShoop.js
│
├── models/
│ ├── Developer.js
│ ├── GameMode.js
│ ├── Gender.js
│ ├── PaymentMethod.js
│ ├── Pegi.js
│ ├── Role.js
│ ├── Shoop.js
│ ├── Theme.js
│ ├── TypeOffer.js
│ ├── User.js
│ └── Videogame.js
│
├── routes/
│ ├── developerRoutes.js
│ ├── gameModeRoutes.js
│ ├── genderRoutes.js
│ ├── pegiRoutes.js
│ ├── paymentMethodRoutes.js
│ ├── rolRoutes.js
│ ├── shoopRoutes.js
│ ├── themeRoutes.js
│ ├── typeOfferRoutes.js
│ ├── userLoginRoutes.js
│ ├── userRoutes.js
│ └── videogameRoutes.js
│
├── seeders/
│ ├── developerSeeder.js
│ ├── gameModeSeeder.js
│ ├── genderSeeder.js
│ ├── pegiSeeder.js
│ ├── paymentMethodSeeder.js
│ ├── roleSeeder.js
│ ├── shoopSeeder.js
│ ├── themeSeeder.js
│ ├── typeOfferSeeder.js
│ ├── videogameSeeder.js
│ └── userSeeder.js
│
│
├── .env
├── .gitignore
├── README.md
├── package.json
├── seeders.js
└── server.js

## Tecnologías Utilizadas
- **Express.js**: Framework para construir aplicaciones web.
- **MongoDB**: Base de datos utilizada para almacenar los datos.
- **Mongoose**: Librería de modelado de objetos para MongoDB.
- **JWT**: Para la autenticación basada en tokens.
- **Multer**: Middleware para la gestión de carga de archivos.
- **Node.js**: Node.js es un entorno de ejecución de JavaScript que permite desarrollar aplicaciones del lado del servidor..
- **bcryptjs**:  es una biblioteca para hashing de contraseñas en Node.js, utilizada para almacenar contraseñas de manera segura..
- **dotenv**: carga variables de entorno desde un archivo `.env` en aplicaciones Node.js, separando la configuración del entorno de desarrollo de la aplicación..

## Configuración y Ejecución Local
1. **Clona el repositorio:**
    - git clone https://github.com/cristiannull/Back-proyecto-final-2.git.

2. **Configuración del Entorno:**
   - Copia el archivo `.env.example` como `.env` y configura las variables de entorno necesarias como `JWT_SECRET`, `DATABASE_USER`, `DATABASE_PASSWORD`.

3. **Instalación de Dependencias:**
   - npm install.
    
4. **Ejecución de la Aplicación:**    
   - npm start.

5. **Endpoints Disponibles:**
- La API expone diversos endpoints para la gestión de usuarios, roles, videojuegos, modos de juego, desarrolladores, tiendas, géneros, clasificaciones PEGI, temas, métodos de pago y ofertas. Consulta el archivo `server.js` y los archivos en `routes/` para ver los endpoints disponibles y su uso.

## Información Adicional
- Asegúrate de tener MongoDB instalado, Node.js y en ejecución en tu máquina local antes de ejecutar la aplicación.
- Esta Api esta pensada para que funcione con los siguientes repositorios : `https://github.com/cristiannull/Front-proyecto-final-2` y `https://github.com/cristiannull/Developer-Front.git` .

---