// Sect Component
import React from "react";
import Container from "./container";
import { CalendarDaysIcon, EllipsisVerticalIcon, ExclamationCircleIcon, EyeIcon, GlobeEuropeAfricaIcon, TvIcon } from "@heroicons/react/24/solid";

const Card = () => {
  return (
      <div class="relative flex h-full transform overflow-hidden items-end border-2 border-black rounded-xl bggg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div class="p-4 !pt-0 cc mt-6  mb-6 ml-4 mr-4 mkk border rounded-xl border-white transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <GlobeEuropeAfricaIcon width={40} className="mt-6"  />

          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
            From anywhere in the world
          </h2>
        </div>
        <div class="p-4 !pt-0 mt-6  mb-6 ml-4 mr-4 mkk border rounded-xl border-white transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <CalendarDaysIcon width={40} className="mt-6"  />

          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
            Anytime when you want
          </h2>
        </div>
        <div class="p-4 !pt-0 mt-6 mb-6 ml-4 mr-4 mkk border rounded-xl border-white transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <TvIcon width={40} className="mt-6" />

          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
            In any kind of device
          </h2>
        </div>
        <div class="p-4 !pt-0 mt-6 mb-6 ml-4 mr-4 mkk border rounded-xl border-white transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <EyeIcon  width={40} className="mt-6"/>

          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
            All secrets only to you
          </h2>
        </div>

        <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 class="mt-4 text-xl font-medium sm:text-2xl">
            Go around the world
          </h3>

          <p class="mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            praesentium voluptatem omnis atque culpa repellendus.
          </p>

          <p class="mt-8 font-bold">Read more</p>
          
        </div>
      </div>
  );
};

export default Card;
