import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptotransferComponent } from './cryptotransfer.component';

describe('CryptotransferComponent', () => {
  let component: CryptotransferComponent;
  let fixture: ComponentFixture<CryptotransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptotransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptotransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
