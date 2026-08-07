import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

const ProfileUpload = ({ profileImage, setProfileImage }) => {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!profileImage) return;

    if (typeof profileImage === "string") {
      setPreview(`http://localhost:5000${profileImage}`);
    } else {
      setPreview(URL.createObjectURL(profileImage));
    }
  }, [profileImage]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-500">
        {preview ? (
          <img
            src={preview}
            alt="Student"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <FaCamera size={35} className="text-gray-400" />
          </div>
        )}
      </div>

      <label className="bg-cyan-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-cyan-700 transition">
        Upload Photo
        <input type="file" accept="image/*" hidden onChange={handleImage} />
      </label>
    </div>
  );
};

export default ProfileUpload;
