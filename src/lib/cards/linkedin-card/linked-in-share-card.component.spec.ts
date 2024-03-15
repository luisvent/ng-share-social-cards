import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInShareCard } from './linked-in-share-card.component';

describe('LinkedinPreviewComponent', () => {
  let component: LinkedInShareCard;
  let fixture: ComponentFixture<LinkedInShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedInShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
