import express from 'express';
import SimpleRoute from './src/Module.js';

const App = express();
const port = 3000;

const Route = new SimpleRoute();

App.get(Route.route, Route.action)

App.listen(port, () => console.log(`Example app listening on port ${port}!`))
