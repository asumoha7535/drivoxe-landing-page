import React, { createContext, useEffect, useState } from 'react';
import carData from '../CarData.json';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [parseCarDatas, setParseCarData] = useState([]);
 const [theme, setTheme] = useState("white");
  useEffect(() => {
    if (!localStorage.getItem("carData")) {
      localStorage.setItem("carData", JSON.stringify(carData));
    }
    const storedCars = JSON.parse(localStorage.getItem("carData")) || [];
    setParseCarData(storedCars);
  }, []);

  return (
    <CarContext.Provider value={{ parseCarDatas, setParseCarData, theme, setTheme }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;