import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMasterEditComponent } from './admin-master-edit.component';

describe('AdminMasterEditComponent', () => {
  let component: AdminMasterEditComponent;
  let fixture: ComponentFixture<AdminMasterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMasterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
