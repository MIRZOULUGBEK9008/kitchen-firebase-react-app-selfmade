import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";

export function useAddNewRecipe() {
  const [isPending, setIsPending] = useState(false);
  const addNewDoc = async (colName, data) => {
    console.log(colName, data);
    setIsPending(true);
    await addDoc(collection(db, colName), {
      ...data,
    });
    setIsPending(false);
  };

  return { addNewDoc, isPending };
}
