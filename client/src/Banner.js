import React from 'react';

function Banner(props) {
  return (
    <div className='bg-blue-500 text-white p-4 w-full'>
      {props.message}
      <p>This is a banner message.</p>
    </div>
  );
}


export default Banner;
