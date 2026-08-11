import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="h-12 w-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">
        Loading...
      </p>
    </div>
  );
};

export default Loader;