import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-content',
  templateUrl: './box-content.component.html',
  styleUrls: ['./box-content.component.scss']
})
export class BoxContentComponent {

  @Input()
  borderColour = 'black';

}
