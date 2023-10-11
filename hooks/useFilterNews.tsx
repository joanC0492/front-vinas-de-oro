import { useMemo, useState } from "react";
import { NoticiasNode } from "@/interfaces/noticiasInterface";

interface IProps {
  news: NoticiasNode[];
  filterbyName?: string;
}

const TOTALSHOWNEWS: number = 5;

export const useFilterNews = ({ news, filterbyName = "ALL" }: IProps) => {
  const [filtered, setFiltered] = useState(filterbyName);
  // Siempre inicia en la pagination 1
  const [currentPage, setCurrentPage] = useState(1);

  // Convertir en array en matriz
  const groupArray = (totalShowNews: number, array: NoticiasNode[]) => {
    const totalPages = Math.ceil(array.length / totalShowNews);

    const matriz = [];
    let aux = -totalShowNews;

    for (let i = 0; i < totalPages; i++) {
      const row = [];
      aux += totalShowNews;
      for (let j = 0; j < totalShowNews; j++) {
        const column = array[j + aux];
        if (column === undefined) continue;
        row.push(column);
      }
      matriz.push(row);
    }
    return matriz;
  };

  //Filtrar por pais
  const filteredNews: NoticiasNode[] = useMemo(() => {    
    const newsByCountry = news.filter(
      (_news) => _news.paisess.nodes[0].name === filtered
    );
    return newsByCountry.length === 0 ? news : newsByCountry;
  }, [filtered]);

  //Agrupar en una matriz
  const totalPages = Math.ceil(filteredNews.length / TOTALSHOWNEWS);
  const groupedNews = useMemo(
    () => groupArray(TOTALSHOWNEWS, filteredNews),
    [filteredNews]
  );
  const newsToShow = groupedNews[currentPage - 1];

  const handleFilterChange = (countryActive: string): void =>
    setFiltered(countryActive);
  const handlePageChange = (newPage: number): void => setCurrentPage(newPage);

  return {
    //methods
    handleFilterChange,
    handlePageChange,
    //values
    newsToShow,
    totalPages,
    currentPage,
  };
};
