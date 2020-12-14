import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let componentInput: string[] = ["MEAN"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ MatIconModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      component.customHeader = componentInput;
      fixture.detectChanges();
    });
  });

  it('should show MEAN by the menu bar', () => {
    expect(component).toBeTruthy();
  });

  it('should show click the menu button', () => {
    spyOn(component, 'toggleSidebar');

    let menuButton = fixture.debugElement.query(By.css('#menuButton')).nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.toggleSidebar).toHaveBeenCalled();
    });
  });
});
