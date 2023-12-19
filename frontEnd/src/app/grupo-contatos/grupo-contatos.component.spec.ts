import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoContatosComponent } from './grupo-contatos.component';

describe('GrupoContatosComponent', () => {
  let component: GrupoContatosComponent;
  let fixture: ComponentFixture<GrupoContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
