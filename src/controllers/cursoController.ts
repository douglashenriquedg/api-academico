import { Request, Response } from "express";
import prisma from "../prismaClient";

// Listar todos os cursos com as matrículas e alunos
export const getCursos = async (req: Request, res: Response) => {
  const cursos = await prisma.curso.findMany({
    include: { matriculas: { include: { aluno: true } } }
  });
  res.json(cursos);
};

// Listar 1 curso pelo id
export const getCurso = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const curso = await prisma.curso.findUnique({
    where: { id },
    include: { matriculas: { include: { aluno: true } } }
  });
  res.json(curso);
};

// Criar curso
export const criarCurso = async (req: Request, res: Response) => {
  const curso = await prisma.curso.create({ data: req.body });
  res.status(201).json(curso);
};

// Atualizar curso
export const atualizarCurso = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const curso = await prisma.curso.update({
    where: { id },
    data: req.body
  });
  res.json(curso);
};

// Deletar curso
export const deletarCurso = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.curso.delete({ where: { id } });
  res.status(204).send();
};
