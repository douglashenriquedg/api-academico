import { z } from "zod";

export const criarMatriculaSchema = z.object({
  alunoId: z.number().positive("O ID do aluno deve ser um número positivo"),
  cursoId: z.number().positive("O ID do curso deve ser um número positivo")
});

// Para atualizar matrícula (ex.: trocar curso ou aluno)
export const atualizarMatriculaSchema = z.object({
  alunoId: z.number().positive().optional(),
  cursoId: z.number().positive().optional()
});
