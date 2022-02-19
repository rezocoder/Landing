import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor() { }
  @Input() selectedLanguage = '';

  ngOnInit(): void {
  }

  offersContent = [
    {id: 1, img: "../../assets/images/offer-icon-1.png", geoDescription: "დაატრიალე ნებისმიერი სლოტი", engDescription: "Spin any slot"},
    {id: 2, img: "../../assets/images/offer_icon2.png", geoDescription: "გაზარდე შენი ქეშბექი 40%-მდე", engDescription: "Increase your cashback to 40%"},
    {id: 3, img: "../../assets/images/offer_icon3.png", geoDescription: "დაიბრუნე თანხა ყოველდღე", engDescription: "Get your money back every day"},
  ];
}