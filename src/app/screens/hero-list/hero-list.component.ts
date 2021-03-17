import { Component, OnInit } from '@angular/core';
import {HeroData} from '../../mock-data/heros';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  constructor() { }
  heros:any = [];
  ngOnInit(): void {
    this.heros = HeroData;
  }
  remove(hero:any){
    this.heros = this.heros.filter((item:any) => item != hero);
  }
  submitForm(event:any){
    event.preventDefault();
   let formData = new FormData(event.target);
   const id_form = formData.get('id');
   const name = formData.get('name');
   const image = formData.get('image');
   const data:any = {
    id: Number(id_form),
    name:name,
    img:image,
   };
   console.log(data);
   this.heros.push(data);
  //  const data = [
  //    id : id,
  //    name : name,
  //     image : image,
  //  ]
  //   this.heros = this.heros.push()
  }
}
