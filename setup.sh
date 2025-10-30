#!/bin/bash

# Student CRUD Application Setup Script

echo "Setting up Student CRUD Application..."

# Check if Python is installed
if ! command -v python &> /dev/null; then
    echo "Python is not installed. Please install Python 3.8 or higher."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "PostgreSQL is not installed. Please install PostgreSQL."
    exit 1
fi

echo "Creating virtual environment..."
python -m venv venv

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Setting up database..."
echo "Please create a PostgreSQL database named 'student_crud_db'"
echo "Update the database credentials in student_crud_backend/settings.py"

echo "Running Django migrations..."
python manage.py makemigrations
python manage.py migrate

echo "Creating superuser..."
python manage.py createsuperuser

echo "Installing Node.js dependencies..."
npm install

echo "Setup complete!"
echo ""
echo "To run the application:"
echo "1. Start Django backend: python manage.py runserver"
echo "2. Start Angular frontend: ng serve"
echo "3. Access the application at http://localhost:4200"
