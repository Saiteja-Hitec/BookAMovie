import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatDialog,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeShowComponent } from './change-show.component';
import { AdminService } from '../../services/admin.service';
import { of } from 'rxjs';

export class MockAdminService {
  searchMovie(val) {
    return of([]);
  }

  saveNowPlaying(p1, p2) {
    return of(true);
  }

  newTheater(data) {}
}

export class MockDialog {
  open() {
    return;
  }

  closeAll() {
    return;
  }
}

describe('AddTheaterComponent', () => {
  let component: ChangeShowComponent;
  let fixture: ComponentFixture<ChangeShowComponent>;
  let adminService: AdminService;
  let spy: jasmine.Spy;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeShowComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [{ provide: AdminService, useClass: MockAdminService }, { provide: MatDialog, useClass: MockDialog }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeShowComponent);
    component = fixture.componentInstance;
    adminService = TestBed.get(AdminService);
    dialog = TestBed.get(MatDialog);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new movie', () => {
    expect(component.nowShowing.length).toEqual(0);
    component.addMovie({ name: 'XYZ', id: 1 });
    expect(component.nowShowing[0]).toContain('XYZ');
  });

  it('should save', () => {
    const spy = spyOn(dialog, 'open');
    component.save();
    expect(spy).toHaveBeenCalled();
  });

  it('should clear all', () => {
    const spy = spyOn(dialog, 'closeAll');
    component.dialogOk();
    expect(spy).toHaveBeenCalled();
    expect(component.movieResult.length).toEqual(0);
  });
});
