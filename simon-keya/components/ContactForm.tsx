'use client'

import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
  // Added a honeypot field to the form state for spam prevention
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState('')

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_w0vaxqh';
  const TEMPLATE_ID = 'template_3qekbzp';
  const USER_ID = 'NiawJSFgdDfxZx5Wa';

  /**
   * Updates the form state as the user types in the input fields.
   * @param e The change event from the input or textarea element.
   */
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /**
   * Handles the focus event for form fields.
   * @param fieldName The name of the field that is focused.
   */
  function handleFocus(fieldName: keyof typeof form) {
    setFocusedField(fieldName)
  }

  /**
   * Handles the blur event for form fields.
   */
  function handleBlur() {
    setFocusedField('')
  }

  /**
   * Simple email validation function.
   * @param email The email string to validate.
   * @returns True if the email is valid, otherwise false.
   */
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  /**
   * Handles the form submission logic.
   * It sends the email using EmailJS and provides user feedback.
   * @param e The form submission event.
   */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Check the honeypot field. If it's filled, it's likely a bot.
    if (form.honeypot.length > 0) {
      console.log('Bot detected via honeypot field. Submission prevented.')
      setLoading(false)
      toast.success('Message sent — thanks!', {
        style: {
          background: '#0a0a0a',
          color: '#ffffff',
        },
      })
      // Clear the form fields to appear successful to the bot
      setForm({ name: '', email: '', message: '', honeypot: '' })
      return
    }

    // Client-side email validation
    if (!validateEmail(form.email)) {
      setLoading(false)
      toast.error('Please enter a valid email address.', {
        style: {
          background: '#0a0a0a',
          color: '#ffffff',
        },
      })
      return
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        USER_ID
      )
      toast.success('Message sent — thanks!', {
        style: {
          background: '#0a0a0a',
          color: '#ffffff',
        },
      })
      // Clear the form fields on success
      setForm({ name: '', email: '', message: '', honeypot: '' })
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again later.', {
        style: {
          background: '#0a0a0a',
          color: '#ffffff',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  /**
   * Checks if a form field is filled.
   * @param fieldName The name of the field to check.
   * @returns True if the field has content, otherwise false.
   */
  const isFieldFilled = (fieldName: keyof typeof form) => form[fieldName].length > 0

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center justify-center p-4">
        {/* Reduced the max-width of the form container */}
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* Removed the email logo/icon section */}
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-slate-400 text-lg">Send us a message and we&apos;ll get back to you soon</p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
            {/* Changed background to solid black */}
            <div className="absolute inset-0 bg-black rounded-3xl backdrop-blur-sm"></div>

            {/* Main Form */}
            {/* Reduced padding and changed background to solid black */}
            <form onSubmit={handleSubmit} className="relative bg-black backdrop-blur-sm border border-slate-700/50 rounded-3xl p-5 shadow-2xl">
              <div className="grid gap-6">

                {/* Honeypot field for spam prevention - hidden from human users */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px]" // Hides the input field off-screen
                />

                {/* Name Field */}
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || isFieldFilled('name')
                        ? '-top-2 text-xs text-blue-400 bg-black px-2' // Changed label background
                        : 'top-4 text-slate-400'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    disabled={loading}
                    className="w-full bg-gray-950 text-white border-2 border-slate-600 rounded-xl px-4 py-4 pt-6 transition-all duration-300 focus:border-blue-500 focus:bg-gray-950 focus:shadow-lg focus:shadow-blue-500/20 disabled:opacity-50"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    focusedField === 'name' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || isFieldFilled('email')
                        ? '-top-2 text-xs text-blue-400 bg-black px-2' // Changed label background
                        : 'top-4 text-slate-400'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    disabled={loading}
                    className="w-full bg-gray-950 text-white border-2 border-slate-600 rounded-xl px-4 py-4 pt-6 transition-all duration-300 focus:border-blue-500 focus:bg-gray-950 focus:shadow-lg focus:shadow-blue-500/20 disabled:opacity-50"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    focusedField === 'email' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || isFieldFilled('message')
                        ? '-top-2 text-xs text-blue-400 bg-black px-2' // Changed label background
                        : 'top-4 text-slate-400'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows={5}
                    required
                    disabled={loading}
                    className="w-full bg-gray-950 text-white border-2 border-slate-600 rounded-xl px-4 py-4 pt-8 transition-all duration-300 focus:border-blue-500 focus:bg-gray-950 focus:shadow-lg focus:shadow-blue-500/20 disabled:opacity-50 resize-none"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    focusedField === 'message' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center justify-center">
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </form>

            {/* Bottom Glow Effect */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
