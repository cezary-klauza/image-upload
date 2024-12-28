"use client";

import React, { FC, useState } from "react";
import Image from "next/image";

type ButtonProps = React.ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="bg-blue text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium"
    {...props}
  >
    {children}
  </button>
);

export const ShareButton: FC<ButtonProps> = () => {
  const [message, setMessage] = useState("");

  const copyHandler = async () => {
    await navigator.clipboard.writeText(`${window.location.href}`);
    setMessage("Link coppied!");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <div className="relative">
      {message !== "" && (
        <p className="absolute bottom-full mb-2 px-2 py-1 bg-foreground text-background w-max rounded-lg z-10 left-1/2 -translate-x-1/2 text-sm animate-disappear">
          {message}
        </p>
      )}
      <Button onClick={copyHandler}>
        <Image src="/Link.svg" alt="copy" width={18} height={18} />
        Share
      </Button>
    </div>
  );
};

type DownloadButtonProps = ButtonProps & {
  link: string;
  key: string;
};

export const DownloadButton: FC<DownloadButtonProps> = ({ link, key }) => {
  const downloadHandler = async () => {
    try {
      // Pobierz obraz
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Konwertuj odpowiedź na blob
      const blob = await response.blob();

      // Utwórz URL dla bloba
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = key || "image";
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error while downloading the image: ", error);
    }
  };

  return (
    <Button onClick={downloadHandler}>
      <Image src="/download.svg" alt="download" width={18} height={18} />
      Download
    </Button>
  );
};
