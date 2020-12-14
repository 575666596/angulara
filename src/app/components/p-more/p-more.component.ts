import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-more',
  templateUrl: './p-more.component.html',
  styleUrls: ['./p-more.component.scss']
})
export class PMoreComponent implements OnInit {
  pflag: boolean = true
  fixed = '固定值'
  constructor() { }



  ngOnInit(): void {
  }
  psend() {
    this.pflag = !this.pflag
  }

}
