# Administración de Tickets

### Instalación de dependencias

#### Para el backend se ejecutan los siguientes comandos.

1. Crear un entorno virtual de python.
2. Dentro del entorno virtual ejecutar `pip install -r requirements.txt`
3. Crear una base de datos en PostgreSQL llamada "Tickets".
4. Configurar el acceso en el archivo **Settings.py**
5. Ejecutar el comando `python manage.py makemigrations`
6. Ejecutar el comando `python manage.py migrate`
7. Inicializar el servidor de desarrollo con `python manage.py runserver`


#### Para el Frontend se ejecutan los siguientes comandos.

1. Dentro del directorio /Frontend ejecutar `npm install`
2. Luego ejecutar el comando `ńg serve`
3. Una vez inicializado el servidor acceder a la url http://localhost:4200

#### Registro de Usuarios

*Acceder a la url http://localhost:4200/registro
