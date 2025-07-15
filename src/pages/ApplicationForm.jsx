import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { useSubmitApplicationMutation, useGetCoursesQuery } from '../services/applicationApi';
import { FaUpload, FaUser, FaEnvelope, FaPhone, FaIdCard, FaChurch, FaGraduationCap, FaCalendarAlt, FaVenusMars, FaMapMarkerAlt } from 'react-icons/fa';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        contact: '',
        aadharNumber: '',
        priestName: '',
        churchAddress: '',
        priestContact: '',
        dob: '',
        gender: '',
        higherEducation: '',
        course: '',
        timing: '',
        personalPhoto: null,
        certificate: null
    });

    const [errors, setErrors] = useState({});

    // RTK Query hooks
    const [submitApplication, { isLoading: isSubmitting, isSuccess, isError, error: submitError }] = useSubmitApplicationMutation();
    const { data: coursesData, isLoading: loadingCourses, error: coursesError } = useGetCoursesQuery();

    // Process courses data
    const courses = coursesData?.courses || [
        { value: 'cth', label: 'C.Th (Certificate in Theology)', timings: [{ id: 1, timing: '10am' }, { id: 2, timing: '8pm' }] },
        { value: 'bth', label: 'B.Th (Bachelor of Theology)', timings: [{ id: 3, timing: '10am' }, { id: 4, timing: '8pm' }] },
        { value: 'mdiv', label: 'M.Div (Master of Divinity)', timings: [{ id: 5, timing: '9pm' }] },
        { value: 'dcc', label: 'DCC (Diploma in Christian Counseling)', timings: [{ id: 6, timing: '10am' }, { id: 7, timing: '8pm' }] },
        { value: 'bcc', label: 'BCC (Bachelor in Christian Counseling)', timings: [{ id: 8, timing: '10am' }, { id: 9, timing: '8pm' }] },
        { value: 'macp', label: 'MA in Counselling & Psychology', timings: [{ id: 10, timing: '9pm' }] }
    ];

    // Handle courses loading error
    useEffect(() => {
        if (coursesError) {
            console.error('Error loading courses:', coursesError);
            // The courses will fallback to the default static data
        }
    }, [coursesError]);

    // Handle success/error states
    useEffect(() => {
        if (isSuccess) {
            alert('✅ Application submitted successfully!\n\nYou will receive a confirmation email shortly.');

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                contact: '',
                aadharNumber: '',
                priestName: '',
                churchAddress: '',
                priestContact: '',
                dob: '',
                gender: '',
                higherEducation: '',
                course: '',
                timing: '',
                personalPhoto: null,
                certificate: null
            });

            // Reset file inputs
            const photoInput = document.getElementById('personalPhoto');
            const certInput = document.getElementById('certificate');
            if (photoInput) photoInput.value = '';
            if (certInput) certInput.value = '';

            // Clear any errors
            setErrors({});
        }

        if (isError) {
            console.error('Submission error:', submitError);
            alert(`❌ Error submitting application: ${submitError?.data?.message || 'Please try again later'}`);
        }
    }, [isSuccess, isError, submitError]);

    // Remove the old fetchCourses function and useEffect since we're using RTK Query

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            // Validate file size
            const maxSize = name === 'personalPhoto' ? 500 * 1024 : 2 * 1024 * 1024; // 500KB for photo, 2MB for certificate

            if (file.size > maxSize) {
                setErrors(prev => ({
                    ...prev,
                    [name]: `File size must be less than ${name === 'personalPhoto' ? '500KB' : '2MB'}`
                }));
                return;
            }

            // Validate file type
            if (name === 'personalPhoto' && !file.type.startsWith('image/')) {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Please select a valid image file (JPEG, PNG, GIF, WebP)'
                }));
                return;
            }

            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
            if (name === 'certificate' && !allowedTypes.includes(file.type)) {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Please select a valid PDF, JPEG, PNG, GIF, or WebP file'
                }));
                return;
            }

            setFormData(prev => ({
                ...prev,
                [name]: file
            }));

            // Clear error
            if (errors[name]) {
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Required field validation
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
        if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar number is required';
        if (!formData.priestName.trim()) newErrors.priestName = 'Priest name is required';
        if (!formData.churchAddress.trim()) newErrors.churchAddress = 'Church address is required';
        if (!formData.priestContact.trim()) newErrors.priestContact = 'Priest contact is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.higherEducation.trim()) newErrors.higherEducation = 'Higher education is required';
        if (!formData.course) newErrors.course = 'Course selection is required';
        if (!formData.timing) newErrors.timing = 'Timing selection is required';
        if (!formData.personalPhoto) newErrors.personalPhoto = 'Personal photo is required';
        if (!formData.certificate) newErrors.certificate = 'Certificate is required';

        // Name validation (only letters and spaces)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (formData.firstName && !nameRegex.test(formData.firstName)) {
            newErrors.firstName = 'First name should only contain letters and spaces';
        }
        if (formData.lastName && !nameRegex.test(formData.lastName)) {
            newErrors.lastName = 'Last name should only contain letters and spaces';
        }
        if (formData.priestName && !nameRegex.test(formData.priestName)) {
            newErrors.priestName = 'Priest name should only contain letters and spaces';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone number validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (formData.contact && !phoneRegex.test(formData.contact)) {
            newErrors.contact = 'Please enter a valid 10-digit phone number';
        }

        if (formData.priestContact && !phoneRegex.test(formData.priestContact)) {
            newErrors.priestContact = 'Please enter a valid 10-digit phone number';
        }

        // Aadhar number validation (12 digits)
        const aadharRegex = /^[0-9]{12}$/;
        if (formData.aadharNumber && !aadharRegex.test(formData.aadharNumber)) {
            newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number';
        }

        // Date of birth validation (age check)
        if (formData.dob) {
            const today = new Date();
            const birthDate = new Date(formData.dob);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age < 18) {
                newErrors.dob = 'Applicant must be at least 18 years old';
            }

            if (age > 100) {
                newErrors.dob = 'Please enter a valid date of birth';
            }
        }

        // Address validation (minimum length)
        if (formData.address && formData.address.trim().length < 10) {
            newErrors.address = 'Address should be at least 10 characters long';
        }

        // Higher education validation (minimum length)
        if (formData.higherEducation && formData.higherEducation.trim().length < 5) {
            newErrors.higherEducation = 'Higher education details should be at least 5 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // Scroll to first error
            const firstError = Object.keys(errors)[0];
            if (firstError) {
                const errorElement = document.querySelector(`[name="${firstError}"]`);
                if (errorElement) {
                    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    errorElement.focus();
                }
            }
            return;
        }

        try {
            // Prepare application data with documents array
            const applicationData = {
                ...formData,
                documents: []
            };

            // Add files to documents array
            if (formData.personalPhoto) {
                applicationData.documents.push(formData.personalPhoto);
            }
            if (formData.certificate) {
                applicationData.documents.push(formData.certificate);
            }

            // Remove file fields from main data as they're now in documents
            delete applicationData.personalPhoto;
            delete applicationData.certificate;

            // Submit using RTK Query
            const result = await submitApplication(applicationData).unwrap();

            if (result.success) {
                // Success message with admission number
                const message = `✅ Application submitted successfully!\n\nYour admission number is: ${result.admission_no}\n\nPlease save this number for future reference. You will receive a confirmation email shortly.`;
                alert(message);

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

        } catch (error) {
            console.error('Error submitting form:', error);

            // Handle specific error cases
            if (error.data?.error) {
                const errorMessage = error.data.error;

                if (errorMessage.includes('email')) {
                    setErrors(prev => ({ ...prev, email: 'This email is already registered' }));
                } else if (errorMessage.includes('Aadhar')) {
                    setErrors(prev => ({ ...prev, aadharNumber: 'This Aadhar number is already registered' }));
                }

                alert(`❌ Error: ${errorMessage}`);
            } else {
                alert('❌ Network error: Please check your internet connection and try again.');
            }
        }
    };

    const selectedCourse = courses.find(course => course.value === formData.course);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Application Form
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Begin your journey with Doulos Theological Seminary, Thiruvalla
                        </p>
                    </div>

                    {/* Instructions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8"
                    >
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Application Instructions
                        </h3>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                            <li>• Ensure all information is accurate and complete</li>
                            <li>• Personal photo should be less than 500KB</li>
                            <li>• Certificate should be less than 1MB (PDF or image format)</li>
                            <li>• Application is subject to review and approval</li>
                            <li>• For queries, contact us at +91 9630426566, +91 9847599603, +91 9447515704</li>
                        </ul>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
                    >
                        {/* Personal Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FaUser className="mr-3 text-blue-600" />
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <FaMapMarkerAlt className="inline mr-2" />
                                    Address *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.address ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } dark:bg-gray-700 dark:text-white`}
                                    placeholder="Enter your complete address"
                                />
                                {errors.address && (
                                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaEnvelope className="inline mr-2" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaPhone className="inline mr-2" />
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.contact ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter 10-digit mobile number"
                                    />
                                    {errors.contact && (
                                        <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaIdCard className="inline mr-2" />
                                        Aadhar Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="aadharNumber"
                                        value={formData.aadharNumber}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.aadharNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter 12-digit Aadhar number"
                                    />
                                    {errors.aadharNumber && (
                                        <p className="mt-1 text-sm text-red-600">{errors.aadharNumber}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaCalendarAlt className="inline mr-2" />
                                        Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.dob ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                    />
                                    {errors.dob && (
                                        <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaVenusMars className="inline mr-2" />
                                        Gender *
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.gender ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FaGraduationCap className="inline mr-2" />
                                        Higher Education *
                                    </label>
                                    <input
                                        type="text"
                                        name="higherEducation"
                                        value={formData.higherEducation}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.higherEducation ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter your highest qualification"
                                    />
                                    {errors.higherEducation && (
                                        <p className="mt-1 text-sm text-red-600">{errors.higherEducation}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Church Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FaChurch className="mr-3 text-blue-600" />
                                Church Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Priest Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="priestName"
                                        value={formData.priestName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.priestName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter priest's name"
                                    />
                                    {errors.priestName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.priestName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Priest Contact *
                                    </label>
                                    <input
                                        type="tel"
                                        name="priestContact"
                                        value={formData.priestContact}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.priestContact ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white`}
                                        placeholder="Enter priest's contact number"
                                    />
                                    {errors.priestContact && (
                                        <p className="mt-1 text-sm text-red-600">{errors.priestContact}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Church Address *
                                </label>
                                <textarea
                                    name="churchAddress"
                                    value={formData.churchAddress}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.churchAddress ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } dark:bg-gray-700 dark:text-white`}
                                    placeholder="Enter church address"
                                />
                                {errors.churchAddress && (
                                    <p className="mt-1 text-sm text-red-600">{errors.churchAddress}</p>
                                )}
                            </div>
                        </div>

                        {/* Course Selection */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FaGraduationCap className="mr-3 text-blue-600" />
                                Course Selection
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Course *
                                    </label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        disabled={loadingCourses}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.course ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white disabled:opacity-50`}
                                    >
                                        <option value="">
                                            {loadingCourses ? 'Loading courses...' : 'Select Course'}
                                        </option>
                                        {courses.map(course => (
                                            <option key={course.value} value={course.value}>
                                                {course.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.course && (
                                        <p className="mt-1 text-sm text-red-600">{errors.course}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Timing *
                                    </label>
                                    <select
                                        name="timing"
                                        value={formData.timing}
                                        onChange={handleInputChange}
                                        disabled={!selectedCourse}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.timing ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                            } dark:bg-gray-700 dark:text-white disabled:opacity-50`}
                                    >
                                        <option value="">Select Timing</option>
                                        {selectedCourse && selectedCourse.timings.map(timing => (
                                            <option key={timing.id} value={timing.timing}>
                                                {timing.timing}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.timing && (
                                        <p className="mt-1 text-sm text-red-600">{errors.timing}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Document Upload */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                                <FaUpload className="mr-3 text-blue-600" />
                                Document Upload
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Personal Photo * (Max 500KB)
                                    </label>
                                    <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${errors.personalPhoto ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } hover:border-blue-500`}>
                                        <FaUpload className="mx-auto mb-4 text-gray-400 text-2xl" />
                                        <input
                                            type="file"
                                            name="personalPhoto"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="personalPhoto"
                                        />
                                        <label
                                            htmlFor="personalPhoto"
                                            className="cursor-pointer text-blue-600 hover:text-blue-800"
                                        >
                                            {formData.personalPhoto ? formData.personalPhoto.name : 'Click to upload photo'}
                                        </label>
                                        <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 500KB</p>
                                    </div>
                                    {errors.personalPhoto && (
                                        <p className="mt-1 text-sm text-red-600">{errors.personalPhoto}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        SSLC or Degree Certificate * (Max 1MB)
                                    </label>
                                    <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${errors.certificate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } hover:border-blue-500`}>
                                        <FaUpload className="mx-auto mb-4 text-gray-400 text-2xl" />
                                        <input
                                            type="file"
                                            name="certificate"
                                            accept=".pdf,image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="certificate"
                                        />
                                        <label
                                            htmlFor="certificate"
                                            className="cursor-pointer text-blue-600 hover:text-blue-800"
                                        >
                                            {formData.certificate ? formData.certificate.name : 'Click to upload certificate'}
                                        </label>
                                        <p className="text-sm text-gray-500 mt-2">PDF, PNG, JPG up to 1MB</p>
                                    </div>
                                    {errors.certificate && (
                                        <p className="mt-1 text-sm text-red-600">{errors.certificate}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-12 py-4 text-lg"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default ApplicationForm;
