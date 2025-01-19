import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilelockComponent } from './profilelock.component';

describe('ProfilelockComponent', () => {
  let component: ProfilelockComponent;
  let fixture: ComponentFixture<ProfilelockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilelockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilelockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
