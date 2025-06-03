import React, { useState } from "react";
import LoginSignupForm from "../../Pages/LoginSignup/LoginSignupForm";
import { GrLinkNext } from "react-icons/gr";

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="min-h-screen bg-white px-6 sm:px-16  flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row gap-6 items-center w-full max-w-5xl">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="text-[var(--var-red-col)]">Cervino Ceramix !</span>
          </h1>
        

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start pt-4">
            <button
              onClick={() => setShowForm(true)}
              className="group cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[var(--var-red-col)] text-white rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-red-700 transition-all duration-300"
            >
              Let’s Get Started
              <GrLinkNext className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Image or Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md sm:max-w-lg">
            {showForm ? (
              <div className="rounded-2xl">
                <LoginSignupForm />
              </div>
            ) : (
              <img
                src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1748258320/WhatsApp_Image_2025-05-26_at_4.48.11_PM_uicgrp.jpg"
                alt="Cervino Ceramix Product"
                className="w-full h-auto rounded-2xl shadow-gray-800 shadow-lg object-cover transition-all duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
