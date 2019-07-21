import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class StoryboardTabService{

    public data:any=[]

    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
     
    }

    
    public saveTabInLocal(key, val): void {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
        this.data[key]= this.storage.get(key);
   }

   public getTabInLocal(key): any{
        console.log('recieved= key:' + key);
        this.data[key]= this.storage.get(key);
        console.log(this.data);
        
        return this.data[key];
   }

   public getTabValue(key): number{
        this.data[key] = this.storage.get(key);
        return this.data[key];
   }

   public clearTabsInLocal():void{
    //this.storage.remove('Tab');
    localStorage.clear();
   }

}


