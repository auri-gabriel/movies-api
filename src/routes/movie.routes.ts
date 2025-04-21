import { Router } from 'express'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
} from '../controllers/movie.controller'

const router = Router()

/**
 * @openapi
 * /api/movies:
 *   get:
 *     summary: Retrieve a list of movies
 *     tags:
 *       - Movies
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                     nullable: true
 *                   releaseDate:
 *                     type: string
 *                     format: date-time
 *                   rating:
 *                     type: number
 *                     format: float
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', getAllMovies)

/**
 * @openapi
 * /api/movies/{id}:
 *   get:
 *     summary: Get a single movie by ID
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The movie ID
 *     responses:
 *       200:
 *         description: A single movie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                   nullable: true
 *                 releaseDate:
 *                   type: string
 *                   format: date-time
 *                 rating:
 *                   type: number
 *                   format: float
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Movie not found
 */
router.get('/:id', getMovieById)

/**
 * @openapi
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags:
 *       - Movies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - releaseDate
 *               - rating
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *                 nullable: true
 *               releaseDate:
 *                 type: string
 *                 format: date-time
 *               rating:
 *                 type: number
 *                 format: float
     responses:
 *       201:
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                   nullable: true
 *                 releaseDate:
 *                   type: string
 *                   format: date-time
 *                 rating:
 *                   type: number
 *                   format: float
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 */
router.post('/', createMovie)

/**
 * @openapi
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The movie ID
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete('/:id', deleteMovie)

export default router
