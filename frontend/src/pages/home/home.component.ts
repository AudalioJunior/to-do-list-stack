import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:any=[{
		title: "Feliz",
		content: "Você é",
		checked: false
	},
	{
		title: "Aniversário",
		content: "um grande",
		checked: false
	},
	{
		title: "Dolly",
		content: "Campeão :)",
		checked: false
	}
]

  constructor() { }

  ngOnInit(): void {
  }

}
