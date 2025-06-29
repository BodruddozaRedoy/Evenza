import React from 'react';
import Button from './Button';

export default function Banner() {
  return (
    <div
      className="h-[500px] rounded-md p-5 md:p-10 bg-no-repeat bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 h-full flex items-center flex-col justify-center md:w-2/4 mx-auto gap-5">
        <h1 className="text-4xl font-bold">Experience Events Like Never Before</h1>
        <p className='text-center text-gray-400'>From concerts to conferences, Evenza makes organizing and attending events effortless. Discover, join, and manage events all in one place — with a seamless experience designed just for you.</p>
        <div>
            {/* <button className='py-3 px-5 rounded-md bg-primary cursor-pointer select-none'>Explore Now</button> */}
            <Button text={"Explore Now"}/>
        </div>
      </div>
    </div>
  );
}
