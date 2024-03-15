import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'x-share-card',
  templateUrl: './x-share-card.component.html',
  styleUrls: ['./x-share-card.component.css']
})
export class XShareCard {

  @Input()
  metadata!: Metadata;


}
