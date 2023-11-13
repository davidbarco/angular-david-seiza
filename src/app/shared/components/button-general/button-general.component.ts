import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-general',
  templateUrl: './button-general.component.html',
  styleUrls: ['./button-general.component.css']
})
export class ButtonGeneralComponent {
  @Input() disabled: boolean = false;
  @Input() processing: boolean = false;

}
