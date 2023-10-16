import { createContext, useContext, useState } from "react";
import { CardFloatingProps } from "@/interfaces/menu-card";

interface IProps {
  children: React.ReactNode;
}

interface CardFloatingContext {
  dataMenuFloating: CardFloatingProps;
  updateDataMenuActiveItem: (index: number) => void;
  addDataMenu: (data: CardFloatingProps) => void;
  isEmpty: boolean;
}

const CardFloatingContext = createContext({} as CardFloatingContext);

const CardFloatingProvider = ({ children }: IProps) => {
  const [dataMenuFloating, setDataMenuFloating] = useState(
    {} as CardFloatingProps
  );

  const updateDataMenuActiveItem = (index: number): void => {
    const newData = { ...dataMenuFloating };
    newData.category.map((item) => (item.isActive = false));
    newData.category[index].isActive = true;
    setDataMenuFloating(newData);
  };

  const addDataMenu = (data: CardFloatingProps) => {
    setDataMenuFloating(data);
  };

  return (
    <CardFloatingContext.Provider
      value={{
        // properties
        dataMenuFloating,
        isEmpty: Object.keys(dataMenuFloating).length === 0 ? true : false,

        // methods
        updateDataMenuActiveItem,
        addDataMenu,
      }}>
      {children}
    </CardFloatingContext.Provider>
  );
};

const useCardFloatingContext = () => {
  return useContext(CardFloatingContext);
};

export { CardFloatingProvider, useCardFloatingContext };
