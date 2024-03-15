# Social Share Cards for Angular

[![NPM](https://nodei.co/npm/ng-share-social-cards.png)](https://www.npmjs.com/package/ng-share-social-cards/)


This is an Angular library that provides pre-built share card components for various social media platforms. The library receives an object containing metadata for the content being shared and generates platform-specific share cards accordingly.

<p align="center">
  <img src="docs/preview.png" alt="Sublime's custom image"/>
</p>

## Installation

Install the package via npm:

```shell
npm install ng-share-social-cards
```
## Usage

Import the `SocialShareCardsModule` into your Angular module:

```typescript
import { ShareSocialCardsModule } from 'social-share-cards-angular';

@NgModule({
  imports: [
    // ...
    ShareSocialCardsModule
  ]
})
export class AppModule { }
```
In your component, import the share card components and provide the required metadata:

import { Component } from '@angular/core';
import { DiscordShareCard, FacebookShareCard, GoogleShareCard, LinkedInShareCard, PinterestShareCard, SlackShareCard } from 'social-share-cards-angular';

```typescript
import { Component } from '@angular/core';
import { DiscordShareCard, FacebookShareCard, GoogleShareCard, LinkedInShareCard, PinterestShareCard, SlackShareCard } from 'ng-share-social-cards';

@Component({
  selector: 'app-share',
  template: `
    <discord-share-card [metadata]="metadata"></discord-share-card>
    <facebook-share-card [metadata]="metadata"></facebook-share-card>
    <google-share-card [metadata]="metadata"></google-share-card>
    <linkedin-share-card [metadata]="metadata"></linkedin-share-card>
    <pinterest-share-card [metadata]="metadata"></pinterest-share-card>
    <x-share-card [metadata]="metadata"></x-share-card>
    <xv2-share-card [metadata]="metadata"></xv2-share-card>
    <slack-share-card [metadata]="metadata"></slack-share-card>
  `
})
export class ShareComponent {
  metadata = {
    title: 'My Content Title',
    author: 'John Doe',
    favUrl: 'https://example.com/favicon.ico',
    url: 'https://example.com/my-content',
    description: 'This is a description of my content.',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    imgUrl: 'https://example.com/content-image.png'
  };
}
```
## Metadata Object

The library expects an object of type `Metadata` with the following properties:

- `title` (string): The title of the content being shared.
- `author` (string): The author of the content.
- `favUrl` (string): The URL of the favicon associated with the content.
- `url` (string): The URL of the content being shared.
- `description` (string): A description of the content.
- `keywords` (string[]): An array of keywords related to the content.
- `imgUrl` (string): The URL of the image associated with the content.

## Components

The library provides the following share card components:

- `DiscordShareCard`
- `FacebookShareCard`
- `GoogleShareCard`
- `LinkedInShareCard`
- `PinterestShareCard`
- `SlackShareCard`
- `XShareCard`
- `XV2ShareCard`

Each component accepts the `metadata` object as an input property and renders the share card based on the provided metadata.

## License

This library is licensed under the MIT License.

****
