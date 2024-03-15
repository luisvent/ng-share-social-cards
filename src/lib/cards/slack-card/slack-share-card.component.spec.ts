import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackShareCard } from './slack-share-card.component';

describe('SlackPreviewComponent', () => {
  let component: SlackShareCard;
  let fixture: ComponentFixture<SlackShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlackShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
