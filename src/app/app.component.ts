import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotebookTaskComponent } from './notebook/notebook.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotebookTaskComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-w3-notebook';
}

