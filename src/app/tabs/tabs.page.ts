import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private platform: Platform,
    private alertController: AlertController
  ) {
    this.backButtonEvent();
  }

  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10,() => {
      this.backButtonAlert();
    });

  }

  async backButtonAlert(){
    const alert = await this.alertController.create({
      message: 'You have already logged in!'
    });
    await alert.present();
  }

}
