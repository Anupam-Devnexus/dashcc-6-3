import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaCard from "../../Components/Card/MediaCard";
import MediaData from "../../DataStore/Media.json";
import Confirm from "../../Components/PopUp/Confirm";

export default function Media() {
  const navigate = useNavigate();
  const [mediaList, setMediaList] = useState(MediaData);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedClient, setSelectedClient] = useState("");

  const requestDelete = (index) => {
    const item = mediaList[index];
    setSelectedIndex(index);
    setSelectedClient(item.text); // assuming "text" is client name
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedIndex !== null) {
      const updatedList = mediaList.filter((_, i) => i !== selectedIndex);
      setMediaList(updatedList);
    }
    resetConfirmState();
  };

  const resetConfirmState = () => {
    setConfirmOpen(false);
    setSelectedIndex(null);
    setSelectedClient("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Your Media Details</h2>
        <button
          onClick={() => navigate("/media/addMedia")}
          className="px-5 py-2 bg-[var(--var-red-col)] text-white rounded-md font-medium transition hover:bg-red-700"
        >
          + Add Media
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaList.map((item, index) => (
          <MediaCard
            key={index}
            link={item.link}
            image={item.image}
            text={item.text}
            onDelete={() => requestDelete(index)}
          />
        ))}
      </div>

      {/* Confirm Delete Modal */}
      <Confirm
        isOpen={confirmOpen}
        onConfirm={handleConfirmDelete}
        onCancel={resetConfirmState}
       
      />
    </div>
  );
}
