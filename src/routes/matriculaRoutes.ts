import { Router } from "express";
import { criarMatricula, getMatriculas, getMatricula, atualizarMatricula, deletarMatricula } from "../controllers/matriculaController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Matriculas
 *   description: Rotas de gerenciamento de matrículas
 */

/**
 * @swagger
 * /matriculas:
 *   get:
 *     summary: Lista todas as matrículas
 *     tags: [Matriculas]
 *     responses:
 *       200:
 *         description: Lista de matrículas retornada com sucesso
 */
router.get("/", getMatriculas);

/**
 * @swagger
 * /matriculas/{id}:
 *   get:
 *     summary: Lista 1 matrícula pelo id
 *     tags: [Matriculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Matrícula encontrada
 */
router.get("/:id", getMatricula);

/**
 * @swagger
 * /matriculas:
 *   post:
 *     summary: Cria uma nova matrícula
 *     tags: [Matriculas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alunoId:
 *                 type: number
 *               cursoId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Matrícula criada com sucesso
 */
router.post("/", criarMatricula);

/**
 * @swagger
 * /matriculas/{id}:
 *   put:
 *     summary: Atualiza uma matrícula existente
 *     tags: [Matriculas]
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
 *               alunoId:
 *                 type: number
 *               cursoId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Matrícula atualizada com sucesso
 */
router.put("/:id", atualizarMatricula);

/**
 * @swagger
 * /matriculas/{id}:
 *   delete:
 *     summary: Deleta uma matrícula pelo id
 *     tags: [Matriculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: Matrícula deletada com sucesso
 */
router.delete("/:id", deletarMatricula);

export default router;
