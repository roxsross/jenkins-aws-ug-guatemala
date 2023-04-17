# Install Jenkins

### Herramientas
- Docker [documentacion](https://docs.docker.com/engine/install/)
- Docker-Compose [documentacion](https://docs.docker.com/compose/install/)
- User-Data [script](user-data-docker.sh)

### Instalacion de Jenkins usando docker compose

Pasos:
- Tener instalado las herramientas
- Ejecutar lo siguiente: `docker-compose up -d`
- Revisar si tenemos los contenedores en ejecución `docker ps`
- Si usas por ejemplo AWS EC2 recuerda agregar el SG 8080
- ejecutar en local o en la nube con: localhost:8080 ò ip_publica:8080


