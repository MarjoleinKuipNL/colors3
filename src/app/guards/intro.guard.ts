import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
//import { Storage } from '@ionic/storage';

// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;
// const Storage = new Storage();

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad  {

  constructor(private router: Router){

  }
  async canLoad(): Promise<boolean>{
    const hasSeenIntro = true;
    if(hasSeenIntro){
      return true;
    }else {
      this.router.navigateByUrl('/intro', {replaceUrl:true});
      return false;
    }
  }
}
