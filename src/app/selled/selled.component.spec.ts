import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelledComponent } from './selled.component';

describe('SelledComponent', () => {
  let component: SelledComponent;
  let fixture: ComponentFixture<SelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
