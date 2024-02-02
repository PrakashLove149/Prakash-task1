
import React, { createContext, useState } from "react";
import axios from "axios";

const dataProvider = createContext();
const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [deletedCard, setDeletedCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);


  const openFeedback = () => {
    setIsFeedbackOpen(true);
    setIsOpen(true)
  };

  const closeFeedback = () => {
    setIsFeedbackOpen(false);
    setIsOpen(false)
  };


  function handleDeleteCard(id) {
    const deletedData = data.filter((e) => e.id === id);
    setDeletedCard((prviousData) => [...prviousData, ...deletedData]);
    setData(data.filter((item) => item.id !== id));
  }


  const fetchApi = () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }, 5000)
  };

  return (
    <dataProvider.Provider
      value={{
        data,
        setData,
        deletedCard,
        handleDeleteCard,
        fetchApi,
        isLoading,
        setIsLoading,
        isOpen,
        setIsOpen,
        closeFeedback,
        openFeedback,
        isFeedbackOpen,
      }}
    >
      {children}
    </dataProvider.Provider>
  )
}

export { dataProvider, ContextProvider };





