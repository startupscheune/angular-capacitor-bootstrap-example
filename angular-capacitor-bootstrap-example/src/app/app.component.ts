import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-capacitor-bootstrap-example';
  latitude = 0;
  longitude = 0;
  imageToShow = '';

  onTakePhoto(): void {
    console.log('clicked');
  }

  async onGeodata() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  async getPhoto(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    const imageUrl = image.webPath;
    console.log('Photo:', imageUrl);
    return new Promise<string>((resolve, reject) => {
      if (imageUrl) {
        resolve(imageUrl);
      }
      else {
        reject(new Error('No image found'));
      }
    });
  }

  takePicture() {
    // console.log('takePicture: You should do something here');
    // Beispiel für ein Promise
    this.getPhoto().then(imageUrl => {
      this.imageToShow = imageUrl;
      console.log('imageToShow:', this.imageToShow);
    });

  }
}
