#!/bin/bash

# Database Setup Script for Doulos Theological Seminary
# This script sets up the database with initial data

echo "🚀 Setting up Doulos Theological Seminary Database..."

# Database configuration
DB_HOST="localhost"
DB_USER="dtsuser"
DB_PASS="2l#d$JEg9A&="
DB_NAME="doulostheologicalseminary"

# Check if MySQL is running
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed or not in PATH"
    exit 1
fi

# Create database if it doesn't exist
echo "📊 Creating database if it doesn't exist..."
mysql -h "$DB_HOST" -u root -p -e "CREATE DATABASE IF NOT EXISTS $DB_NAME;"

# Create user if it doesn't exist
echo "👤 Creating database user..."
mysql -h "$DB_HOST" -u root -p -e "CREATE USER IF NOT EXISTS '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASS';"
mysql -h "$DB_HOST" -u root -p -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'localhost';"
mysql -h "$DB_HOST" -u root -p -e "FLUSH PRIVILEGES;"

# Import database schema
echo "🗄️ Importing database schema..."
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < doulostheologicalseminary.sql

if [ $? -eq 0 ]; then
    echo "✅ Database setup completed successfully!"
    echo "📝 Database Details:"
    echo "   - Host: $DB_HOST"
    echo "   - Database: $DB_NAME"
    echo "   - User: $DB_USER"
    echo "   - Password: $DB_PASS"
    echo ""
    echo "🔑 Admin Login Credentials:"
    echo "   - Username: admin"
    echo "   - Password: admin123"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Update api/config.php with your database credentials"
    echo "2. Configure your web server to serve the API files"
    echo "3. Test the application form at your domain"
    echo "4. Access admin panel at /applications"
else
    echo "❌ Database setup failed!"
    exit 1
fi
