import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficebearersComponent } from './officebearers.component';

describe('OfficebearersComponent', () => {
  let component: OfficebearersComponent;
  let fixture: ComponentFixture<OfficebearersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficebearersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficebearersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
