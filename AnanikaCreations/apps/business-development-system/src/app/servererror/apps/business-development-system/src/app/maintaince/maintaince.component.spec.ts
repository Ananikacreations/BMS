import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaintainceComponent } from './maintaince.component';

describe('MaintainceComponent', () => {
  let component: MaintainceComponent;
  let fixture: ComponentFixture<MaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintainceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
