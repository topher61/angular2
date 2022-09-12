import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commun-graph',
  templateUrl: './commun-graph.component.html',
  styleUrls: ['./commun-graph.component.css']
})
export class CommunGraphComponent implements OnInit {


  @Input() communesForGraph: {name:string, value: number}[] =[]; 
  @Input() communesIsLoading: boolean= false;
  @Input() communesIsLoaded: boolean= false;



  constructor() { }

  ngOnInit(): void {
  }

}
