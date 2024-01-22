import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import React, { useState, useEffect } from "react";
import MyModal from "./MyModal";
import {
  ArrowRightCircleIcon,
  DocumentCheckIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleClose = () => setShowPopup(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Popup should be shown now");
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showPopup && <MyModal onClose={HandleClose} visible={showPopup} />}
      <Container className="flex flex-wrap ">
        <div className="flex items-center drift w-full lg:w-1/2">
          <div className="max-w-2xl">
            <h1 className="glow-text mt-5 font-bold ">TRADING NOW EASIER</h1>
            <ul class="list-disc mt-5  text-xl font-bold leading-normal text-white lg:text-xl xl:text-2xl dark:text-white">
              <li class="flex items-center">
                <span class="mr-2">🎯</span>
                DAILY TARGET - (100-200 POINTS)
              </li>
              <li class="flex items-center">
                <span class="mr-2">⛔</span>
                STOP LOSS - (25-30 POINTS)
              </li>
              <li class="flex items-center">
                <span class="mr-2">📞</span>
                CALLS - (4-CALLS)
              </li>
              <li class="flex items-center">
                <span class="mr-2">💹</span>
                BANKNIFTY & NIFTY - (FREE CALLS)
              </li>
              <li class="flex items-center">
                <span class="mr-2">💰</span>
                CAPITAL - 10K - 15K
              </li>
            </ul>

            <div className="flex mt-5 flex-col imagess items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://t.me/Thrive_trader"
                target="_blank"
                rel="noopener"
                className="flex items-center glower px-2 py-2 text-xl font-medium text-center text-white bgm rounded-md"
              >
                <img
                  src="/Telegram.png"
                  alt="Telegram Logo"
                  className="mr-2 telegram"
                />
                JOIN OUR TELEGRAM
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center w-full lg:w-1/2">
          <div className="" class=" ">
            <Image
              src={"/Main.svg"}
              width="400"
              height="400"
              className={"object-cover mt-10image mar"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};



export default Hero;
