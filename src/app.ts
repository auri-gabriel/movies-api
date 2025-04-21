import express from 'express'
import movieRoutes from './routes/movie.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './docs/swagger'

const app = express();
app.use(express.json());
app.use('/api/movies', movieRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
