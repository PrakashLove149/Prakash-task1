// import React, { useContext, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { dataProvider } from '../ContextAPI/ContextProvider';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import FeaturedPlayListTwoToneIcon from '@mui/icons-material/FeaturedPlayListTwoTone';

// const Sidebar = () => {
//   const { pathname } = useLocation();
//   const { openFeedback , closeFeedback} = useContext(dataProvider);
 

//   return (
   
//     <div className='min-w-[320px] flex flex-col gap-y-10 shadow-2xl rounded-[60px] px-12 py-12'>
//       <div className='flex p-3 gap-x-3 items-center bg-white rounded-lg'>
//         <img className='w-14 h-14 rounded-full' src="https://assets.monica.im/tools-web/static/imageGeneratorFeatureIntro1-AQU1zYPO.webp" alt="profil" />
//         <div>
//           <h2 className='text-xl font-bold'>Hi Reader,</h2>
//           <p>Here's your News!</p>
//         </div>
//       </div>

//       <div className='flex p-3 gap-x-3 flex-col items-center bg-white rounded-lg'>
//         <h2 className='text-2xl font-bold'>View Toggle</h2>
//         <div className='flex mt-2 rounded-lg bg-gray-300'>
//           <NavLink to="/" className={`py-4 text-2xl px-6 rounded-lg  ${pathname === "/" ? 'bg-green-200' : ""}`}>
//             <FeaturedPlayListTwoToneIcon />
//           </NavLink>
//           <NavLink to="/lists" className={`py-4 text-2xl px-6 rounded-lg ${pathname === "/lists" ? 'bg-green-200' : ""}`}>
//           <FormatListBulletedOutlinedIcon/>
//           </NavLink>
//         </div>
//       </div>

//       <div className='flex p-3 gap-x-3 flex-col items-center bg-white rounded-lg'>
//         <h2 className='text-2xl font-bold'>Have a Feedback?</h2>
//         <div onClick={openFeedback} className={'flex mt-2 rounded-lg bg-green-200 py-4 px-6 cursor-pointer'}>
//           <h2 className='text-xl' >We are Listening!</h2>
//         </div>
//       </div>
//     </div> 
//   );
// };

// export default Sidebar;



import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { dataProvider } from '../ContextAPI/ContextProvider';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FeaturedPlayListTwoToneIcon from '@mui/icons-material/FeaturedPlayListTwoTone';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { openFeedback, closeFeedback, isFeedbackOpen } = useContext(dataProvider);

  const handleFeedbackClick = () => {
    if (isFeedbackOpen) {
      closeFeedback();
    } else {
      openFeedback();
    }
  };

  return (
    <div className='min-w-[320px] flex flex-col gap-y-10 shadow-2xl rounded-[60px] px-12 py-12'>
      <div className='flex p-3 gap-x-3 items-center bg-white rounded-lg'>
        <img className='w-14 h-14 rounded-full' src="https://assets.monica.im/tools-web/static/imageGeneratorFeatureIntro1-AQU1zYPO.webp" alt="profil" />
        <div>
          <h2 className='text-xl font-bold'>Hi Reader,</h2>
          <p>Here's your News!</p>
        </div>
      </div>

      <div className='flex p-3 gap-x-3 flex-col items-center bg-white rounded-lg'>
        <h2 className='text-2xl font-bold'>View Toggle</h2>
        <div className='flex mt-2 rounded-lg bg-gray-300'>
          <NavLink to="/" className={`py-4 text-2xl px-6 rounded-lg  ${pathname === "/" ? 'bg-green-200' : ""}`}>
            <FeaturedPlayListTwoToneIcon />
          </NavLink>
          <NavLink to="/lists" className={`py-4 text-2xl px-6 rounded-lg ${pathname === "/lists" ? 'bg-green-200' : ""}`}>
            <FormatListBulletedOutlinedIcon/>
          </NavLink>
        </div>
      </div>

      <div className='flex p-3 gap-x-3 flex-col items-center bg-white rounded-lg'>
        <h2 className='text-2xl font-bold'>Have a Feedback?</h2>
        <div onClick={handleFeedbackClick} className={`flex mt-2 rounded-lg ${isFeedbackOpen ? 'bg-pink-500' : 'bg-green-200'} py-4 px-6 cursor-pointer`}>
          <h2 className='text-xl'>{isFeedbackOpen ? 'We are Listening!' : 'We are Listening!'}</h2>
        </div>
      </div>
    </div> 
  );
};

export default Sidebar;
