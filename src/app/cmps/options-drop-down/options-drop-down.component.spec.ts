import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDropDownComponent } from './options-drop-down.component';

describe('OptionsDropDownComponent', () => {
  let component: OptionsDropDownComponent;
  let fixture: ComponentFixture<OptionsDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
