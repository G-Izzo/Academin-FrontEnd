import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  public lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde cum cumque ab nemo laboriosam doloremque fugit saepe eum ad sequi rem, dolorum quis molestias quos iusto magni. Aliquid, modi.';

  constructor() {}

  ngOnInit(): void {}
}
