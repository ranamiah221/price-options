import React from 'react';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
             <IoMdCheckmarkCircle className='text-green-500'></IoMdCheckmarkCircle>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;