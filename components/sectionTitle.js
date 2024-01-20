import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col  ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm glow-text font-bold tracking-wider text-white uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-8xl mt-1 glow-text text-5xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-5xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl  text-lg leading-normal text-white lg:text-xl xl:text-xl dark:text-white">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;