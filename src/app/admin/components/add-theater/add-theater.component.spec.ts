import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTheaterComponent } from './add-theater.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDialogModule, MatDialog, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockDialog } from '../change-show/change-show.component.spec';

describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTheaterComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: MatDialog, useClass: MockDialog }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
    dialog = TestBed.get(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on onsubmit call', () => {
    const spy = spyOn(component.addTheater, 'emit');
    let val = { tid: 1, name: 'F', city: 'UH', gLocation: 'POI', capacity: 2 };
    component.newTheater.setValue(val);
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(val);
  });

  it('should close all dialogs', () => {
    const spy = spyOn(dialog, 'closeAll');
    component.dialogOk();
    expect(spy).toHaveBeenCalled();
  });
});
