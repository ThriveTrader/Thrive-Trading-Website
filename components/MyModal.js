import { ClipboardDocumentListIcon, LockClosedIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Collapse } from "@material-tailwind/react";
import React from "react";

export default function MyModal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed zeder inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="backk p-20 rounded-xl">
        <XMarkIcon width={20} className="Closer text-white" onClick={onClose} />
        <h1 className="text-white flex justify-center font-medium texter">
          JOIN TODAY!
        </h1>
        <img
          src="/Telegram.png"
          alt="Telegram Logo"
          width={150}
          className="m-10 justify-center flex "
        />
          <div className="flex flex-col imagesss items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://google.com"
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
  );
}
