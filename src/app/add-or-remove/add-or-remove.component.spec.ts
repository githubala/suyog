import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrRemoveComponent } from './add-or-remove.component';

describe('AddOrRemoveComponent', () => {
  let component: AddOrRemoveComponent;
  let fixture: ComponentFixture<AddOrRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
