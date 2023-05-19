import { Component, OnInit, ViewChild } from '@angular/core';
import { ThoughtComponent } from './components/thought.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild(ThoughtComponent)
  thoughtComp!: ThoughtComponent

  canShare = false

  // check if sharing is available
  ngOnInit(): void {
    this.canShare = !!navigator.share // T/F
  }

  share(text: string) {
    console.info('thoughts to share: ', text)
    const data: any = {
      title: 'Share a thought',
      text,
      // url: 'https://google.com'
    }
    navigator.share(data)
      .then(result => {
        alert('shared')
        this.thoughtComp.clear()
      })
      .catch(err => alert('JSON: ' + JSON.stringify(err)))
  }
}
