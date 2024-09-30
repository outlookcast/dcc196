import React, { createContext, useState } from "react";

export const AulaContext = createContext();

export const AulaProvider = ({ children }) => {
  const [aulas, setAulas] = useState([
    {
      titulo: "Aula 1", data: "01/01/2021", horario: "08:00 às 10:00", data_hora: "01/01/2021 08:00 às 10:00",
      frequencia: [
        { nome: "FULANO DE TAL 1", presente: false },
        { nome: "FULANO DE TAL 2", presente: true },
        { nome: "FULANO DE TAL 3", presente: false },
      ],
      materiais: [
        { nome: "Material 1", tipo: "pdf" },
        { nome: "Material 2", link: "code" },
        { nome: "Material 3", link: "pdf" },
      ]
    },
    {
      titulo: "Aula 2", data: "02/01/2021", horario: "10:00 às 12:00", data_hora: "02/01/2021 10:00 às 12:00",
      frequencia: [
        { nome: "FULANO DE TAL 1", presente: true },
        { nome: "FULANO DE TAL 2", presente: true },
        { nome: "FULANO DE TAL 3", presente: false },
      ],
      materiais: [
        { nome: "Material 1", tipo: "pdf" },
        { nome: "Material 2", link: "code" },
        { nome: "Material 3", link: "pdf" },
      ]
    },
    {
      titulo: "Aula 3", data: "03/01/2021", horario: "14:00 às 16:00", data_hora: "03/01/2021 14:00 às 16:00",
      frequencia: [
        { nome: "FULANO DE TAL 1", presente: false },
        { nome: "FULANO DE TAL 2", presente: false },
        { nome: "FULANO DE TAL 3", presente: true },
      ],
      materiais: [
        { nome: "Material 1", tipo: "pdf" },
        { nome: "Material 2", link: "code" },
        { nome: "Material 3", link: "pdf" },
      ]
    },
  ]);

  const adicionarAula = (novaAula) => {
    setAulas([...aulas, novaAula]);
  };

  const removerAula = (index) => {
    setAulas(aulas.filter((_, i) => i !== index));
  };

  const removerTodasAulas = () => {
    setAulas([]);
  };

  const setAula = (aula) => {
    const newAulas = [...aulas];
    newAulas[newAulas.findIndex((a) => a.titulo === aula.titulo)] = aula;
    setAulas(newAulas);
  }

  return (
    <AulaContext.Provider value={{ aulas, adicionarAula, removerAula, removerTodasAulas, setAula }}>
      {children}
    </AulaContext.Provider>
  );
};
