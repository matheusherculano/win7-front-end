import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-livre',
  templateUrl: './consulta-livre.component.html',
  styleUrls: ['./consulta-livre.component.css']
})
export class ConsultaLivreComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('pricing-page');
    body.classList.add('off-canvas-sidebar');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('pricing-page');
    body.classList.remove('off-canvas-sidebar');
  }

}
