import { Router } from "express";
import { criarCurso, getCursos, getCurso, atualizarCurso, deletarCurso } from "../controllers/cursoController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Rotas de gerenciamento de cursos
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos retornada com sucesso
 */
router.get("/", getCursos);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Lista 1 curso pelo id
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Curso encontrado
 */
router.get("/:id", getCurso);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               cargaHoraria:
 *                 type: number
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */
router.post("/", criarCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               cargaHoraria:
 *                 type: number
 *     responses:
 *       200:
 *         description: Curso atualizado com sucesso
 */
router.put("/:id", atualizarCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Deleta um curso pelo id
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: Curso deletado com sucesso
 */
router.delete("/:id", deletarCurso);

export default router;
