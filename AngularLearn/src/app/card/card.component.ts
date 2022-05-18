import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title = 'My Card Title'
  text = 'My Sample Text'


  ngOnInit() {

  }

  changeTitle() {
    this.title = "Title has changed"
  }

  onInputHandler({value}: { value: any }) {
    /*const value = event.target.value*/
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
