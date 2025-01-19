import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaintaComponent } from './mainta.component';

describe('MaintaComponent', () => {
  let component: MaintaComponent;
  let fixture: ComponentFixture<MaintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
