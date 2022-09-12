import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
// import cors from 'cors';

import indexRoutes from './routes/index'

// Initializations
const app: Application = express();

const bodyParser = require('body-parser');
const timeout = require('connect-timeout'); //express v4
const haltOnTimedout =  (req: any, res: any, next:any)  => {
    if (!req.timedout) {
        console.log("tiempo")
      next();
    }
  }



// Settings
app.set('port', process.env.PORT || 4000);


// Middlewares
app.use(morgan('dev'));


// Time-out
// app.use(timeout('10s'))
// app.use(bodyParser.json({ extended: true }))
// app.use(haltOnTimedout)


// app.use(cors());  // Comentado para usar proxy en angular.
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;