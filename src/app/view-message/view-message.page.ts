import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, User } from '../services/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/users';
@Output() items;

  public user: User;

  constructor(public httpClient: HttpClient,
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}
   ionViewWillEnter() {
    this.httpClient.get(this.url)        
        .subscribe(data => {
          this.items = data;
          });

  }  
  GoTo(i) {
  window.alert(
  'ID=' + i.id
  + '\n' +
  'Name=' +i.name
  + '\n' +
  'UserName=' +i.username
  + '\n' +
  'Email=' +i.email
  + '\n' +
  'Adress:'
  + '\n' +
  'Street=' +i.address.street
  + '\n' +
  'Suite=' +i.address.suite 
  + '\n' +
  'City=' +i.address.city 
  + '\n' +
  'ZipCode=' +i.address.zipcode
  + '\n' + 
  'Geo Localisation:' 
  + '\n' +
  'Lattitude=' +i.address.geo.lat   
  + '\n' +
  'Lngtitude=' +i.address.geo.lng 
  + '\n' +
  'Phone=' +i.phone 
  + '\n' +
  'Website=' +i.website
  + '\n' +
  'Company'
  + '\n' +
  'Name=' +i.company.name 
  + '\n' +
  'Catch Phrase=' +i.company.catchPhrase 
  + '\n' +
  'BS=' +i.company.bs);
  //"Console"<---------------------------------------
    console.log('ID=' + i.id);
    console.log('Name=' +i.name);
    console.log('UserName=' +i.username);
    console.log('Email=' +i.email);
    console.log('Adress:');
    console.log('Street=' +i.address.street);
    console.log('Suite=' +i.address.suite); 
    console.log('City=' +i.address.city); 
    console.log('ZipCode=' +i.address.zipcode); 
    console.log('Geo Localisation:'); 
    console.log('Lattitude=' +i.address.geo.lat);   
    console.log('Lngtitude=' +i.address.geo.lng); 
    console.log('Phone=' +i.phone); 
    console.log('Website=' +i.website);
    console.log('Company');
    console.log('Name=' +i.company.name); 
    console.log('Catch Phrase=' +i.company.catchPhrase); 
    console.log('BS=' +i.company.bs);
  //------------------------------------->"Console"  
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
