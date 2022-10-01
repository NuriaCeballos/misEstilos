import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiApComponent } from './mi-ap.component';

describe('MiApComponent', () => {
  let component: MiApComponent;
  let fixture: ComponentFixture<MiApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
