import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name1: any;
  public fN: any;
  public lN: any;
  name = new FormControl("");

  gropingForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  updateName() {
    this.name1 = this.name.value;
  }
  updateFormgroup() {
    this.fN = this.gropingForm.controls["firstName"].value;
    this.lN = this.gropingForm.controls["lastName"].value;
  }
}
