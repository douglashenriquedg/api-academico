import express from "express";
import alunoRoutes from "./routes/alunoRoutes";
import cursoRoutes from "./routes/cursoRoutes";
import matriculaRoutes from "./routes/matriculaRoutes";
import { swaggerUi, specs } from "./swagger";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/alunos", alunoRoutes);
app.use("/cursos", cursoRoutes);
app.use("/matriculas", matriculaRoutes);

// iniciar server
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor esta na porta ${PORT}`));
