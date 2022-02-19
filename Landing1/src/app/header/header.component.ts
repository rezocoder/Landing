import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() updateData = new EventEmitter<string>();

  ngOnInit(): void {
  }

  headerStyle = "";
  flagsPosition = "";

  changeToEng() {
    this.flagsPosition = "change-to-eng";
  }

  changeToGeo() {
    this.flagsPosition = "change-to-geo";
  }


  @HostListener("document: scroll")
  scrollFunction() {
    if(document.documentElement.scrollTop > 10) {
      this.headerStyle = 'header__background';
    } else if(document.documentElement.scrollTop < 10) {
      this.headerStyle = '';
    }
  }

}
function scrollFunction() {
  throw new Error('Function not implemented.');
}


