import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookShareCard } from './facebook-share-card.component';

describe('FacebookPreviewComponent', () => {
  let component: FacebookShareCard;
  let fixture: ComponentFixture<FacebookShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
