import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosCadastrosComponent } from './contatos-cadastro.component';

describe('ContatosCadastrosComponent', () => {
  let component: ContatosCadastrosComponent;
  let fixture: ComponentFixture<ContatosCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosCadastrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
