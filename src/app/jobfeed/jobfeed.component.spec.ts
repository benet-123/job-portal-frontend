import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfeedComponent } from './jobfeed.component';

describe('JobfeedComponent', () => {
  let component: JobfeedComponent;
  let fixture: ComponentFixture<JobfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobfeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
