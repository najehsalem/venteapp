import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannieComponent } from './pannie.component';

describe('PannieComponent', () => {
  let component: PannieComponent;
  let fixture: ComponentFixture<PannieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PannieComponent]
    });
    fixture = TestBed.createComponent(PannieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
