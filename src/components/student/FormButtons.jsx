import React from "react";

const FormButtons = () => {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={() => history.back()}
        type="button"
        className="px-6 py-3 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="px-6 py-3 cursor-pointer rounded-lg bg-cyan-600 text-white hover:bg-cyan-700"
      >
        Save
      </button>
    </div>
  );
};

export default FormButtons;
