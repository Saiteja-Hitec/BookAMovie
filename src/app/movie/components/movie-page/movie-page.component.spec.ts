import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatDialog,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatDatepickerModule,
  MatSelectModule,
  MatIconModule,
  MatNativeDateModule,
  MatAutocompleteModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MockComponent } from 'src/app/testing/mock-component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoviePageComponent } from './movie-page.component';

export class MockDialog {
  open(p1, p2) {}
  closeAll() {}
}

class TestComponent {}

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;
  let dialog: MatDialog;
  //   let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({}), close: null });
  //   dialogRefSpyObj.componentInstance = { body: '' };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [MoviePageComponent],
      imports: [
        MatAutocompleteModule,

        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatCardModule,
        MatDatepickerModule,
        MatSelectModule,
        RouterModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule
      ],
      providers: [{ provide: MatDialog, useClass: MockDialog }, MatDatepickerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    dialog = TestBed.get(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call prebookopen method', () => {
    const spy = spyOn(component, 'preBookDialog');
    component.category = 'NA';
    component.checKToDialog();
    expect(spy).toHaveBeenCalled();
  });

  it('should check if else in track cast and crew', () => {});
});
