import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPessoaComponent } from './card-pessoa.component';

describe('CardPessoaComponent', () => {
  let component: CardPessoaComponent;
  let fixture: ComponentFixture<CardPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
