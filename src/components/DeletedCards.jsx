import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { dataProvider } from '../ContextAPI/ContextProvider';
import Feedback from './Feedback';
import Cards from './Cards';
import List from './List';

const DeletedCards = () => {
  const { deletedCard } = useContext(dataProvider);

  const currentDate = new Date().toUTCString();

  const generateImageURL = () => {
    return `https://picsum.photos/320/180?random=${Math.floor(Math.random() * 1000)}`;
  };
  return (
    <div className='w-full p-16 overflow-y-auto'>
      <Feedback />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/lists" element={<List />} />
      </Routes>
      {
        deletedCard.length > 0 && (
          <div className='w-full border-t-2 border-indigo-500 mt-12'>
            <h2 className='text-2xl font-bold'>Deleteed Cards Data</h2>
            <div className="flex w-full flex-wrap gap-x-4 gap-y-5">
              {deletedCard?.map((item, i) => (
                <div key={i} className="w-[280px] mt-4 bg-white px-6 py-2 rounded-xl flex flex-col justify-between">

                  <div>
                    <div className="w-full relative">
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-6 mb-2">
                      {`${item.title.substring(0, 31)}...`}
                    </h3>
                    <p>
                      {`${item.body.substring(0, 51)}...`}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-400">
                      {currentDate}
                    </h4>
                    <img
                      className="mb-3 mt-3 rounded-lg"
                      src={generateImageURL()}
                      alt="cardImage"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        )
      }
    </div>
  )
}

export default DeletedCards
