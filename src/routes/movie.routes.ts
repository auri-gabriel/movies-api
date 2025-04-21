import { Router } from 'express'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
} from '../controllers/movie.controller'

const router = Router();

/**
 * @openapi
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: A list of movies
 */
router.get('/', getAllMovies);

/**
 * @openapi
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A movie
 *       404:
 *         description: Movie not found
 */
router.get('/:id', getMovieById);

router.post('/', createMovie);

router.delete('/:id', deleteMovie);

export default router
