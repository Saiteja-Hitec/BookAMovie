import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MaterialModule } from '../material.module';
import {
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SeatReservationModalComponent } from './components/modals/seat-reservation-modal/seat-reservation-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDropdownsComponent } from './movie-dropdowns/movie-dropdowns.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import { PaymentBookingComponent } from './components/payment-booking/payment-booking.component';
import { SortMoviePipe } from './pipes/sort-movie.pipe';
import { HomeFilterPipe } from './pipes/home-filter.pipe';
import { PreBookingComponent } from './components/modals/pre-booking/pre-booking.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldDropdownComponent } from './components/field-dropdown/field-dropdown.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { LogService } from './services/logger.service';
@NgModule({
  declarations: [
    MovieBookingComponent,
    SeatReservationModalComponent,
    MovieDropdownsComponent,
    ConfirmationModalComponent,
    PaymentBookingComponent,
    SortMoviePipe,
    HomeFilterPipe,
    PreBookingComponent,
    FieldInputComponent,
    FieldDropdownComponent,
    ToasterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    ScrollingModule
  ],
  exports: [
    MovieBookingComponent,
    SeatReservationModalComponent,
    MovieDropdownsComponent,
    SortMoviePipe,
    HomeFilterPipe,
    PreBookingComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ScrollingModule,
    FieldInputComponent,
    ToasterComponent
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }, LogService],
  entryComponents: [ConfirmationModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
