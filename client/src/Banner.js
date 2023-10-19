import React from "react";

function Banner(props) {
  return (
    <div
      className="bg-blue-500 text-white p-4 w-full h-screen "
      style={{
        backgroundImage: `url('/road.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center backdrop-blur-sm absolute inset-0">
        <h1 className="text-6xl font-bold text-center mt-4">{props.title}</h1>
        {props.message}
      </div>
    </div>
  );
}

export default Banner;
