"use client";

import Caro from "./Caro";

const Slides = ["/Slides/1.png", "/Slides/1.png"];

const Imager = () => {
  return (
    <div className="flex items-center justify-center "> 
      <Caro autoSlide={true}>
        {Slides.map((s) => (
          <img src={s} key={s} alt={`slide-${s}`} />
        ))}
      </Caro>
    </div>
  );
};

export default Imager;