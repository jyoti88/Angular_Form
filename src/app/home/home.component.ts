import { Component, OnInit } from '@angular/core';
import { Name } from '../home';
import { HomeServiceService } from '../home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name: Name={
name:"jyoti maurya"
}
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

}
