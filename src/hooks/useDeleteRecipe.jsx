import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useDeleteRecipe() {
  const deletedDoc = async (colName, id) => {
    await deleteDoc(doc(db, colName, id));
    toast.success("Succesfully deleted recipe");
  };

  return { deletedDoc };
}
