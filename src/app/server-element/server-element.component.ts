import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('onInit called');
    console.log('Text Content:', this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph:', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content:', this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph:', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!');
  }
}
