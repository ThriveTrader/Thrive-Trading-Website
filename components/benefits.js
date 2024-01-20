import Image from "next/image";
import React from "react";
import Container from "./container"; // Assuming this component handles overall layout

const Benefits = (props) => {
  const { data } = props;

  return (
    <Container> {/* Wrap content within the Container component */}
      <div className="flex flex-col items-center justify-center">
        {data?.bullets?.map((item, index) => (
          <Benefit key={index} title={item.title} icon={item.icon}>
            {item.desc}
          </Benefit>
        ))}
      </div>
    </Container>
  );
};

function Benefit(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-8 DD">
      <div className="flex items-center justify-center mb-2 bg-indigo-500 rounded-md w-11 h-11">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>
      <div className="flex flex-col items-center justify-center ">
        {props.title && (
          <h4 className="text-xl font-medium text-white dark:text-gray-200">
            {props.title}
          </h4>
        )}
        {props.children && (
          <p className="mt-1 text-white dark:text-white">{props.children}</p>
        )}
      </div>
    </div>
  );
}

export default Benefits;
