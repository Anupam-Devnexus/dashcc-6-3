import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddLocations() {
  const [formData, setFormData] = useState({
    icon: "",
    office: "",
    add1: "",
    add2: "",
  });
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://example.com/api/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to add location');
    }

    const data = await response.json();
    console.log('Location added:', data);

    alert('Location added successfully!');
    setFormData({ icon: '', office: '', add1: '', add2: '' });
    navigate('/locations')
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error adding the location.');
  }
};


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2
        className="text-2xl font-semibold mb-6 text-[var(--var-red-col)] text-center"
      >
        Add New Location
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Icon Name */}
        <div>
          <label
            htmlFor="icon"
            className="block mb-1 font-medium text-gray-700"
          >
            Icon Name (e.g., FaBuilding)
          </label>
          <input
            type="text"
            name="icon"
            id="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="Enter icon component name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
          />
        </div>

        {/* Office Name */}
        <div>
          <label
            htmlFor="office"
            className="block mb-1 font-medium text-gray-700"
          >
            Office Name
          </label>
          <input
            type="text"
            name="office"
            id="office"
            value={formData.office}
            onChange={handleChange}
            placeholder="Enter office name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
          />
        </div>

        {/* Address Line 1 */}
        <div>
          <label
            htmlFor="add1"
            className="block mb-1 font-medium text-gray-700"
          >
            Address Line 1
          </label>
          <input
            type="text"
            name="add1"
            id="add1"
            value={formData.add1}
            onChange={handleChange}
            placeholder="Enter first line of address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <label
            htmlFor="add2"
            className="block mb-1 font-medium text-gray-700"
          >
            Address Line 2
          </label>
          <input
            type="text"
            name="add2"
            id="add2"
            value={formData.add2}
            onChange={handleChange}
            placeholder="Enter second line of address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[var(--var-red-col)] text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Add Location
        </button>
      </form>
    </div>
  );
}
