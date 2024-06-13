"use client";
import React, { useEffect, useState } from "react";
import { GrCloudDownload } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa";

let deferredPrompt: any;

function LinkDownload() {
  const [showButton, setShowButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(errorMessage)

  const downloadPWA = () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(
              (choiceResult: { outcome: string }) => {
                if (choiceResult.outcome === "accepted") {
                  console.log("User accepted the install prompt");
                } else {
                  console.log("User dismissed the install prompt");
                }
                deferredPrompt = null;
                setShowButton(false);
              }
            );
          }
        })
        .catch((error) => {
          setErrorMessage(
            "Đã xảy ra lỗi khi đăng ký Service Worker: " + error.message
          );
        });
    } else {
      setErrorMessage(
        "Trình duyệt không hỗ trợ Service Worker hoặc PushManager"
      );
    }
  };

  return (
    <div className="grid grid-cols-6 h-24 gap-6 mb-[116px] lg:mb-0">
      <div
        onClick={downloadPWA}
        className="bg-blur-white h-24 flex flex-col backdrop-blur-md col-span-3 lg:col-span-1
    items-center justify-center rounded-lg cursor-pointer hover:scale-105 duration-500"
      >
        <GrCloudDownload className="text-2xl" />
        <p className="text-sm mt-2 font-semibold">Tải Ứng Dụng</p>
      </div>
      <a
        className="flex items-center col-span-6 lg:col-span-5 bg-blur-white backdrop-blur-md p-6 rounded-lg"
        href="https://m.me/j/Abb6pyPv-Ms8RxjR"
        target="_blank"
      >
        <FaFacebookMessenger className="h-12 w-12" />
        <div className="flex flex-col ml-4">
          <h1 className="font-semibold">Tham giam box chat</h1>
          <p>Giao lưu, trò chuyện bàn luần về game.</p>
        </div>
      </a>
    </div>
  );
}

export default LinkDownload;
