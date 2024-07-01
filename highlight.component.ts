import { Component } from '@angular/core';
import { highlightPipe } from 'src/app/pipes/highlight.pipe';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent {
  inputText!:string;
  para:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  highlightedText !: string;

  ngOnInit():void{
    this.highlightedText = this.para;
  }

  onInputChange(){
    const markedText = new highlightPipe();
    this.highlightedText = markedText.transform(this.para, this.inputText);
    console.log(this.highlightedText);
    
  }

}
