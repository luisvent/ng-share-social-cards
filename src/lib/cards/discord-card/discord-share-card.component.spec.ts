import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordShareCard } from './discord-share-card.component';

describe('DiscordPreviewComponent', () => {
  let component: DiscordShareCard;
  let fixture: ComponentFixture<DiscordShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
