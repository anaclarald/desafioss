import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desafio1Component } from './app/desafio1/desafio1.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Desafio1Component, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Desafioss';
}

