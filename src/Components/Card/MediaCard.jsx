import React from "react";
import { Trash2 } from "lucide-react"; // Optional: use an icon library like lucide or react-icons

export default function MediaCard({ image, text, link = "", onDelete }) {
  const openLink = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div
      className="relative flex flex-col cursor-pointer items-start sm:items-center bg-[var(--var-red-col)]/10 border border-[var(--var-red-col)]
      gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition"
      onClick={openLink}
    >
      {/* Delete Button (top-right corner) */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering link open
            onDelete();
          }}
          className="absolute top-2 right-2 bg-[var(--var-red-col)] cursor-pointer text-white p-1 rounded hover:bg-red-700 transition"
          title="Delete Media"
        >
          <Trash2 size={16} />
        </button>
      )}

      <img
        className="h-44 w-full object-cover rounded-md"
        src={image}
        alt={text}
      />
      <span className="font-light text-left text-gray-800">{text}</span>
    </div>
  );
}
