import { useState, useEffect } from "react";

export type Distrito = {
  id: number;
  nombre: string;
};

export const useDistritos = () => {
  const [distritos, setDistritos] = useState<Distrito[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDistritos = async () => {
      try {
        const response = await fetch("/distritos.json"); // Ruta relativa al archivo JSON
        const data = await response.json();
        setDistritos(data);
      } catch (error) {
        console.error("Error al cargar los distritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDistritos();
  }, []);

  return { distritos, loading };
};
