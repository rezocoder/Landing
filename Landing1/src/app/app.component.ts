import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'landing';
  fontFamily = "BPG Nino Mtavruli";

  language = 'geo';

  updateData(selectedLanguage: string) {
    this.language = selectedLanguage;
    this.fontFamily === "BPG Nino Mtavruli" && selectedLanguage != 'geo' ? this.fontFamily = 'Raleway' : this.fontFamily === "BPG Nino Mtavruli"  && selectedLanguage != 'eng';
    this.fontFamily === "Raleway" && selectedLanguage != 'eng' ? this.fontFamily = 'BPG Nino Mtavruli' : this.fontFamily === "Raleway"  && selectedLanguage != 'geo';
  }
}
