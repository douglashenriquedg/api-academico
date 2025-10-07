import { Router } from "express";
import { criarAluno, getAlunos, getAluno, atualizarAluno, deletarAluno } from "../controllers/alunoController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Rotas de gerenciamento de alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 */
router.get("/", getAlunos);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Lista 1 aluno pelo id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Aluno encontrado
 */
router.get("/:id", getAluno);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               dataNascimento:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post("/", criarAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     tags: [Alunos]
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
 *               email:
 *                 type: string
 *               dataNascimento:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 */
router.put("/:id", atualizarAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Deleta um aluno pelo id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: Aluno deletado com sucesso
 */
router.delete("/:id", deletarAluno);

export default router;
