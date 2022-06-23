import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  seatArray = ['FIRST-CLASS', 'SECOND-CLASS', 'AC-CLASS', 'BALCONY'];
  addForm!: FormGroup;
  showId!: number;
  bookingDetails!: Booking;
  bookingId!: number;
  constructor(
    private _bookingService: BookingService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let sId = map.get('id');
      if (sId) this.showId = parseInt(sId);
    });
    this.addForm = new FormGroup({
      bookingDate: new FormControl('', [Validators.required]),
      seatType: new FormControl('', [Validators.required]),
      totalSeats: new FormControl('', [Validators.required]),
    });
  }

  addBooking = (addForm: FormGroup) => {
    let booking = addForm.value;
    this._bookingService.addBooking(booking, this.showId).subscribe({
      next: (data) => (this.bookingDetails = data),
      complete: () => console.log(this.bookingDetails),
    });
    alert('Movie is Booked Successfully');
  };

  // durationInSeconds = 5;
  // openSnackBar() {
  //   this._snackBar.openFromComponent(BookingComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
}
