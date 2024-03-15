import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'facebook-share-card',
  templateUrl: './facebook-share-card.component.html',
  styleUrls: ['./facebook-share-card.component.css']
})
export class FacebookShareCard {

  @Input()
  metadata!: Metadata;

}
