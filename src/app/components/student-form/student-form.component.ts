import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  studentId: number | null = null;
  isViewMode = false;
  isEditMode = false;
  loading = false;
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required]],
      birth_date: ['', [Validators.required]],
      is_active: [true]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const url = this.route.snapshot.url.join('/');
    
    if (id) {
      this.studentId = +id;
      this.isEditMode = url.includes('edit');
      this.isViewMode = url.includes('view');
      
      if (this.isViewMode) {
        this.studentForm.disable();
      }
      
      this.loadStudent();
    }
  }

  loadStudent(): void {
    if (this.studentId) {
      this.loading = true;
      this.studentService.getStudent(this.studentId).subscribe({
        next: (student: Student) => {
          this.studentForm.patchValue({
            name: student.name,
            city: student.city,
            address: student.address,
            birth_date: student.birth_date,
            is_active: student.is_active
          });
          this.loading = false;
        },
        error: (error: unknown) => {
          console.error('Error loading student:', error);
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.studentForm.valid && !this.isViewMode) {
      this.loading = true;
      const studentData = this.studentForm.value;

      if (this.isEditMode && this.studentId) {
        this.studentService.updateStudent(this.studentId, studentData).subscribe({
          next: () => {
            this.loading = false;
            this.router.navigate(['/students']);
          },
          error: (error: unknown) => {
            console.error('Error updating student:', error);
            this.loading = false;
          }
        });
      } else {
        this.studentService.createStudent(studentData).subscribe({
          next: () => {
            this.loading = false;
            this.router.navigate(['/students']);
          },
          error: (error: unknown) => {
            console.error('Error creating student:', error);
            this.loading = false;
          }
        });
      }
    }
  }

  onReset(): void {
    if (this.isViewMode) {
      this.router.navigate(['/students']);
    } else {
      this.studentForm.reset();
      this.studentForm.patchValue({ is_active: true });
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }

  getTitle(): string {
    if (this.isViewMode) return 'View Student';
    if (this.isEditMode) return 'Edit Student';
    return 'Add New Student';
  }

  getSubmitButtonText(): string {
    if (this.isEditMode) return 'Update';
    return 'Submit';
  }
}
