"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { submitContactForm } from "./contact.action";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    try {
      await submitContactForm(formData);
      // alert("Email sent successfully!");
      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "", contact: "" });
    } catch (error) {
      // alert("Failed to send email");
      toast.error("Failed to send email");
      console.error(error);
    }
  }; 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br-from-indigo-100 via-purple-100 to-pink-100 px-4 py-8 font-poppins">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-white/30"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
            placeholder="Enter your name"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
            placeholder="Enter your email"
          />
        </label>

        {/* Contact Number */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Contact Number</span>
          <input
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
            placeholder="Enter your contact number"
          />
        </label>
        
        {/* Submit Button */}
        <button
        
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition-all"
        >
          Submit
        </button>
        <Button variant="outline" asChild>
      <a
        href="https://wa.me/916201167902"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </Button>
      </form>
      <Toaster richColors/>
    </div>
  );
}
