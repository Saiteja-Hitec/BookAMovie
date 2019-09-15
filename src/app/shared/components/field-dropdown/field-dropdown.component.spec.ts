import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDropdownComponent } from './field-dropdown.component';

describe('FieldDropdownComponent', () => {
  let component: FieldDropdownComponent;
  let fixture: ComponentFixture<FieldDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
