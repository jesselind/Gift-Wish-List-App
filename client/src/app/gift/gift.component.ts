import { Component, OnInit } from '@angular/core';

import { GiftService } from '../gift.service';
import { Gift } from '../gift';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
