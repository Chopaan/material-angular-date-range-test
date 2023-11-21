import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

/** @title Date range picker forms integration */
@Component({
  selector: 'date-range-picker-forms-example',
  templateUrl: 'date-range-picker-forms-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
  ],
})
export class DateRangePickerFormsExample {
  @ViewChild('startDateInput') startDateInput: ElementRef;
  @ViewChild('endDateInput') endDateInput: ElementRef;
  @ViewChild('picker', { read: ElementRef }) private datePicker: ElementRef;
  @ViewChild('pickerButton', { read: ElementRef })
  private datePickerButton: ElementRef;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onFocusOut(event: FocusEvent) {
    console.log(event);

    console.log(this.datePicker);
    console.log(this.datePickerButton);

    if (
      event.relatedTarget != null &&
      (this.startDateInput.nativeElement.contains(event.relatedTarget) ||
        this.endDateInput.nativeElement.contains(event.relatedTarget) ||
        this.datePicker.nativeElement.contains(event.relatedTarget) ||
        this.datePickerButton.nativeElement.contains(event.relatedTarget))
    ) {
      console.log("Don't change user input");
    } else {
      console.log('change user input!!!');
    }
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
