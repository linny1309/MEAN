import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedContainerComponent } from './expanded-container.component';

describe('ExpandedContainerComponent', () => {
  let component: ExpandedContainerComponent;
  let fixture: ComponentFixture<ExpandedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
