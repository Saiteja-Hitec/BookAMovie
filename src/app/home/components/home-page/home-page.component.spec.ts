import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  MatAutocompleteModule,
  MatMenuModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { MockComponent } from 'src/app/testing/mock-component';
import { HomeService } from '../../services/home.service';
import { By } from '@angular/platform-browser';

class MockHomeService {}
describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let homeService: HomeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [
        HomePageComponent,
        MockComponent({
          selector: 'app-movie-dropdowns',
          inputs: ['languageList', 'layout'],
          outputs: ['languageChange$', 'genreChange$']
        }),
        MockComponent({
          selector: 'app-movie-card',
          inputs: ['movie', 'theaterList', 'category']
        })
      ],
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
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule
      ],
      providers: [MatDatepickerModule, { provide: HomeService, useClass: MockHomeService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit tab event', () => {
    const spy = spyOn(component, 'tabChanged');
    component.tabChanged(2);
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('should call get language', () => {
    const spy = spyOn(component, 'getLanguage');
    component.getLanguage('en');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('en');
  });
});
