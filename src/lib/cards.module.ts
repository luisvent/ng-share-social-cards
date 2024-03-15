import { NgModule } from '@angular/core';
import {DiscordShareCard} from "./cards/discord-card/discord-share-card.component";
import {FacebookShareCard} from "./cards/facebook-card/facebook-share-card.component";
import {GoogleShareCard} from "./cards/google-card/google-share-card.component";
import {LinkedInShareCard} from "./cards/linkedin-card/linked-in-share-card.component";
import {PinterestShareCard} from "./cards/pinterest-card/pinterest-share-card.component";
import {SlackShareCard} from "./cards/slack-card/slack-share-card.component";
import {XShareCard} from "./cards/x-card/x-share-card.component";
import {XV2ShareCard} from "./cards/xv2-card/x-v2-share-card.component";

@NgModule({
  declarations: [
    DiscordShareCard,
    FacebookShareCard,
    GoogleShareCard,
    LinkedInShareCard,
    PinterestShareCard,
    SlackShareCard,
    XShareCard,
    XV2ShareCard
  ],
  exports: [
    DiscordShareCard,
    FacebookShareCard,
    GoogleShareCard,
    LinkedInShareCard,
    PinterestShareCard,
    SlackShareCard,
    XShareCard,
    XV2ShareCard
  ]
})
export class ShareSocialCardsModule { }
