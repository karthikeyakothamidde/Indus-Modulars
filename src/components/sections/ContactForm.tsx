"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, Instagram } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.service &&
      formData.budget &&
      formData.projectType
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          projectType: "",
          message: "",
        });
      }, 6000);
    }
  };

  const services = [
    "Home Interior",
    "Modular Kitchen",
    "Wardrobes & Closets",
    "Kids Bedroom",
    "Bedroom Designs",
    "Living Room Designs",
    "Dining Room Designs",
    "Office Interiors",
  ];

  const budgets = [
    "₹3 Lakhs - ₹5 Lakhs",
    "₹5 Lakhs - ₹8 Lakhs",
    "₹8 Lakhs - ₹12 Lakhs",
    "₹12 Lakhs - ₹18 Lakhs",
    "₹18 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs+",
  ];

  const projectTypes = [
    "2BHK Apartment",
    "3BHK Apartment",
    "4BHK / Penthouse",
    "Luxury Villa",
    "Independent House",
    "Commercial Workspace",
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        
        {/* Embedded Google Map */}
        <div className="w-full h-[350px] md:h-[450px] rounded-[32px] overflow-hidden border border-gold/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6906432725555!2d78.2788964!3d17.5222749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf37d76a3b7fd%3A0x1da7b7fab2fc86f6!2sINDUS%20MODULARS!5e0!3m2!1sen!2sin!4v1784047834893!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Indus Modulars Factory Location Map"
          />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6906432725555!2d78.2788964!3d17.5222749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf37d76a3b7fd%3A0x1da7b7fab2fc86f6!2sINDUS%20MODULARS!5e0!3m2!1sen!2sin!4v1784047834893!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
        </div>

      </div>
    </section>
  );
}
