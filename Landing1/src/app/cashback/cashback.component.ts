import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.scss']
})
export class CashbackComponent implements OnInit {

  constructor() { }
  @Input() selectedLanguage = '';

  ngOnInit(): void {
  }


  cashbackHeader = { 
    geo: "<h2>მიიღე <span>გარანტირებული 10%</span> CASHBACK <br>  და გაზარდე 1%-ით ყოველდღე!</h2>",
    eng: "<h2>Get a <span>Guaranteed 10%</span> CASHBACK <br> And increase it by 1% every day!</h2>"
  }
  equalText1 = {
    geo: "ყოველდღე დატრიალებული",
    eng: "Bet every day"
}
  equalText2 = {
    geo: "ქეშბექი",
    eng: "Cashback"
  }
  price = {
    geo: "250ლ",
    eng: "250Gel"
  }
  secondPrice = "+1%";
}
