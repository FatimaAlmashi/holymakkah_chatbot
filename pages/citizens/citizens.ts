import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

// import { EnquiryComponent } from '../enquiry/enquiry.component';

@Component({
  selector: "page-citizens",
  templateUrl: "citizens.html"
})
export class CitizensPage {
  constructor(public navCtrl: NavController) {}
}

// openEnquiry() {
//   this.navCtrl.push(EnquiryComponent);
// }
