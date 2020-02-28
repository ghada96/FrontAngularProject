import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsampleComponent } from './chartsample.component';

describe('ChartsampleComponent', () => {
  let component: ChartsampleComponent;
  let fixture: ComponentFixture<ChartsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
