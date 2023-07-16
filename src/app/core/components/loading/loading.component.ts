import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingComponent {

  constructor(public loader: LoadingService) { }

}

