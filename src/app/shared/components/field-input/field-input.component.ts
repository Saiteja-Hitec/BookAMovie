import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() config: FieldConfig;
  constructor() {}

  ngOnInit() {}
}
