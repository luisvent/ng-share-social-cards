import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'pinterest-share-card',
  templateUrl: './pinterest-share-card.component.html',
  styleUrls: ['./pinterest-share-card.component.css']
})
export class PinterestShareCard {

  @Input()
  metadata!: Metadata;

}
