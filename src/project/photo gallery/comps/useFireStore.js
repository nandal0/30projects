import { db } from "../firebase";

import React, { useEffect, useState } from 'react'

const useFireStore = (collection) => {

    const [docs,setDocs]=useState([])

    useEffect(()=>{
       const unsub= db.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })
        return ()=>unsub()
    },[collection])

    return (
        {docs}
    )
}

export default useFireStore
