# mern-stack-Demo

This is demo website for fullstack mern project that i struggle to acomplish because of mongoose library didnt work. I finally fixed the problem with mongodb package instead of using mongoose
[![CI](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml/badge.svg)](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml)

## How To Run
Create the file `mern/server/config.env` with your Atlas URI and the server port:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/
PORT=5050
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
npm run dev
```

## Disclaimer

Use at your own risk; not a supported MongoDB product
