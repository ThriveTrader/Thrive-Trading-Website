import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Caro({
  children: Slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

    useEffect(()=> {
        if (!autoSlide) return
        const SlideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(SlideInterval)
    },[])

  const prev = () =>
    setCurr((curr) => (curr === 0 ? Slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === Slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden justify-center flex relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {Slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <ArrowLeftCircleIcon
          width={30}
          className="text-white cursor-pointer"
          onClick={next}
          size={80}
        />
        <ArrowRightCircleIcon
          width={30}
          className=" rounded-full cursor-pointer text-white"
          onClick={prev}
        />
      </div>
    </div>
  );
}
