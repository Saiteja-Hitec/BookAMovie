import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatDialogModule, MatDialog, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AdminService } from '../../services/admin.service';
import { MockAdminService } from '../../components/change-show/change-show.component.spec';
import { MockComponent } from 'src/app/testing/mock-component';
import { Store } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { of } from 'rxjs';

class MockStore {
  select() {
    return of([]);
  }
  dispatch() {}
}

describe('Admin Component', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let adminService: AdminService;
  let store: Store<MovieState.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        MockComponent({
          selector: 'app-change-show',
          inputs: ['theaterList']
        }),
        MockComponent({
          selector: 'app-add-theater',
          outputs: ['addTheater']
        })
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule
      ],
      providers: [{ provide: AdminService, useClass: MockAdminService }, { provide: Store, useClass: MockStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    adminService = TestBed.get(AdminService);
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call new theater', () => {
    const spy = spyOn(adminService, 'newTheater');
    component.addTheater({ name: 'X' });
    expect(spy).toHaveBeenCalled();
  });
});
