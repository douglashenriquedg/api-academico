import { Request, Response } from "express";
import prisma from "../prismaClient";

export const getAlunos = async (req: Request, res: Response) => {
  const alunos = await prisma.aluno.findMany({
    include: { matriculas: { include: { curso: true } } }
  });
  res.json(alunos);
};

export const getAluno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const aluno = await prisma.aluno.findUnique({
    where: { id },
    include: { matriculas: { include: { curso: true } } }
  });
  res.json(aluno);
};

export const criarAluno = async (req: Request, res: Response) => {
  const { nome, email, dataNascimento } = req.body;

  const aluno = await prisma.aluno.create({
    data: {
      nome,
      email,
      dataNascimento: new Date(dataNascimento) // <-- converte string para Date
    }
  });

  res.status(201).json(aluno);
};

export const atualizarAluno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const aluno = await prisma.aluno.update({
    where: { id },
    data: req.body
  });
  res.json(aluno);
};

export const deletarAluno = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.aluno.delete({ where: { id } });
  res.status(204).send();
};

