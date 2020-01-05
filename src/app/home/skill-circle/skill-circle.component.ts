import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-skill-circle",
  templateUrl: "./skill-circle.component.html",
  styleUrls: ["./skill-circle.component.scss"]
})
export class SkillCircleComponent implements OnInit {
  @Input() skillname: string;
  constructor() {}

  ngOnInit() {}
}
