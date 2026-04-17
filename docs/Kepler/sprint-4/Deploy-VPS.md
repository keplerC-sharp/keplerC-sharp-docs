# ASP.NET MVC + Docker + Nginx + SSL (Certbot) on Ubuntu Server 

# How to deploy a ASP.NET MVC + Docker + Nginx + SSL (Certbot) page

### Excercice repository
```url
https://github.com/HeroLeni/MVC-NET-Test
```

## 1. General Description
Normally when we talk about developing a web page, we imagine that there is a long background and very difficult to manage to get them to work on the internet, and have it's own domain. Today i'm giving you this step-by-step guide on how to create a new MVC proyect with Dotnet, dockerize the page, upload it to github, clone from the VPS, create a new docker image, asosiate a domain DNS, install a SSL Certificate and run the whole program.

## 2. Requirements:
To make this proyect, you will need:

### 2.1 OS (Operating System):
```
- For Windows Machines (Windows 10 22H2 Latest relase or Windows 11 Latest Relase)
- For Mac Users: (MacOS 15 (Sequoia) or the Latest MacOS 26 (Tahoe) )
- For Linux Users: (Ubuntu 24, Debian 13.4, Mint 22.3, Arch 2026.04.01)
```

### 2.2 (Enviroments):
- Microsoft .NET (Perfferably 9.0 or 10.0)
- Docker Engine
- Termius
- An IDE Enviroment (Visual Studio Code or JetBrains IDEs Rider)

### 3. Preparing the envirmoment

### 3.1 Connect to Your Ubuntu Server

If your server is remote (AWS, DigitalOcean, etc.):

```bash
ssh username@your_server_ip

// Example

ssh ubuntu@192.168.1.10
```

### 3.2 Install the required tools

We need to install nginx to do the reverse proxy and certbot to get the SSL certificate.

```bash
sudo apt upgrade -y
sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y
```

### 4. Create the MVC
Open a new terminal, and go to your desired location (Example: save it on documents "cd Documents") Once you are in your desired folder enter this specific command 

```bash
dotnet new mvc -n name
``` 
"name being what you've called the proyect"

### 4.1 entering the proyect
after creating the MVC, you need to enter the IDE enviroment and you have two options

### 4.1.1 Backdoor Method (Entering from the Terminal)
this is more like a backdoor method to enter
```bash
Rider .
``` 
or
```bash
code .
``` 

### 4.1.2 Frontdoor Method (Entering from the IDE)
if you want to avoid the backdoor method, you can allways enter normally, but like said before, make sure that you have the MVC on a knownable area, otherwise it's better off to open it with the backdoor method

### Optional: Check the program 
This is totally optional but if you want to see if the project successfully was made do the following

```bash
dotnet run
``` 
and wait for the IP Address that shows in your terminal, and enter it

### 5. Adding the docker file

On the main directory of the MVC, create a new file, that file should be called "Dockerfile" after that insert this on the Docker file

```
# Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /app

# Copiar csproj y restaurar dependencias
COPY *.csproj ./
RUN dotnet restore

# Copiar todo el código
COPY . ./

# Publicar la aplicación
RUN dotnet publish -c Release -o /out

# Etapa 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

# Copiar desde la etapa build
COPY --from=build /out .

# Exponer puerto
EXPOSE 80

# Comando de inicio
ENTRYPOINT ["dotnet", "Proyecto.dll"]
```

### 5.1 Completing the build of the image
after adding the Dockerfile, you need to run this commands in your console:
```bash
docker build -t nameofproyect .
docker run -d -p 8080:80 --name name of the proyect
```

### 6. Adding the NGinex config

Once you finished the commands and also seeing if docker successfully added them, now we start with the NGinex config

to do that, you have to paste this specific command on the Git terminal

```bash
cd /etc/nginx/sites-available/
vim proyecto
```

once done, paste this exact command here

```
server {
    listen 80;
    server_name domain.com;

    location / {
        proxy_pass http://localhost:8080;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Final touches
After finishing the server config, Enable the your nginx configuration with tis command:
```bash
sudo ln -s /etc/nginx/sites-available/proyecto /etc/nginx/sites-enabled/
```

and lastly Remove the default:
```bash
sudo rm /etc/nginx/sites-enabled/default
```

### 8. Conclution
And now we reached the finish line! we now know how to:

```
Create a MVC Proyect
Connect to Docker
Using the proyect on a external server
Adding NGinex support
```