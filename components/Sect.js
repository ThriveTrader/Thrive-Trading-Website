// Sect Component
import React from "react";
import Container from "./container";

const Sect = (props) => {
  const alignmentClass =
    props.align === "left" ? "" : "items-center justify-center text-center";

  return (
    <div className="bg-black  bg-opacity-30 w-full rounded-xl">
      <Container
        className={`  flex w-full flex-col ${alignmentClass}`}
      >
        {props.pretitle && (
          <div className="text-sm glow-text font-bold tracking-wider text-white uppercase">
            {props.pretitle}
          </div>
        )}

        {props.title && (
          <h2 className="max-w-8xl glow-text text-5xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-5xl dark:text-white">
            {props.title}
          </h2>
        )}

        {props.mainContent && (
          <p className="max-w-2xl py-4 text-lg leading-normal text-white lg:text-xl xl:text-xl dark:text-white">
            {props.mainContent}
          </p>
        )}
      </Container>
    </div>
  );
};

export default Sect;
