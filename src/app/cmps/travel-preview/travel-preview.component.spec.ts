import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPreviewComponent } from './travel-preview.component';

describe('TravelPreviewComponent', () => {
  let component: TravelPreviewComponent;
  let fixture: ComponentFixture<TravelPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
