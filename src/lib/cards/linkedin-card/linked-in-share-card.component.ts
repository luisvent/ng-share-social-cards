import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'linkedin-share-card',
  templateUrl: './linked-in-share-card.component.html',
  styleUrls: ['./linked-in-share-card.component.css']
})
export class LinkedInShareCard {

  @Input()
  metadata!: Metadata;

}
