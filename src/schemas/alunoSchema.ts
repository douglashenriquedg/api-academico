import { z } from "zod";

export const criarAlunoSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  dataNascimento: z.string()
});
