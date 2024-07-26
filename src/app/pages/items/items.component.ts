import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  public Item = {
    name: "",
    rentalPerDay: undefined,
    finePerDay: undefined,
    availabilty: "true"
  }

  constructor(private http: HttpClient) { }

  addItem() {
    this.http.post("http://localhost:8080/hardware-item", this.Item).subscribe(res => {
      console.log(res);

      Swal.fire({
        title: "Item saved successfully!",
        text: "Done!",
        icon: "success"
      });

    })
  }

  deleteItem() {

  }
}
