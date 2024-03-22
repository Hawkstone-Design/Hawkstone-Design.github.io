import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements 
AfterViewInit{

  @ViewChild('innerCarousel') carouselInner!: ElementRef<HTMLElement>;
  @ViewChild('item') carouselItem!: ElementRef<HTMLElement>;

  scrollPosition: number = 0;
  carouselWidth: number = 0;
  cardWidth:number = 0;

  constructor() { }
  ngAfterViewInit(): void {
    this.carouselWidth = this.carouselInner.nativeElement.scrollWidth;
    this.cardWidth = this.carouselItem.nativeElement.scrollWidth;
  
  }

  onNextClick(): void {
    this.carouselWidth = this.carouselInner.nativeElement.scrollWidth;
    this.cardWidth = this.carouselItem.nativeElement.scrollWidth;
    if (this.scrollPosition < (this.carouselWidth - this.cardWidth * 4)) {
      this.scrollPosition += this.cardWidth;
      this.carouselInner.nativeElement.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }

  onPrevClick(): void {
    this.carouselWidth = this.carouselInner.nativeElement.scrollWidth;
    this.cardWidth = this.carouselItem.nativeElement.scrollWidth;
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.cardWidth;
      this.carouselInner.nativeElement.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
    }
  }
  

}
