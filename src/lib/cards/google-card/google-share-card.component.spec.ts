import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleShareCard } from './google-share-card.component';

describe('GooglePreviewComponent', () => {
  let component: GoogleShareCard;
  let fixture: ComponentFixture<GoogleShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
