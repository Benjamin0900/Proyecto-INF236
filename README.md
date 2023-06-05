# Grupo 2

Este es el repositorio del Grupo 2, cuyos integrantes son:

* Benjamín Espinoza - 202030547-1
* José Astudillo - 202173612-3
* Pablo Etcheberry - 201904517-2
* **Tutor**: Maciel Ripetti

## Wiki

Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/Josecris10/INF236-2023-1-PAR201-GRUPO-2/wiki)

## Videos

> Reemplazar con los enlaces correspondientes

* [Video presentación avance 1](https://www.youtube.com/watch?v=WZYdZxQPKq0)
* [Video entrega 4](https://youtu.be/Q50kxK4RtR8)

## Aspectos técnicos relevantes
Aquí irán los aspectos técnicos que se presenten en un futuro.

# MERN-base-proyect
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

## prerequisites
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

> Disclaimer: The React application works with Node.js 16 and below.
## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI (get it from your own created cluster), should look like this:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```
