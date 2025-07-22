import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { FiCheck, FiCopy, FiDownload, FiX } from "react-icons/fi";

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
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-card border rounded-3xl shadow-lg shadow-black/40 hover:shadow-2xl flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center border rounded-full bg-secondary text-secondary-foreground mb-2">
            <BsQrCode className="cursor-target text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-1 uppercase">
            <span className="cursor-target">qr </span>
            <span className="cursor-target">code </span>
            <span className="cursor-target">generator</span>
          </h1>
        </div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text or URL"
          className="w-full mb-4 px-3 py-2 bg-secondary text-primary-foreground border rounded-lg outline-none resize-none placeholder-gray-400 shadow-sm transition duration-400 cursor-target"
        />
        <div className="mb-4 flex items-center justify-center w-full">
          <div className="bg-secondary border rounded-xl shadow-sm flex items-center justify-center p-2 min-h-[150px] max-h-[200px] w-full">
            {inputText.trim() ? (
              <QRCodeCanvas
                value={inputText}
                size={120}
                fgColor="#000"
                bgColor="#FFF"
                className="rounded cursor-target"
              />
            ) : (
              <BsQrCode className="cursor-target w-12 h-12 mb-2 text-gray-300" />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-2 mb-2">
          <button
            onClick={handleDownload}
            disabled={!inputText}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-card border text-white rounded-lg hover:bg-blue-600 disabled:bg-background disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-target"
          >
            <FiDownload className="w-4 h-4" /> Download
          </button>
          <button
            onClick={handleCopy}
            disabled={!inputText}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition cursor-target disabled:cursor-not-allowed disabled:bg-background disabled:text-gray-400 ${
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
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-card border text-white hover:text-red-500 rounded-lg hover:bg-red-200 disabled:bg-background disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-target"
          >
            <FiX className="w-4 h-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
