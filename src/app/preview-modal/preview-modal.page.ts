import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.page.html',
  styleUrls: ['./preview-modal.page.scss'],
})
export class PreviewModalPage implements OnInit {
  
  img: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.img = this.navParams.get('img');
  }
 
  close() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
  }

}
