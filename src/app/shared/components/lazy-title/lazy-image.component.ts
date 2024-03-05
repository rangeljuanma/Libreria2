import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-text',
  templateUrl: './lazy-image.component.html',
})
export class LazyTextComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public name!: string;

  public hasLoeaded : boolean= false;

  constructor(){
    this.hasLoeaded = false
  }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoeaded = true;

    }, 1500);
  }
}
