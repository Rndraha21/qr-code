import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { FiCheck, FiCopy, FiDownload, FiX } from "react-icons/fi";
import Typewriter from "typewriter-effect";

function QRCodeGenerator() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `${inputText}.png`;
    link.click();
    setInputText("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  const handleClear = () => {
    setInputText("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full relative max-w-md p-8 bg-card border rounded-3xl shadow-lg shadow-black/40 hover:shadow-2xl flex flex-col items-center hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center mb-6">
          <div className="w-18 h-18 flex items-center justify-center border rounded-full bg-secondary text-secondary-foreground mb-2">
            <BsQrCode className="text-white w-10 h-10" />
          </div>
          <h1 className="text-xl font-bold text-primary mb-1">
            <Typewriter
              options={{
                strings: ["QR Code Generator"],
                autoStart: true,
                delay: 50,
                loop: true,
                cursor: "|",
              }}
            />
          </h1>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text or URL"
          className="w-full mb-5 px-4 py-3 bg-secondary text-primary-foreground border rounded-lg outline-none resize-none  placeholder-gray-400 shadow-sm transition duration-400"
        />
        <div className="mb-5 flex items-center justify-center w-full">
          <div className="bg-secondary border rounded-xl shadow-sm flex items-center justify-center p-4 min-h-[200px] w-full">
            {inputText.trim() ? (
              <QRCodeCanvas
                value={inputText}
                size={150}
                fgColor="rgba(225,225,225,1)"
                bgColor="rgba(0,0,0,0)"
                className="rounded"
              />
            ) : (
              <BsQrCode className="w-16 h16 mb-2 text-gray-300" />
            )}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col w-full gap-3 mb-2">
          <button
            onClick={handleDownload}
            disabled={!inputText}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-card border text-white rounded-lg hover:bg-blue-600 disabled:bg-background disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <FiDownload className="w-4 h-4" /> Download
          </button>
          <button
            onClick={handleCopy}
            disabled={!inputText}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition cursor-pointer disabled:cursor-not-allowed disabled:bg-background disabled:text-gray-400 ${
              copied
                ? "bg-green-500 text-white focus:outline-none focus:border-none"
                : "bg-card border text-white hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:border-none"
            }`}
          >
            {copied ? (
              <FiCheck className="w-4 h-4" />
            ) : (
              <FiCopy className="w-4 h-4" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={handleClear}
            disabled={!inputText}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-card border text-white hover:text-red-500 rounded-lg hover:bg-red-200 disabled:bg-background disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <FiX className="w-4 h-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
}
export default QRCodeGenerator;
