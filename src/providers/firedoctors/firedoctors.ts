import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the FiredoctorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface DoctorDetail {
  name: String;
  city: String;
  availability: any;
  education: any[];
  qualifications: any[];
  experience: number;
  fees: number;
  hospital_id: string;
  specialization: any[];
}

@Injectable()
export class FiredoctorsProvider {

  private doctorCollection: AngularFirestoreCollection<DoctorDetail>;
  doctors: Observable<DoctorDetail[]>

  constructor(public http: HttpClient, public afs: AngularFirestore) {
  }

  showDoctors(value) {
    this.doctorCollection = this.afs.collection<DoctorDetail>('doctors',ref=>{ return ref.where("Specialization","array-contains",value)});
    this.doctors = this.doctorCollection.valueChanges();
    return this.doctors;
  }

}
