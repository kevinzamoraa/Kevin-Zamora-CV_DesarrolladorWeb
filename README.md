# CV Interactivo - Kevin Zamora
(En desarrollo)

## Plantilla utilizada (Idea y código de partida)
  - [Sitio Web - Plantilla de referencia](https://startbootstrap.com/theme/resume)
  - [Repo' en Github](https://github.com/startbootstrap/startbootstrap-resume)

## Pasos seguidos para adaptar e integrar 'la plantilla' en una aplicación de Angular

## Tecnologías Utilizadas
  - **Node 18.16 / npm**
    - **Windows:**
      - **Node Version Management**: herramienta de consola que permite instalar y utilizar diferentes versiones de nodejs.
    
      - **Nodejs** es un engine javascript que permite la ejecución de frameworks frontend por ejemplo angular en el lado servidor.
    
      1. Descargar de https://github.com/coreybutler/nvm-windows/releases el archivo **nvm-setup.zip**
      2. Descomprimir el zip
      3. Ejecutar el archivo **nvm-setup.exe**
      4. Abrir una **CMD con permisos de administrador** y comprobar que se ha instalado
    
      ```bash
      
      nvm version
      
      nvm list
      
      # Importante, angular soporta hasta la versión 16
      nvm install 16.18.1 (__En teoria y a finales de 2022. En el momento del update, ya funciona también con la versión 18.16__) 
      
      # Necesaria CMD con permisos de administrador:
      nvm use 16.18.1
      
      node -v
      ```
      
    - **Linux:**
        [Instalar en Arch Linux](https://www.atlantic.net/dedicated-server-hosting/how-to-install-and-use-node-js-on-arch-linux/)


  - **Angular 16**
        ## Para instalar Angular en tu sistema
            Paso 1: Necesitas que "Node.js" (hasta la versión 18, de momento) y "npm package manager" estén instalados.

            Paso 2: Instalar Angular CLI (versión 16)

            Run `npm install -g @angular/cli` o `npm install -g @angular/cli@16` en tu terminal. 
  
  - **HTML and CSS**
  
  - **JavaScript**
  
  - **TypeScript**


- [README.md - Explicación sobre cómo poder lanzar esta clase de plantillas, desde nuestra terminal de 'npm'](https://github.com/StartBootstrap/startbootstrap-resume/blob/master/README.md)

## Siguientes pasos:
- Completar información restante, la cual resta a ser modificada, partiendo de la base aportada por la plantilla elegida (Datos aún en Inglés).
- Añadir animaciones y depurar estilos.
- Añadir 'navbar (superior a la ya existente)' y alojar en esta los enlaces a otras páginas de interés que iremos creando (PE: Biografía, Publicaciones y/o un pequeño 'ecommerce', entre otras).
- Añadir 'social bar' en el lateral derecho, centrado verticalmente y anclado con 'position-absolute'-

