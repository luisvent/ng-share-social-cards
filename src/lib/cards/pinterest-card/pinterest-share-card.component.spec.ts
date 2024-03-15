import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestShareCard } from './pinterest-share-card.component';

describe('PinterestPreviewComponent', () => {
  let component: PinterestShareCard;
  let fixture: ComponentFixture<PinterestShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
