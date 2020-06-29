import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos = [
    {
      url : 'https://t4.ftcdn.net/jpg/00/62/33/45/240_F_62334577_pPZSWcWMOUtv8HsB6sEwPIZ7yLi9NXS3.jpg',
      description : 'Leao Por do Sol'

    },
    {
      url : 'https://th.bing.com/th/id/OIP.n9W8w6kh04MRHOdMIukdmAE7DG?w=315&h=198&c=7&o=5&dpr=1.5&pid=1.7',
      description : 'Leão nascer do Sol'
    }
    ,
    {
      url : 'https://th.bing.com/th/id/OIP.z2qZ5vl7_74lvQnE5bXwWAHaEK?w=291&h=180&c=7&o=5&dpr=1.5&pid=1.7',
      description : 'Girafa'
    }
  ];


}
