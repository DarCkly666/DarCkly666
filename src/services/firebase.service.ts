import { app } from "../utils/firebaseConfig";
import { getFirestore, Firestore, collection, addDoc } from "firebase/firestore";
import { IContact } from "../app-types";

export class FirebaseService {
  static instance: FirebaseService;
  private db: Firestore;
  private constructor() {
    this.db = getFirestore(app)
  }

  public static getInstance() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  setMessage = async (contact: IContact) => {
    try {
      contact.date = new Date();
      const docRef = await addDoc(collection(this.db, 'messages'), contact);
      return docRef;
    } catch (error) {
      console.log(error);
      throw new Error('Error sending message');
    }
  }
}