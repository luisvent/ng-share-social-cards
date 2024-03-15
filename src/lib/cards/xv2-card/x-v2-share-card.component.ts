import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'xv2-share-card',
  templateUrl: './x-v2-share-card.component.html',
  styleUrls: ['./x-v2-share-card.component.css']
})
export class XV2ShareCard {

  @Input()
  metadata!: Metadata;

}
