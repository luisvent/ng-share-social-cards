import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'discord-share-card',
  templateUrl: './discord-share-card.component.html',
  styleUrls: ['./discord-share-card.component.css']
})
export class DiscordShareCard {

  @Input()
  metadata!: Metadata;

}
