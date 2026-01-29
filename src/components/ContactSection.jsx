import React, { useRef, useState } from 'react'

function ContactSection() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const contactRef = useRef(null)
    const emailRef = useRef(null)
    const serviceRef = useRef(null)
    const companyRef = useRef(null)
    const messageRef = useRef(null)

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        // First Name validation
        if (!firstNameRef.current.value.trim()) {
            newErrors.firstName = 'First name is required'
        }

        // Last Name validation
        if (!lastNameRef.current.value.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        // Contact Number validation
        const contactValue = contactRef.current.value.trim()
        if (!contactValue) {
            newErrors.contact = 'Contact number is required'
        } else if (!/^[0-9]{10}$/.test(contactValue)) {
            newErrors.contact = 'Enter a valid 10-digit number'
        }

        // Email validation
        const emailValue = emailRef.current.value.trim()
        if (!emailValue) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            newErrors.email = 'Enter a valid email address'
        }

        // Service validation
        if (!serviceRef.current.value) {
            newErrors.service = 'Please select a service'
        }

        // Company Name validation
        if (!companyRef.current.value.trim()) {
            newErrors.company = 'Company name is required'
        }

        // Message validation
        if (!messageRef.current.value.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Form is valid, proceed with submission
            console.log('Form submitted successfully!')
            console.log({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                contact: contactRef.current.value,
                email: emailRef.current.value,
                service: serviceRef.current.value,
                company: companyRef.current.value,
                message: messageRef.current.value,
            })
            // Reset form
            firstNameRef.current.value = ''
            lastNameRef.current.value = ''
            contactRef.current.value = ''
            emailRef.current.value = ''
            serviceRef.current.value = ''
            companyRef.current.value = ''
            messageRef.current.value = ''
            setErrors({})
            alert('Message sent successfully!')
        }
    }

    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
    const errorClasses = "text-red-500 text-xs mt-1"

    return (
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 w-full">
            <div className="w-full sm:w-[90%] mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 w-full">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-[#0A2540] mb-3 md:mb-4 font-sans">
                        Contact Us
                    </h2>
                    <p className="text-sm md:text-base text-gray-500">
                        Let's start something great today. Get in touch with us today!
                    </p>
                </div>

                {/* Contact Container */}
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg w-full overflow-hidden">
                    {/* Left Side - Get in touch */}
                    <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 relative overflow-hidden flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, #E8F4FC 0%, #F0E6F6 50%, #E8F0FC 100%)'
                        }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                {[...Array(8)].map((_, i) => (
                                    <circle
                                        key={i}
                                        cx="100"
                                        cy="100"
                                        r={20 + i * 12}
                                        fill="none"
                                        stroke="#6B9FD4"
                                        strokeWidth="0.5"
                                    />
                                ))}
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 w-60 h-60 opacity-20">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                {[...Array(10)].map((_, i) => (
                                    <circle
                                        key={i}
                                        cx="100"
                                        cy="100"
                                        r={15 + i * 10}
                                        fill="none"
                                        stroke="#8B7FC7"
                                        strokeWidth="0.5"
                                    />
                                ))}
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-8 md:mb-10">
                                Get in touch
                            </h3>

                            {/* Phone */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-[#0A3D62] rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-sm md:text-base text-[#0A2540]">+91 9821799655</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-[#0A3D62] rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm md:text-base text-[#0A2540] leading-relaxed">
                                    Ansal Corporate Park  903, 9th Floor,<br />
                                    Tower-A2, Sector 142, Noida (UP) 201301
                                </span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#0A3D62] rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm md:text-base text-[#0A2540]">business@idreambiz.co</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-6 md:mb-8">
                            Write to us
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        id="firstName"
                                        ref={firstNameRef}
                                        type="text"
                                        placeholder=" "
                                        className={`${inputClasses} peer placeholder-transparent pt-6`}
                                    />
                                    <label
                                        htmlFor="firstName"
                                        className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                    >
                                        First Name
                                    </label>
                                    {errors.firstName && <p className={errorClasses}>{errors.firstName}</p>}
                                </div>
                                <div className="relative">
                                    <input
                                        id="lastName"
                                        ref={lastNameRef}
                                        type="text"
                                        placeholder=" "
                                        className={`${inputClasses} peer placeholder-transparent pt-6`}
                                    />
                                    <label
                                        htmlFor="lastName"
                                        className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                    >
                                        Last Name
                                    </label>
                                    {errors.lastName && <p className={errorClasses}>{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* Contact Number */}
                            <div className="relative">
                                <input
                                    id="contact"
                                    ref={contactRef}
                                    type="tel"
                                    placeholder=" "
                                    className={`${inputClasses} peer placeholder-transparent pt-6`}
                                />
                                <label
                                    htmlFor="contact"
                                    className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                >
                                    Contact Number
                                </label>
                                {errors.contact && <p className={errorClasses}>{errors.contact}</p>}
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    id="email"
                                    ref={emailRef}
                                    type="email"
                                    placeholder=" "
                                    className={`${inputClasses} peer placeholder-transparent pt-6`}
                                />
                                <label
                                    htmlFor="email"
                                    className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                >
                                    Email Address
                                </label>
                                {errors.email && <p className={errorClasses}>{errors.email}</p>}
                            </div>

                            {/* Service Dropdown */}
                            <div>
                                <select
                                    ref={serviceRef}
                                    className={`${inputClasses} text-gray-400 appearance-none bg-white cursor-pointer`}
                                    defaultValue=""
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 12px center',
                                        backgroundSize: '20px'
                                    }}
                                >
                                    <option value="" disabled>Service you want</option>
                                    <option value="web-development" className="text-gray-700">Web Development</option>
                                    <option value="mobile-development" className="text-gray-700">Mobile Development</option>
                                    <option value="ui-ux-design" className="text-gray-700">UI/UX Design</option>
                                    <option value="cloud-services" className="text-gray-700">Cloud Services</option>
                                    <option value="consulting" className="text-gray-700">Consulting</option>
                                    <option value="other" className="text-gray-700">Other</option>
                                </select>
                                {errors.service && <p className={errorClasses}>{errors.service}</p>}
                            </div>

                            {/* Company Name */}
                            <div className="relative">
                                <input
                                    id="company"
                                    ref={companyRef}
                                    type="text"
                                    placeholder=" "
                                    className={`${inputClasses} peer placeholder-transparent pt-6`}
                                />
                                <label
                                    htmlFor="company"
                                    className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                >
                                    Company Name
                                </label>
                                {errors.company && <p className={errorClasses}>{errors.company}</p>}
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    ref={messageRef}
                                    placeholder=" "
                                    rows="4"
                                    className={`${inputClasses} peer placeholder-transparent pt-6 resize-none`}
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="pointer-events-none absolute left-3 -top-2 bg-white px-1 text-xs text-gray-600 transition-all duration-200
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
                                >
                                    Message
                                </label>
                                {errors.message && <p className={errorClasses}>{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0A3D62] text-white py-3 md:py-4 rounded-lg font-medium text-sm md:text-base hover:bg-[#083352] transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
