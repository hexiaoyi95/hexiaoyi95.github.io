'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    // In a real implementation, you would send this data to your backend
    // For now, we'll just simulate a successful submission after a delay
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Success!
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Feel free to reach out if you have any questions about my work, potential collaborations, or just want to say hello!
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">xiaoyi.he@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Shanghai, China</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/hexiaoyi95" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/xiaoyihe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:xiaoyi.he@example.com" 
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          {submitSuccess ? (
            <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md mb-6">
              Thank you for your message! I will get back to you as soon as possible.
            </div>
          ) : null}
          
          {submitError ? (
            <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md mb-6">
              {submitError}
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full flex justify-center"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 