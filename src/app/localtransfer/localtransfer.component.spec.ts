import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltransferComponent } from './localtransfer.component';

describe('LocaltransferComponent', () => {
  let component: LocaltransferComponent;
  let fixture: ComponentFixture<LocaltransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaltransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaltransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
