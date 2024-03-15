import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'slack-share-card',
  templateUrl: './slack-share-card.component.html',
  styleUrls: ['./slack-share-card.component.css']
})
export class SlackShareCard {

  @Input()
  metadata!: Metadata;

}
