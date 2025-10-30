# Student CRUD Application

A full-stack web application for managing student records with Create, Read, Update, and Delete (CRUD) operations.

## Tech Stack

- **Frontend**: Angular 17, TypeScript, CSS
- **Backend**: Django 4.2, Python
- **Database**: PostgreSQL
- **API**: Django REST Framework

## Features

- **Student Management**: Add, view, edit, and delete student records
- **Form Validation**: Client-side and server-side validation
- **Single Page Application**: No page refreshes during operations
- **Responsive Design**: Clean and modern UI
- **RESTful API**: Function-based views with JSON responses

## Student Fields

- **Student Name**: Text field (max 100 characters)
- **City**: Dropdown selection
- **Address**: Textarea field
- **Birth Date**: Date picker
- **Is Active**: Toggle switch (boolean)

## Project Structure

```
├── src/                          # Angular frontend
│   ├── app/
│   │   ├── components/           # Angular components
│   │   ├── models/               # TypeScript interfaces
│   │   ├── services/             # API services
│   │   └── ...
├── student_crud_backend/         # Django backend
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── students/                     # Django app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   └── urls.py
├── requirements.txt
└── manage.py
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- PostgreSQL
- Angular CLI
- pip

### Backend Setup (Django)

1. **Create virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup PostgreSQL database**:
   - Create database: `student_crud_db`
   - Update database credentials in `student_crud_backend/settings.py`

4. **Run migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser** (optional):
   ```bash
   python manage.py createsuperuser
   ```

6. **Start Django server**:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (Angular)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Angular development server**:
   ```bash
   ng serve
   ```

3. **Access the application**:
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:8000/api/
   - Django Admin: http://localhost:8000/admin/

## API Endpoints

- `GET /api/students/` - List all students
- `POST /api/students/` - Create new student
- `GET /api/students/{id}/` - Get student by ID
- `PUT /api/students/{id}/` - Update student
- `DELETE /api/students/{id}/` - Delete student

## Usage

1. **List View**: View all students in a table format
2. **Add Student**: Click "Add New Student" button
3. **Edit Student**: Click edit icon (✏️) in the actions column
4. **View Student**: Click view icon (👁️) in the actions column
5. **Delete Student**: Click delete icon (🗑️) in the actions column

## Development Notes

- All operations are handled within the same view (SPA behavior)
- Form validation includes required field checks
- API responses are in JSON format
- CORS is configured for local development
- Function-based views are used for API endpoints

## Testing

- Test all CRUD operations
- Verify form validation
- Check responsive design
- Ensure no page refreshes during operations

## Deployment

For production deployment:
1. Update `ALLOWED_HOSTS` in settings.py
2. Set `DEBUG = False`
3. Configure production database
4. Update CORS settings
5. Build Angular app: `ng build --prod`
6. Serve static files with Django or nginx
