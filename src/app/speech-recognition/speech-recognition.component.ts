import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../services/voice-recognition.service';
import { fooditem } from '../data-model/food.model';

// export interface IWindow extends Window {
//   webkitSpeechRecognition: any;
// }

// declare interface SpeechRecognitionError extends Event {
//   error: string;
// }

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css']
})
export class SpeechRecognitionComponent implements OnInit {

  food: fooditem[]=[];
  foodName!: string;
  constructor(
    public service : VoiceRecognitionService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
    this.food = [
      { ID:1,foodName: "burger"},
      {ID:2,foodName: "pizza."},
      {ID:3,foodName: "samosa"},
      {ID:4,foodName: "salad"},
      {ID:5,foodName: "toast"},]

  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }
  Search()
{
  console.warn("searching success");
  console.log('foodName:', this.foodName);

  if(this.foodName != "")
  {
    this.food=this.food.filter(res=>{
      console.warn("searching if");
      return res.foodName.toLocaleLowerCase().match(this.foodName.toLocaleLowerCase());
    });
  }else if(this.foodName == ""){
    console.warn("searching else");
    this.ngOnInit();
  }
  
  
}

onInputChange() {
  console.log('foodName:', this.foodName);
}


}

