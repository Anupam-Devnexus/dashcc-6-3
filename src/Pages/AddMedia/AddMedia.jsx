import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackCircle } from "react-icons/io5";
export default function AddMedia() {
  const [media, setMedia] = useState({
    image: null,
    link: "",
    description: "",
  });

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (media.image) {
      const objectUrl = URL.createObjectURL(media.image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreview(null);
  }, [media.image]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setMedia((prev) => ({ ...prev, image: files[0] }));
    } else {
      setMedia((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!media.image || !media.link || !media.description) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("image", media.image);
    formData.append("link", media.link);
    formData.append("description", media.description);

    try {
      const response = await fetch("https://your-api-endpoint.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong while uploading");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Media submitted successfully!");

      // Reset form
      setMedia({ image: null, link: "", description: "" });
      setPreview(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to submit media. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/media")}
          className="px-2 py-1 border cursor-pointer border-[var(--var-red-col)] text-[var(--var-red-col)] rounded-full hover:bg-red-100 transition"
        >
          <IoCaretBackCircle/> 
        </button>
        <h2 className="text-3xl font-semibold text-red-600">Add Media</h2>
        <div></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-40 h-40 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Link Input */}
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
            Media Link
          </label>
          <input
            type="url"
            name="link"
            value={media.link}
            onChange={handleChange}
            placeholder="https://example.com"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            value={media.description}
            onChange={handleChange}
            placeholder="Write a short description here..."
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Submit Media
          </button>
        </div>
      </form>
    </div>
  );
}
