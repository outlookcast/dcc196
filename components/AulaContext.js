import React, { createContext, useState } from "react";

export const AulaContext = createContext();

export const AulaProvider = ({ children }) => {
  const [aulas, setAulas] = useState([]); 

  const adicionarAula = (novaAula) => {
    setAulas([...aulas, novaAula]); 
  };

  const removerAula = (index) => {
    setAulas(aulas.filter((_, i) => i !== index));
  };

  const removerTodasAulas = () => {
    setAulas([]); 
  };

  return (
    <AulaContext.Provider value={{ aulas, adicionarAula, removerAula, removerTodasAulas  }}>
      {children}
    </AulaContext.Provider>
  );
};
