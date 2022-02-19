import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor() { }
  @Input() selectedLanguage = '';
  ngOnInit(): void {
  }


  questions = [  

      {
        id: 1, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "რა არის EGT FREESPINS?",
          eng: "What is EGT FREESPINS?"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 2, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "როდის იწყება აქცია?",
          eng: "When does the promotion start?"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },

      {
        id: 3, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "ვის შეუძლია აქციაში მონაწილეობის მიღება?",
          eng: "Who can take part in the action?"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 4, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "რომელი თამაშები მონაწილეობს აქციაში?",
          eng: "Which games are participating in the promotion?"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },


      {
        id: 5, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "როდის დამერიცხება ფრისპინები?",
          eng: "When will I receive the Frispins?"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 6, show: false, arrow: "../../assets/images/arrow_down.png", 
        question:  {
          geo: "დამატებითი წესები და პირობები",
          eng: "Additional terms and conditions"
        },
        answer:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },


  ]

  //show = false;
  showContent(id: number) {
    this.questions[id - 1].arrow === "../../assets/images/arrow_down.png" ? this.questions[id - 1].arrow = "../../assets/images/arrow_up.png" : this.questions[id - 1].arrow = "../../assets/images/arrow_down.png";
    this.questions[id - 1].show = !this.questions[id - 1].show;
  }
}
