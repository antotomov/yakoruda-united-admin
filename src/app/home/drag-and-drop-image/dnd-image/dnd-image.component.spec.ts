import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndImageComponent } from './dnd-image.component';

describe('DndImageComponent', () => {
  let component: DndImageComponent;
  let fixture: ComponentFixture<DndImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DndImageComponent]
    });
    fixture = TestBed.createComponent(DndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
