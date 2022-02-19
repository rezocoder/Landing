import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logoComponent } from './logo.component';

describe('logoComponent', () => {
  let component: logoComponent;
  let fixture: ComponentFixture<logoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ logoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(logoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
