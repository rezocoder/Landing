import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }
  @Input() selectedLanguage = '';

  ngOnInit(): void {
    setInterval(() => {

      if(window.innerWidth > 1200) {
        this.sliderPos -= (215 + 200);
        this.active += 1;

        if(this.active === 9) {
          this.active = 1;
          this.sliderPos = -100;
        };
      }
    }, 7000);
  }

  slides= [
    {id: 1,  dateGeo: '13 მაისი', dateEng: '13 May', cashback: '13%'},
    {id: 2,  dateGeo: '14 მაისი', dateEng: '14 May', cashback: '13%'},
    {id: 3,  dateGeo: '15 მაისი', dateEng: '15 May', cashback: '13%'},
    {id: 4,  dateGeo: '16 მაისი', dateEng: '16 May', cashback: '13%'},
    {id: 5,  dateGeo: '17 მაისი', dateEng: '17 May', cashback: '13%'},
    {id: 6,  dateGeo: '18 მაისი', dateEng: '18 May', cashback: '13%'},
    {id: 7,  dateGeo: '19 მაისი', dateEng: '19 May', cashback: '13%'},
    {id: 8,  dateGeo: '20 მაისი', dateEng: '20 May', cashback: '13%'},
    {id: 9,  dateGeo: '21 მაისი', dateEng: '21 May', cashback: '13%'},
    {id: 10, dateGeo: '22 მაისი', dateEng: '22 May', cashback: '13%'}
  ];

  ngAfterViewInit() {
    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.sliderPos = -80;
    }

    else if(window.innerWidth < 800 && window.innerWidth > 600) {
      this.sliderPos = -60;
    }

    else if(window.innerWidth < 600) {
      this.sliderPos = -310;
    }
  };


  onResize() {
    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.sliderPos = -80;
      this.active = 1;
    }

    else if(window.innerWidth < 800 && window.innerWidth > 600) {
      this.sliderPos = -60;
      this.active = 1;
    }

    else if(window.innerWidth < 600) {
      this.sliderPos = -310;
      this.active = 1;
    }

    else {
      this.sliderPos = -100;
      this.active = 1;
    }
  }
  
  active = 1;
  sliderPos = -100;
  slideRight() {
    
    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.sliderPos -= (180 + 160);
    }

    else if(window.innerWidth < 800 && window.innerWidth > 600) {
      this.sliderPos -= (150 + 80);
    }

    else if(window.innerWidth < 600) {
      this.sliderPos -= (100 + 200);
    }

    else {
      this.sliderPos -= (215 + 200);
    }
    this.active += 1;
    if(this.active === 9) {

      if(window.innerWidth < 992 && window.innerWidth > 800) {
        this.sliderPos = -80;
      }

      else if(window.innerWidth < 800 && window.innerWidth > 600) {
        this.sliderPos = -60;
      }

      else if(window.innerWidth < 600) {
        this.sliderPos = -310;
      }

      else {
        this.sliderPos = -100;
      }
      this.active = 1;
      
    };
  }

  slideLeft() {
    if(this.active != 1) {
      if(window.innerWidth < 992 && window.innerWidth > 800) {
        this.sliderPos += (180 + 160);
      }

      else if(window.innerWidth < 800 && window.innerWidth > 600) {
        this.sliderPos += (150 + 80);
      }

      else if(window.innerWidth < 600) {
        this.sliderPos += (100 + 200);
      }

      else {
        this.sliderPos += (215 + 200);
      }
      this.active -= 1;
    };
  }
}