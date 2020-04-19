import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //Crea un nuevo dato
  public crearMensaje(collection: string, data: { name: string, message: string, date: string }) {
    return this.firestore.collection(collection).add(data);
  }
  //Obtiene un dato
  public obtenerMensaje(documentId: string) {
    return this.firestore.collection('messages').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los datos
  public obtenerMensajes(collection) {
    return this.firestore.collection(collection).snapshotChanges();
  }
  //Actualiza un dato
  public actualizarMensaje(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }

}
