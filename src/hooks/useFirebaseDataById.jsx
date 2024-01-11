import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useFirebaseDataById() {
  async function getRecipeElements(colName, id) {
    const docRef = doc(db, colName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      alert("No recipe yet");
    }
  }

  return { getRecipeElements };
}
