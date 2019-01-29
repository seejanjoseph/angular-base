import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { AdminHomeComponent } from './admin-home.component';
import { DataService } from '../../../core/data.service';

describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminHomeComponent
      ],
      imports: [
        RouterTestingModule

      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { 
            snapshot: { 
              data: { 
                data: {
                  success: true 
                } 
              } 
            }
          }
        },
        DataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


