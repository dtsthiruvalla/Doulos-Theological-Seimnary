import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaUsers,
    FaEye,
    FaEdit,
    FaTrash,
    FaDownload,
    FaSearch,
    FaFilter,
    FaCheckCircle,
    FaTimesCircle,
    FaClock,
    FaGraduationCap,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaChurch,
    FaUserCircle,
    FaFileDownload,
    FaImage,
    FaFilePdf,
    FaSignOutAlt
} from 'react-icons/fa';
import {
    useGetApplicationsQuery,
    useUpdateApplicationStatusMutation,
    useDeleteApplicationMutation,
    useUpdateApplicationMutation
} from '../services/applicationApi';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const AdminPanel = ({ onLogout }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [courseFilter, setCourseFilter] = useState('all');
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editFormData, setEditFormData] = useState({});

    // RTK Query hooks
    const { data: applicationsData, isLoading: loading, error, refetch } = useGetApplicationsQuery({
        search: searchTerm,
        status: statusFilter !== 'all' ? statusFilter : '',
        course: courseFilter !== 'all' ? courseFilter : ''
    });

    const [updateApplicationStatus, { isLoading: isUpdatingStatus }] = useUpdateApplicationStatusMutation();
    const [deleteApplication, { isLoading: isDeleting }] = useDeleteApplicationMutation();
    const [updateApplication, { isLoading: isUpdating }] = useUpdateApplicationMutation();

    // Process applications data
    const applications = applicationsData?.applications || [];

    // Calculate stats
    const stats = {
        total: applications.length,
        pending: applications.filter(app => app.status === 'pending').length,
        approved: applications.filter(app => app.status === 'approved').length,
        rejected: applications.filter(app => app.status === 'rejected').length
    };

    // Handle errors
    useEffect(() => {
        if (error) {
            console.error('Error fetching applications:', error);
            alert('Error loading applications. Please try again.');
        }
    }, [error]);

    // Refetch data when filters change
    useEffect(() => {
        refetch();
    }, [searchTerm, statusFilter, courseFilter, refetch]);

    // Course mapping
    const courseLabels = {
        'cth': 'C.Th (Certificate in Theology)',
        'bth': 'B.Th (Bachelor of Theology)',
        'mdiv': 'M.Div (Master of Divinity)',
        'dcc': 'DCC (Diploma in Christian Counseling)',
        'bcc': 'BCC (Bachelor in Christian Counseling)',
        'macp': 'MA in Counselling & Psychology'
    };

    const statusColors = {
        'pending': 'bg-yellow-100 text-yellow-800',
        'approved': 'bg-green-100 text-green-800',
        'rejected': 'bg-red-100 text-red-800'
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch =
            app.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.admission_no?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
        const matchesCourse = courseFilter === 'all' || app.course === courseFilter;

        return matchesSearch && matchesStatus && matchesCourse;
    });

    const handleViewApplication = (application) => {
        setSelectedApplication(application);
        setShowViewModal(true);
    };

    const handleEditApplication = (application) => {
        setSelectedApplication(application);
        setEditFormData(application);
        setShowEditModal(true);
    };

    const handleDeleteApplication = (application) => {
        setSelectedApplication(application);
        setShowDeleteModal(true);
    };

    const handleUpdateStatus = async (applicationId, newStatus) => {
        try {
            await updateApplicationStatus({
                id: applicationId,
                status: newStatus,
                comments: '' // You can add comments field if needed
            }).unwrap();

            // Show success message
            alert(`Application status updated to ${newStatus}`);
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Error updating application status');
        }
    };

    const handleSaveEdit = async () => {
        try {
            await updateApplication({
                id: selectedApplication.id,
                ...editFormData
            }).unwrap();

            setShowEditModal(false);
            setSelectedApplication(null);
            setEditFormData({});

            alert('Application updated successfully');
        } catch (error) {
            console.error('Error updating application:', error);
            alert('Error updating application');
        }
    };

    const handleDeleteConfirm = async () => {
        try {
            await deleteApplication(selectedApplication.id).unwrap();

            setShowDeleteModal(false);
            setSelectedApplication(null);

            alert('Application deleted successfully');
        } catch (error) {
            console.error('Error deleting application:', error);
            alert('Error deleting application');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const exportApplications = () => {
        // Convert applications to CSV
        const csvContent = [
            ['Admission No', 'Name', 'Email', 'Contact', 'Course', 'Status', 'Applied Date'],
            ...filteredApplications.map(app => [
                app.admission_no,
                `${app.first_name} ${app.last_name}`,
                app.email,
                app.contact,
                courseLabels[app.course],
                app.status,
                formatDate(app.created_at)
            ])
        ];

        const csvString = csvContent.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'applications.csv';
        a.click();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading applications...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Admin Panel - Application Management
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Manage and review student applications for Doulos Theological Seminary
                            </p>
                        </div>
                        <Button
                            onClick={onLogout}
                            variant="outline"
                            className="flex items-center gap-2"
                        >
                            <FaSignOutAlt className="h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaUsers className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Applications</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.total}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaClock className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.pending}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaCheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Approved</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.approved}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <FaTimesCircle className="h-8 w-8 text-red-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Rejected</p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.rejected}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search applications..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>

                            <select
                                value={courseFilter}
                                onChange={(e) => setCourseFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            >
                                <option value="all">All Courses</option>
                                {Object.entries(courseLabels).map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>

                            <Button onClick={exportApplications} className="flex items-center gap-2">
                                <FaDownload className="h-4 w-4" />
                                Export CSV
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Applications Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Applicant
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Course
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Applied Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredApplications.map((application) => (
                                    <tr key={application.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                                                        <FaUserCircle className="h-8 w-8 text-white" />
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {application.first_name} {application.last_name}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {application.admission_no}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-white">
                                                {courseLabels[application.course]}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {application.timing}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 dark:text-white">
                                                {application.email}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {application.contact}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[application.status]}`}>
                                                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {formatDate(application.created_at)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handleViewApplication(application)}
                                                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                                >
                                                    <FaEye className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleEditApplication(application)}
                                                    disabled={isUpdating}
                                                    className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 disabled:opacity-50"
                                                >
                                                    <FaEdit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteApplication(application)}
                                                    disabled={isDeleting}
                                                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                                                >
                                                    <FaTrash className="h-4 w-4" />
                                                </button>
                                                {application.status === 'pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => handleUpdateStatus(application.id, 'approved')}
                                                            disabled={isUpdatingStatus}
                                                            className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 disabled:opacity-50"
                                                            title="Approve"
                                                        >
                                                            <FaCheckCircle className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdateStatus(application.id, 'rejected')}
                                                            disabled={isUpdatingStatus}
                                                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                                                            title="Reject"
                                                        >
                                                            <FaTimesCircle className="h-4 w-4" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>

            {/* View Modal */}
            <ViewApplicationModal
                isOpen={showViewModal}
                onClose={() => setShowViewModal(false)}
                application={selectedApplication}
                courseLabels={courseLabels}
            />

            {/* Edit Modal */}
            <EditApplicationModal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                application={selectedApplication}
                formData={editFormData}
                setFormData={setEditFormData}
                onSave={handleSaveEdit}
                courseLabels={courseLabels}
                isLoading={isUpdating}
            />

            {/* Delete Modal */}
            <DeleteConfirmModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                application={selectedApplication}
                onConfirm={handleDeleteConfirm}
                isLoading={isDeleting}
            />
        </div>
    );
};

// View Application Modal Component
const ViewApplicationModal = ({ isOpen, onClose, application, courseLabels }) => {
    if (!application) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Application Details">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <FaUserCircle className="mr-2" />
                            Personal Information
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</label>
                                <p className="text-gray-900 dark:text-white">{application.first_name} {application.last_name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                                <p className="text-gray-900 dark:text-white">{application.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact</label>
                                <p className="text-gray-900 dark:text-white">{application.contact}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Aadhar Number</label>
                                <p className="text-gray-900 dark:text-white">{application.aadhar_number}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</label>
                                <p className="text-gray-900 dark:text-white">{new Date(application.dob).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
                                <p className="text-gray-900 dark:text-white">{application.gender === 'M' ? 'Male' : 'Female'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Higher Education</label>
                                <p className="text-gray-900 dark:text-white">{application.higher_education}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</label>
                                <p className="text-gray-900 dark:text-white">{application.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Course and Church Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <FaGraduationCap className="mr-2" />
                            Course Information
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Course</label>
                                <p className="text-gray-900 dark:text-white">{courseLabels[application.course]}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Timing</label>
                                <p className="text-gray-900 dark:text-white">{application.timing}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Admission Number</label>
                                <p className="text-gray-900 dark:text-white">{application.admission_no}</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mt-6">
                            <FaChurch className="mr-2" />
                            Church Information
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Priest Name</label>
                                <p className="text-gray-900 dark:text-white">{application.priest_name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Priest Contact</label>
                                <p className="text-gray-900 dark:text-white">{application.priest_contact}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Church Address</label>
                                <p className="text-gray-900 dark:text-white">{application.church_address}</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mt-6">
                            <FaFileDownload className="mr-2" />
                            Documents
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Personal Photo</label>
                                <div className="flex items-center space-x-2">
                                    <FaImage className="text-blue-500" />
                                    <a href={application.personal_photo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                        View Photo
                                    </a>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Certificate</label>
                                <div className="flex items-center space-x-2">
                                    <FaFilePdf className="text-red-500" />
                                    <a href={application.certificate} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

// Edit Application Modal Component
const EditApplicationModal = ({ isOpen, onClose, application, formData, setFormData, onSave, courseLabels }) => {
    if (!application) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit Application">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                        <select
                            name="status"
                            value={formData.status || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Course</label>
                        <select
                            name="course"
                            value={formData.course || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        >
                            {Object.entries(courseLabels).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <textarea
                        name="address"
                        value={formData.address || ''}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                </div>

                <div className="flex justify-end space-x-3">
                    <Button type="button" variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        Save Changes
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

// Delete Confirmation Modal Component
const DeleteConfirmModal = ({ isOpen, onClose, application, onConfirm }) => {
    if (!application) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Delete Application">
            <div className="text-center">
                <FaTrash className="mx-auto h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Delete Application
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Are you sure you want to delete the application for{' '}
                    <span className="font-semibold">{application.first_name} {application.last_name}</span>?
                    This action cannot be undone.
                </p>
                <div className="flex justify-center space-x-3">
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} className="bg-red-600 hover:bg-red-700">
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AdminPanel;
