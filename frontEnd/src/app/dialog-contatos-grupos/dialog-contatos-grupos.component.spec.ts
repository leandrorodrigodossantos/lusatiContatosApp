import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContatosGruposComponent } from './dialog-contatos-grupos.component';

describe('DialogContatosGruposComponent', () => {
  let component: DialogContatosGruposComponent;
  let fixture: ComponentFixture<DialogContatosGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContatosGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContatosGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
