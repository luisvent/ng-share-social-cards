import {Component, Input, OnInit} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'google-share-card',
  templateUrl: './google-share-card.component.html',
  styleUrls: ['./google-share-card.component.css']
})
export class GoogleShareCard implements OnInit{

  @Input()
  metadata!: Metadata;

  ngOnInit(): void {

  }
}
