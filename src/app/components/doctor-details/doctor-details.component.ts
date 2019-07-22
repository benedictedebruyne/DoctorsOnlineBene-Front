import { CartService } from './../../services/cart.service';
import { DoctorsService } from './../../services/doctors.service';
import { Doctor } from './../../domain/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  pageTitle: string = 'Doctor Detail';
  doctor?: Doctor;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private doctorsService: DoctorsService,
              private cartService: CartService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let id = +params['id'];
        console.log('Récupérer l\'id '+id);
        // The following call will run synchronously
        this.getDoctor(id);
      });
  }
  getDoctor(id: number) {
    this.doctorsService.getDoctorById(id)
    .subscribe(arg => this.doctor = arg,
      err => console.log('ATTENTION, il y a eu l\'erreur: ' + err));
  }
  onBack(): void {
    this.router.navigate(['/list']);
  }
  addToCart() {
    this.cartService.addToCart(this.doctor);
    this.router.navigate(['/list']); // Programmatic navigation
    }
}
