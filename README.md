# Doulos Theological Seminary - Application Management System

A comprehensive web application for managing student applications to Doulos Theological Seminary, Thiruvalla. Built with React 19, PHP 8.0+, and MySQL 8.0+.

## 🚀 Features

### Student Application System
- **Online Application Form**: Comprehensive form with validation
- **Course Selection**: Multiple theology and counseling programs
- **File Upload**: Personal photo and certificate upload
- **Real-time Validation**: Frontend and backend validation
- **Application Tracking**: Unique admission numbers for tracking

### Admin Panel
- **Dashboard**: Overview statistics and analytics
- **Application Management**: View, edit, approve/reject applications
- **Search & Filter**: Advanced filtering by status, course, and search terms
- **Export Functionality**: CSV export of application data
- **User Management**: Admin authentication and role-based access

### Security Features
- **Input Validation**: Comprehensive input sanitization
- **SQL Injection Prevention**: Prepared statements and parameterized queries
- **File Upload Security**: Type validation and size limits
- **Authentication**: Secure admin login with password hashing
- **CORS Protection**: Proper cross-origin resource sharing

## 🛠️ Technology Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Comprehensive icon library
- **React Router**: Client-side routing

### Backend
- **PHP 8.0+**: Server-side scripting
- **MySQL 8.0+**: Relational database management
- **RESTful APIs**: Clean API architecture
- **File Upload Handling**: Secure file processing

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting
- **Node.js**: JavaScript runtime for development

## 📋 Quick Start

### Prerequisites
- PHP 8.0 or higher
- MySQL 8.0 or higher
- Node.js 18.0 or higher
- Web server (Apache/Nginx)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dtsthiruvalla/doulos-theological-seminary.git
   cd doulos-theological-seminary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up database**
   ```bash
   # Make setup script executable
   chmod +x setup_database.sh
   
   # Run database setup
   ./setup_database.sh
   ```

4. **Configure API**
   - Update `api/config.php` with your database credentials
   - Set up file upload permissions

5. **Build and run**
   ```bash
   # Development
   npm run dev
   
   # Production build
   npm run build
   ```

### Admin Access
- **URL**: `/applications`
- **Username**: `admin`
- **Password**: `admin123`

## 🏗️ Database Schema

### Tables
- **dts_courses**: Course information and details
- **dts_course_timings**: Available timings for each course
- **dts_applications**: Student application data
- **dts_admin_users**: Admin user management
- **dts_students**: Approved student records

### Relationships
- Applications linked to course timings
- Course timings linked to courses
- Students created from approved applications

## 📚 API Endpoints

### Public APIs
- `POST /api/submit-application.php` - Submit new application
- `GET /api/get-courses.php` - Get available courses

### Admin APIs
- `GET /api/get-applications.php` - Get all applications
- `POST /api/update-application.php` - Update application
- `DELETE /api/delete-application.php` - Delete application
- `POST /api/update-application-status.php` - Update status

## 🔐 Security Implementation

### Input Validation
- **Frontend**: Real-time validation with regex patterns
- **Backend**: Server-side sanitization and validation
- **Database**: Prepared statements and parameter binding

### File Upload Security
- **Type Validation**: Allowed file types only
- **Size Limits**: 500KB for photos, 2MB for certificates
- **Secure Storage**: Files stored outside web root

### Authentication
- **Password Hashing**: BCrypt with salt
- **Session Management**: Secure session handling
- **Role-based Access**: Different permission levels

## 📱 User Interface

### Application Form
- **Multi-step Process**: Organized form sections
- **Real-time Validation**: Immediate feedback
- **File Upload**: Drag & drop or click to upload
- **Responsive Design**: Mobile-friendly interface

### Admin Dashboard
- **Statistics Cards**: Visual overview of applications
- **Data Table**: Sortable and filterable table
- **Modal Windows**: Edit and view applications
- **Export Tools**: CSV download functionality

## 🚀 Deployment

### Production Setup
1. **Server Requirements**
   - PHP 8.0+ with extensions
   - MySQL 8.0+ database
   - Web server (Apache/Nginx)
   - SSL certificate

2. **Configuration**
   - Database credentials
   - File permissions
   - Security headers
   - SSL setup

3. **Monitoring**
   - Error logging
   - Performance monitoring
   - Backup procedures

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📊 Application Workflow

1. **Student Submission**
   - Fill out application form
   - Upload required documents
   - Receive admission number

2. **Admin Review**
   - View application details
   - Verify documents
   - Approve or reject

3. **Status Updates**
   - Email notifications
   - Application tracking
   - Student record creation

## 🔧 Development

### Project Structure
```
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Main application pages
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React context providers
│   └── config/            # Configuration files
├── api/                   # PHP backend APIs
├── public/                # Static assets
└── docs/                  # Documentation
```

### Key Components
- **ApplicationForm.jsx**: Student application form
- **AdminPanel.jsx**: Admin dashboard
- **AdminLogin.jsx**: Authentication component
- **Modal.jsx**: Reusable modal component

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Documentation

- [Admin Panel Documentation](ADMIN_PANEL_DOCUMENTATION.md)
- [Security Implementation](SECURITY_IMPLEMENTATION.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [API Documentation](API_DOCUMENTATION.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

### Contact Information
- **Website**: [dtsthiruvalla.com](https://dtsthiruvalla.com)
- **Email**: dts.thiruvalla@gmail.com
- **Phone**: +91 9630426566, +91 9847599603, +91 9447515704

### Technical Support
- **GitHub Issues**: Report bugs and feature requests
- **Email**: admin@dtsthiruvalla.com
- **Documentation**: Comprehensive guides available

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Doulos Theological Seminary**: For the opportunity to build this system
- **React Team**: For the excellent framework
- **PHP Community**: For the robust server-side language
- **Open Source Community**: For the amazing tools and libraries

---

**Built with ❤️ for Doulos Theological Seminary, Thiruvalla**

*For more information, visit [dtsthiruvalla.com](https://dtsthiruvalla.com)*
