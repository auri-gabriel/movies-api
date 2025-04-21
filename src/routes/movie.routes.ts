// src/routes/movie.routes.ts

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
 *                 $ref: '#/components/schemas/Movie'
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
 *         schema:
 *           type: integer
 *         required: true
 *         description: The movie ID
 *     responses:
 *       200:
 *         description: A single movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
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
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       201:
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
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
 *         schema:
 *           type: integer
 *         required: true
 *         description: The movie ID
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete('/:id', deleteMovie)

export default router
