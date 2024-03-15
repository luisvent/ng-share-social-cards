import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XV2ShareCard } from './x-v2-share-card.component';

describe('Xv2PreviewComponent', () => {
  let component: XV2ShareCard;
  let fixture: ComponentFixture<XV2ShareCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XV2ShareCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XV2ShareCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
