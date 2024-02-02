import React, { useContext, useEffect, useState } from "react";
import { dataProvider } from "../ContextAPI/ContextProvider";
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const List = () => {
    const { data, fetchApi, handleDeleteCard, isLoading } = useContext(dataProvider);
    const [currentPage, setCurrentPage] = useState(1);

    const currentDate = new Date().toUTCString();

    useEffect(() => {
        fetchApi();
      }, []);
    
      const cardsPerPage = 6;
      const LastCard = currentPage * cardsPerPage;
      const FirstCard = LastCard - cardsPerPage;
      const currentCards = data ? data.slice(FirstCard, LastCard) : [];
    
      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchApi();
      };
    

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const generateImageURL = () => {
    return `https://picsum.photos/100/100?random=${Math.floor(Math.random() * 1000)}`;
  };

  return (
    <div className="w-full flex flex-col gap-y-3 flex ">
      {currentCards?.map((item) => (
        <div key={item.id} className="flex items-center  px-6 bg-white rounded-lg p-[15px] relative" >
           <img
              className="mb-3 mt-3 rounded-full h-20 w-35"
              src={generateImageURL()}
              alt="cardImage"
            />
        
          <div className="ml-4">
            <h3 className="text-xl font-bold leading-6 mb-2">
                {`${item.title.substring(0, 100)}...`}
            </h3>
            <p>
              {`${item.body.substring(0, 100)}...`}
            </p>
            <h4 className="font-bold text-gray-400">
             {currentDate}
            </h4>
          </div>
          <div className="absolute right-[-60px] p-3 bg-white rounded-full">
            <ClearIcon
             onClick={() => handleDeleteCard(item.id)}
            className=" text-rose-400"/>
          </div>
        </div>

        
      ))}

<div className=" justify-center flex items-center space-x-2 mt-3">
        {currentPage > 1 &&
          <span
            onClick={() => paginate(currentPage - 1)}
            className="cursor-pointer px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-200"
          >
            <KeyboardDoubleArrowLeftIcon/>
          </span>
        }
        {Array.from({ length: Math.ceil(data.length / cardsPerPage) }, (_, index) => index + 1)
          .filter(number => (
            number >= currentPage && number <= currentPage + 2
          ))
          .map(number => (
            <span
              key={number}
              onClick={() => paginate(number)}
              className={` cursor-pointer px-4 py-2 rounded-full ${number === currentPage ? "bg-white text-black" : "bg-gray-300 text-black-300 hover:bg-gray-500"}`}
            >
              {number}
            </span>
          ))
        }
        {currentPage + 3 <= Math.ceil(data.length / cardsPerPage) &&
          <span
            onClick={() => paginate(currentPage + 1)}
            className="cursor-pointer px-4 py-2 rounded-full bg-gray-200 text-gray-500 hover:bg-blue-300"
          >
           <KeyboardDoubleArrowRightIcon/>
          </span>
        }

      </div>
    </div>
  );
};

export default List;
