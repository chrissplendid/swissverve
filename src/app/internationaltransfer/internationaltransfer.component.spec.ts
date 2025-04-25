import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaltransferComponent } from './internationaltransfer.component';

describe('InternationaltransferComponent', () => {
  let component: InternationaltransferComponent;
  let fixture: ComponentFixture<InternationaltransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationaltransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationaltransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
