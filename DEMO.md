# Student CRUD Application - Demo Script

## Overview
This document provides a step-by-step guide to demonstrate the Student CRUD application functionality.

## Prerequisites
- Django backend running on http://localhost:8000
- Angular frontend running on http://localhost:4200
- PostgreSQL database configured

## Demo Steps

### 1. Access the Application
- Open browser and navigate to http://localhost:4200
- You should see the "Student Management System" header
- The main page shows "List of Students" with an "Add New Student" button

### 2. Add New Student (Create Operation)
- Click the "Add New Student" button
- Fill in the form with the following sample data:
  - **Student Name**: John Doe
  - **City**: New York
  - **Address**: 123 Main Street, Apt 4B, New York, NY 10001
  - **Birth Date**: 1995-05-15
  - **Status**: Active (toggle switch)
- Click "Submit" button
- Verify the student appears in the list

### 3. View Student Details (Read Operation)
- In the student list, click the eye icon (👁️) in the Actions column
- Verify all student details are displayed correctly
- Form should be disabled (read-only mode)
- Click "Back" button to return to list

### 4. Edit Student (Update Operation)
- In the student list, click the edit icon (✏️) in the Actions column
- Modify some fields:
  - Change **Student Name** to "John Smith"
  - Change **City** to "Los Angeles"
  - Update **Address** to "456 Oak Avenue, Los Angeles, CA 90210"
- Click "Update" button
- Verify changes are reflected in the list

### 5. Delete Student (Delete Operation)
- In the student list, click the delete icon (🗑️) in the Actions column
- Confirm the deletion in the popup dialog
- Verify the student is removed from the list

### 6. Form Validation Testing
- Click "Add New Student" button
- Try to submit the form without filling required fields
- Verify validation messages appear:
  - "Name is required"
  - "City is required"
  - "Address is required"
  - "Birth date is required"
- Fill in all required fields and submit

### 7. Additional Students
Add more students with different data:
- **Student 2**:
  - Name: Jane Smith
  - City: Chicago
  - Address: 789 Pine Street, Chicago, IL 60601
  - Birth Date: 1998-08-22
  - Status: Inactive
- **Student 3**:
  - Name: Mike Johnson
  - City: Houston
  - Address: 321 Elm Drive, Houston, TX 77001
  - Birth Date: 1992-12-10
  - Status: Active

### 8. List View Features
- Verify all students are displayed in the table
- Check that status shows "Active" or "Inactive" with appropriate colors
- Verify birth dates are formatted correctly
- Test the action buttons for each student

### 9. Single Page Application (SPA) Behavior
- Verify that no page refreshes occur during any operation
- Check that the URL changes appropriately for different views
- Confirm that browser back/forward buttons work correctly
- Verify that form submissions don't cause full page reloads

### 10. Responsive Design
- Test the application on different screen sizes
- Verify that the layout adapts properly
- Check that all buttons and forms are accessible

## API Testing (Optional)
You can also test the API endpoints directly using tools like Postman or curl:

### GET All Students
```bash
curl http://localhost:8000/api/students/
```

### POST New Student
```bash
curl -X POST http://localhost:8000/api/students/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "city": "Boston",
    "address": "123 Test Street",
    "birth_date": "2000-01-01",
    "is_active": true
  }'
```

### GET Specific Student
```bash
curl http://localhost:8000/api/students/1/
```

### PUT Update Student
```bash
curl -X PUT http://localhost:8000/api/students/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Student",
    "city": "Seattle",
    "address": "456 Updated Avenue",
    "birth_date": "1999-12-31",
    "is_active": false
  }'
```

### DELETE Student
```bash
curl -X DELETE http://localhost:8000/api/students/1/
```

## Expected Results
- All CRUD operations work correctly
- Form validation prevents invalid submissions
- No page refreshes occur during operations
- Data persists between sessions
- UI is responsive and user-friendly
- API returns proper JSON responses

## Troubleshooting
- If backend is not running: `python manage.py runserver`
- If frontend is not running: `ng serve`
- If database errors occur: Check PostgreSQL connection and run migrations
- If CORS errors occur: Verify CORS settings in Django settings.py
