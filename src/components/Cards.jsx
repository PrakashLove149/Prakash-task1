import React, { useEffect, useContext, useState } from "react";
import { dataProvider } from "../ContextAPI/ContextProvider";
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const Cards = () => {
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

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const generateImageURL = () => {
    return `https://picsum.photos/320/180?random=${Math.floor(Math.random() * 1000)}`;
  };

  return (
    <div className=" justify-around flex flex-wrap gap-y-6">
      {currentCards.map((item) => (
        <div key={item.id} className=" rounded-xl flex flex-col bg-white w-[270px] justify-between px-6 py-2  ">
          <div>
            <div className="w-full relative">
              <ClearIcon
                onClick={() => handleDeleteCard(item.id)}
                className=" cursor-pointer absolute right-[-11px] text-2xl text-red-400 "
              />
            </div>
            <h3 className="text-xl font-bold mt-4 leading-6 mb-2">
              {`${item.title.substring(0, 31)}...`}
            </h3>
            <p>
              {`${item.body.substring(0, 51)}...`}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-400 text-sm">{currentDate}</h4>

            <img
              className="mb-3 mt-3 rounded-lg"
              src={generateImageURL()}
              alt="cardImage"
            />
          </div>
        </div>
      ))}
      <div className=" justify-center flex items-center space-x-2 mt-3">
        {currentPage > 1 &&
          <span
            onClick={() => paginate(currentPage - 1)}
            className="cursor-pointer px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-200"
          >
            <KeyboardDoubleArrowLeftIcon />

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
            className="cursor-pointer px-4 py-2 rounded-full bg-gray-200 text-gray-500 hover:bg-blue-200"
          >
            <KeyboardDoubleArrowRightIcon />
          </span>
        }

      </div>

    </div>
  );
};

export default Cards;
