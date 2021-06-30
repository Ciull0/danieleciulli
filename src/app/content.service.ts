import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore) { }
  
  getContent(page:string){
    let address = "assets/"+page+".json";
    return new Promise( (resolve, reject) =>{
      this.http.get(address).subscribe(
        (success:any)=>{
          resolve(success);
        }, (error:any)=>{
          reject(error);
        }
      )
    })
  }

  putContent(page:string, data:any){
    
  }

}
