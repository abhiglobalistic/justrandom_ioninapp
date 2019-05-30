import { Component, OnInit } from '@angular/core';
import { ImagesProvider } from './../../providers/images/images';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-upload-model',
  templateUrl: './upload-model.page.html',
  styleUrls: ['./upload-model.page.scss'],
})
export class UploadModelPage implements OnInit {
  
  imageData: any;
  desc: string;

  cconstructor(public navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController, private imagesProvider: ImagesProvider) {
    this.imageData = this.navParams.get('data');
  }

  saveImage() {
    this.imagesProvider.uploadImage(this.imageData, this.desc).then(res => {
      this.viewCtrl.dismiss({reload: true});
    }, err => {
      this.dismiss();
    });
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
  }

}
