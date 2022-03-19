import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-text-ticker',
  templateUrl: './text-ticker.component.html',
  styleUrls: ['./text-ticker.component.css']
})
export class TextTickerComponent implements OnInit {

  numberOfWords = 3;
  wordsPerMinute = 30;
  currentText = '';
  inputText = '';
  scrollArray:string[] = [];
  scrollPosition:number = 0;
  wordsPerSec=0;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  scrollText(){
    if(this.inputText.length>=0){
      this.scrollArray = this.inputText.trim().split(/\s+/g);
    }
    this.startScrolling();
  }

  startScrolling() {

    this.wordsPerSec  = this.wordsPerMinute/60;
    let repeatInterval = this.wordsPerSec*1000;
    if(this.scrollPosition>this.scrollArray.length){
      return;
    }
    console.log('repeat interval: '+ repeatInterval);
    let currentScroll = '';
    for(let i=this.scrollPosition;i<this.scrollPosition+this.numberOfWords;i++){
      if(i>this.scrollArray.length){
        i=this.scrollArray.length;
      } 
      currentScroll+=this.scrollArray[i];
      currentScroll+=' ';
    }
    this.currentText=currentScroll;
    setTimeout(() => {
      if(this.scrollPosition<=this.scrollArray.length){
        this.scrollPosition = this.scrollPosition+this.numberOfWords;
        console.log('scroll position'+this.scrollPosition+' text:'+this.currentText)
        this.startScrolling();
        }
    }, repeatInterval);

  }

  decreaseWpm(){
    if(this.wordsPerMinute>30){
      this.wordsPerMinute-=30;
    }

  }

  increaseWpm(){
    if(this.wordsPerMinute<=2400){
      this.wordsPerMinute+=30;
    }
  }

  decreaseNumberOfWords(){
    if(this.numberOfWords>0)
    {this.numberOfWords-=1;}
  }

  increaseNumberOfWords(){
    if(this.numberOfWords<=20)
    {this.numberOfWords+=1;}
  }
  doTextareaValueChange(ev:any) {
    try {
      this.inputText = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

}
