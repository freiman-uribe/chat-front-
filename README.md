# Chat Application

Esta es una aplicación de chat construida con Vue.js, Pinia, y Bootstrap 5. La aplicación permite a los usuarios registrarse, iniciar sesión, y chatear en tiempo real. También incluye una integración para mostrar un video.

## Características

- Registro de usuarios
- Inicio de sesión de usuarios
- Envío y recepción de mensajes en tiempo real
- Barra lateral de chat que se puede ocultar y mostrar en dispositivos móviles
- Integración con para mostrar un video

## Tecnologías Utilizadas

- Vue.js 3
- Pinia (para el manejo del estado)
- Bootstrap 5
- Axios
- Socket.io

## Instalación

1. Clona el repositorio:

   `
   git clone https://github.com/freiman-uribe/chat-front-.git
   cd chat-front`

2. Instala las dependencias:

`npm install`

3. Inicia el servidor de desarrollo:

`npm run dev`

## Uso

### Registro

1. Navega a `/register`.
2. Completa el formulario de registro y envíalo.

### Inicio de Sesión

1. Navega a `/`.
2. Completa el formulario de inicio de sesión y envíalo.

### Chat

1. Después de iniciar sesión, serás redirigido a `/user/chat`.
2. Usa la barra lateral para enviar y recibir mensajes.

### Barra Lateral de Chat

- En dispositivos móviles, usa el botón "Chat" para mostrar u ocultar la barra lateral de chat.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
