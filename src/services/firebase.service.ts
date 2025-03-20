import { app } from "../utils/firebaseConfig";
import { getFirestore, Firestore, collection, addDoc, getDocs } from "firebase/firestore";
import { IContact, IProject } from "../app-types";

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

  getProjects = async (): Promise<IProject[]> => {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'projects'));
      const projects: IProject[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        url_github: doc.data().url_github,
        url_preview: doc.data().url_preview,
        image: doc.data().image,
        techs: doc.data().techs,
      }));
      console.log(projects);
      return projects;
    } catch (error) {
      console.log(error);
      throw new Error('Error getting projects');
    }
  }
}