import { Doctor } from './../../domain/doctor';
import { DoctorsService } from './../../services/doctors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  data: Doctor[];
  width: number = 100;
  height: number = 50;

  constructor(private service: DoctorsService) { }

  ngOnInit() {
    this.service.getAllDoctors().subscribe(
      resp => this.data = resp,
      error => console.log('Attention, error: ' + error)
    );

  //   this.data = [
  //     {
  //         id: 1,
  //         lastName: 'Pitt',
  //         firstName: 'Brad',
  //         email: 'brad.pitt@gmail.com',
  //         gsmNumber: '+32495654585',
  //         // tslint:disable-next-line: max-line-length
  //         photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F75%2FBrad_Pitt_October_2014.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ABrad_Pitt_October_2014.jpg&docid=7597jNmF0qOeNM&tbnid=vaxMgY1IU5Qu8M%3A&vet=10ahUKEwj88e30u77jAhWCzaQKHdKYA7kQMwhUKBIwEg..i&w=3482&h=3300&bih=920&biw=1920&q=brad%20pitt&ved=0ahUKEwj88e30u77jAhWCzaQKHdKYA7kQMwhUKBIwEg&iact=mrc&uact=8',
  //         speciality: 'Psychiatre'
  //     },
  //     {
  //         id: 4,
  //         lastName: 'Streep',
  //         firstName: 'Meryl',
  //         email: 'meryl.streep@gmail.com',
  //         gsmNumber: '+32496155685',
  //         // tslint:disable-next-line: max-line-length
  //         photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F46%2FMeryl_Streep_December_2018.jpg%2F435px-Meryl_Streep_December_2018.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AMeryl_Streep_December_2018.jpg&docid=64hcmkc7Q-SyzM&tbnid=i-iZgE_9ghvejM%3A&vet=10ahUKEwii5MW7v77jAhVPzaQKHbjOCs8QMwhIKAYwBg..i&w=435&h=600&itg=1&bih=920&biw=1920&q=meryl%20streep&ved=0ahUKEwii5MW7v77jAhVPzaQKHbjOCs8QMwhIKAYwBg&iact=mrc&uact=8',
  //         speciality: 'Dermatologue'
  //     },
  //     {
  //         id: 2,
  //         lastName: 'Clooney',
  //         firstName: 'Georges',
  //         email: 'georges.clooney@gmail.com',
  //         gsmNumber: '+32495656485',
  //         // tslint:disable-next-line: max-line-length
  //         photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F73%2FGeorge_Clooney_66%25C3%25A8me_Festival_de_Venise_%2528Mostra%2529_3Alt1.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUp_in_the_Air_(2009_film)&docid=7MPJQPhniQBV5M&tbnid=_yerjEsxqGa2_M%3A&vet=10ahUKEwianu7WvL7jAhXJ-qQKHSf6CecQMwhIKAYwBg..i&w=991&h=1155&bih=920&biw=1920&q=georges%20clooney&ved=0ahUKEwianu7WvL7jAhXJ-qQKHSf6CecQMwhIKAYwBg&iact=mrc&uact=8',
  //         speciality: 'Dentiste'
  //     },
  //     {
  //         id: 3,
  //         lastName: 'Roberts',
  //         firstName: 'Julia',
  //         email: 'julia.roberts@gmail.com',
  //         gsmNumber: '+32496156485',
  //         photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Julia_Roberts_2011_Shankbone_3.JPG',
  //         speciality: 'Médecin généraliste'
  //     }
  // ]
  }

}
