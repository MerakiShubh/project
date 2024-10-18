import { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(20);

  const handleProgressChange = (event) => {
    const newProgress = Math.max(0, Math.min(100, event.target.value));
    setProgress(newProgress);
  };

  return (
    <div className="h-screen flex">
      {/* Left fixed section */}
      <div className="w-1/4 h-full bg-gray-100 p-10 m-6 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-600 fixed">
        <div className="bg-gray-700 h-40 w-full rounded-2xl"></div>
      </div>

      {/* Scrollable right section */}
      <div className="ml-[25%] w-[75%] h-full overflow-y-auto bg-white p-10 flex-col space-y-16">
        {/* UPPER two boxes */}
        <div className="flex justify-around bg-gray-200 p-10 mb-0 rounded-2xl max-w-[1400px] mx-auto">
          <div className="bg-red-900 w-80 h-40 rounded-2xl"></div>
          <div className="bg-red-900 w-80 h-40 rounded-2xl"></div>
        </div>

        <div className="flex justify-center space-x-10 bg-gray-200 p-10 mb-0 rounded-2xl max-w-[1400px] mx-auto">
          <div className="bg-red-900 w-80 h-40 rounded-2xl relative">
            <div className="bg-white w-28 h-16 rounded-l-full rounded-r-full absolute right-2 bottom-2"></div>
          </div>
          <div className="bg-red-900 w-80 h-40 rounded-2xl relative">
            <div className="bg-white w-16 h-16 rounded-full absolute left-2 bottom-2"></div>
          </div>
        </div>

        <div className="flex justify-between bg-gray-200 p-10 mb-0 rounded-2xl max-w-[1400px] mx-auto translate-y-60">
          <div className="w-52 h-52 rounded-2xl bg-gradient-to-r from-green-200 to-green-400 backdrop-blur-sm relative">
            <div className="w-10 h-10 bg-black rounded-full absolute bottom-4 right-4"></div>
          </div>
          <div className="w-52 h-52 rounded-2xl bg-gradient-to-r from-green-300 to-green-500 backdrop-blur-sm relative">
            <div className="w-10 h-10 bg-black rounded-full absolute bottom-4 left-4"></div>
          </div>
          <div className="w-52 h-52 rounded-2xl bg-gradient-to-r from-green-100 to-green-200 backdrop-blur-sm relative">
            <div className="w-10 h-10 bg-black rounded-full absolute bottom-4 right-4"></div>
          </div>
          <div className="w-52 h-52 rounded-2xl bg-gradient-to-r from-green-100 to-green-300 backdrop-blur-sm relative">
            <div className="w-10 h-10 bg-black rounded-full absolute bottom-4 left-4"></div>
          </div>
          <div className="w-52 h-52 rounded-2xl bg-gradient-to-r from-green-100 to-green-300 backdrop-blur-sm relative">
            <div className="w-10 h-10 bg-black rounded-full absolute bottom-4 right-4"></div>
          </div>
        </div>

        <div className="flex flex-col justify-around items-center bg-gray-200 p-10 mb-0 rounded-2xl max-w-[1400px] mx-auto translate-y-64">
          <div className="w-full h-6 rounded-full bg-gradient-to-r from-green-400 to-red-400 relative">
            <div
              className="h-full bg-black rounded-full absolute top-0 left-0"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full mt-6"
          />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default App;
