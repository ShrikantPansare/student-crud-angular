@echo off
REM Student CRUD Application Setup Script for Windows

echo Setting up Student CRUD Application...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed. Please install Python 3.8 or higher.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please install Node.js 16 or higher.
    pause
    exit /b 1
)

echo Creating virtual environment...
python -m venv venv

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Installing Python dependencies...
pip install -r requirements.txt

echo Setting up database...
echo Please create a PostgreSQL database named 'student_crud_db'
echo Update the database credentials in student_crud_backend/settings.py

echo Running Django migrations...
python manage.py makemigrations
python manage.py migrate

echo Creating superuser...
python manage.py createsuperuser

echo Installing Node.js dependencies...
npm install

echo Setup complete!
echo.
echo To run the application:
echo 1. Start Django backend: python manage.py runserver
echo 2. Start Angular frontend: ng serve
echo 3. Access the application at http://localhost:4200
pause
