import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCircleComponent } from './skill-circle.component';

describe('SkillCircleComponent', () => {
  let component: SkillCircleComponent;
  let fixture: ComponentFixture<SkillCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
