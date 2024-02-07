// PasswordToggle.js

import { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
interface PasswordToggleProps {
    handleClick: () => void;
    passwordVisible:boolean
  }
const PasswordToggle:React.FC<PasswordToggleProps> = ({handleClick,passwordVisible}) => {

  return (
    <>
      {passwordVisible ? (
        <BiShow
          className="text-xl text-[#404EED] 2xl:text-[28px] lg:text-[14px] absolute right-5 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <BiHide
          className="text-xl text-[#404EED] 2xl:text-[28px] lg:text-[14px] absolute right-5 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default PasswordToggle;
