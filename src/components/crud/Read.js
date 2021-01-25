import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

export default function Read() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("people").get();
      setPeople(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
      {people.map(people => (
        <li key={people.name} value={people.name}></li>
      ))}
      </ul>
    </div>
  )
}
