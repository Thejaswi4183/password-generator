"use client";

import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const generatePassword = () => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(password);
  };

  const showToast = (message) => {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: message.includes("Copied") ? "green" : "red",
      stopOnFocus: true,
    }).showToast();
  };

  const copyToClipBoard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        showToast("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        showToast("Failed to copy password!");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Generate Strong Password
        </h2>
        <div>
          <label className="text-gray-700 block mb-2">Password</label>
          <textarea
            className="w-full h-16 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            readOnly
          />
          <button
            onClick={copyToClipBoard}
            className="mt-2 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md focus:outline-none flex items-center justify-center"
          >
            Copy
          </button>
        </div>
        <div className="mt-6">
          <input
            type="range"
            step="1"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-blue-200 rounded-full"
          />
          <span className="text-gray-700 text-sm">Length: {length}</span>
        </div>
        <button
          onClick={generatePassword}
          className="mt-6 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
