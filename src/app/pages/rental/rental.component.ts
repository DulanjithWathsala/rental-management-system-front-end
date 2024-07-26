import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  public itemIds = {}
  public customerIds = {}

  constructor(private http: HttpClient) {
    this.loadIds();
  }


  loadIds() {
    this.http.get("http://localhost:8080/hardware-item/retrieve-all-ids").subscribe(res => {
      this.itemIds = res;
    })

    this.http.get("http://localhost:8080/customer/retrieve-all-ids").subscribe(res => {
      this.customerIds = res;
    })
  }
}
