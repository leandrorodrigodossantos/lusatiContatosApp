import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosGrupoComponent } from './grupo-contatos.component';

describe('ContatosGrupoComponent', () => {
  let component: ContatosGrupoComponent;
  let fixture: ComponentFixture<ContatosGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
