import { z } from "zod";

export const criarCursoSchema = z.object({
  nome: z.string().min(2, "O nome do curso deve ter pelo menos 2 caracteres"),
  descricao: z.string().min(5, "A descrição deve ter pelo menos 5 caracteres"),
  cargaHoraria: z.number().positive("A carga horária deve ser um número positivo")
});

// Você pode criar também um schema para atualização, se quiser campos opcionais:
export const atualizarCursoSchema = z.object({
  nome: z.string().min(2).optional(),
  descricao: z.string().min(5).optional(),
  cargaHoraria: z.number().positive().optional()
});
