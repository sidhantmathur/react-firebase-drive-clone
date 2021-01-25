import React, { useEffect } from 'react'
import firebase from '../../firebase'

export default function Read() {
  // const [people, setPeople] = useState([])
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("people").where("birthYear", "<", 2000)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log('multiple', doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  
    var docRef = db.collection("people").doc("3osOyjwkUgUpBR4enVZo");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
  },[])
  return (
    <div>
      <ul>
      </ul>
    </div>
  )
}

