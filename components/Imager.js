"use client";

import Caro from "./Caro";

const Slides = ["/Slides/1.png","/Slides/1.png"]

const Imager = () => {
  return (
    <main className="App">
      <div className="max-w-sm mx-auto">
        <Caro autoSlide={true}>
          {Slides.map((s) => (
            <img src={s} />
          ))}
        </Caro>
      </div>
    </main>
  );
};

export default Imager;
