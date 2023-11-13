import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private mascotasService: MascotasService) {}

  ngOnInit(): void {

    this.mascotasService.getCharacters().subscribe((data) => {
      this.mascotas = data.results;
      //console.log(this.mascotas);
    });
  }

}
