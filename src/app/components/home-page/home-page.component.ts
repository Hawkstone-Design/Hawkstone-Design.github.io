import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit{
  
  @ViewChild('whatwed') whatwedo!: ElementRef<HTMLElement>;
  @ViewChild('casstudies') casestudies!: ElementRef<HTMLElement>;
  @ViewChild('aboutus') aboutus!: ElementRef<HTMLElement>;
  @ViewChild('contactus') contactus!: ElementRef<HTMLElement>;
  
  constructor(){

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
