import express from 'express';
import routes from './routes';
import InitDB from './db';

export default async () => {
    try {
        const app = express();

        await InitDB();
        routes(app);

        app.listen(process.env.PORT, () => {
            console.log(process.env.PORT, process.env.NODE_ENV);
        });
    } catch(e) {
        console.error(e);
    }
}