import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaldComponent } from './wald.component';

describe('WaldComponent', () => {
  let component: WaldComponent;
  let fixture: ComponentFixture<WaldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
