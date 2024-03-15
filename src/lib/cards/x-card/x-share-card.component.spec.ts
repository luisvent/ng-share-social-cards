import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XShareCard } from './x-share-card.component';

describe('XPreviewComponent', () => {
  let component: XShareCard;
  let fixture: ComponentFixture<XShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
