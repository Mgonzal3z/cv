import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpComponent } from './xp.component';

describe('XpComponent', () => {
  let component: XpComponent;
  let fixture: ComponentFixture<XpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XpComponent]
    });
    fixture = TestBed.createComponent(XpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
