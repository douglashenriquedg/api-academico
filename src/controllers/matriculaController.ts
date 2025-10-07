import { Request, Response } from "express";
import prisma from "../prismaClient";

// Listar todas as matrículas com dados de aluno e curso
export const getMatriculas = async (req: Request, res: Response) => {
  const matriculas = await prisma.matricula.findMany({
    include: { aluno: true, curso: true }
  });
  res.json(matriculas);
};

// Listar 1 matrícula pelo id
export const getMatricula = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const matricula = await prisma.matricula.findUnique({
    where: { id },
    include: { aluno: true, curso: true }
  });
  res.json(matricula);
};

// Criar matrícula
export const criarMatricula = async (req: Request, res: Response) => {
  const matricula = await prisma.matricula.create({ data: req.body });
  res.status(201).json(matricula);
};

// Atualizar matrícula
export const atualizarMatricula = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const matricula = await prisma.matricula.update({
    where: { id },
    data: req.body
  });
  res.json(matricula);
};

// Deletar matrícula
export const deletarMatricula = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.matricula.delete({ where: { id } });
  res.status(204).send();
};
