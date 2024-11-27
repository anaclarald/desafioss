import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio1',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './desafio1.component.html',
  styleUrl: './desafio1.component.less'
})
export class Desafio1Component {
  formGroup!: FormGroup;
  pesquisar() {window.location.href = 'www.google.com.br/search?q='+
  this.formGroup.controls['text'].value;
  }


  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });
  }
}
