import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";

const PopupWidget = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    console.log(data);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();

      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        e.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Client Error. Please check the console.log for more info");
      console.log(error);
    }
  };


  return (
    <div className="Blinker">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 Main_Color rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none  ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <a href="https://t.me/Thrive_trader">
                  <img
                    src="/Telegram.png"
                    alt="Telegram Logo"
                    className="mr-2 telegram2"
                  />
                </a>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <img
                  src="/Telegram.png"
                  alt="Telegram Logo"
                  className="mr-2 telegram2"
                />
              </Transition>
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PopupWidget;
