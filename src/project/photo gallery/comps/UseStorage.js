import { useEffect, useState } from "react"
import { storage,db } from "../firebase"

const useStorage=(file)=>{
    const[progress,setProgress]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)


    useEffect(()=>{
        const storageRef=storage.ref(file.name)
        const collection=db.collection('images')
        console.log(storageRef);
        storageRef.put(file).on('state_changed',(snap)=>{
            let percent=(snap.bytesTransferred/snap.totalBytes)*100
            setProgress(percent)

        },(err)=>{
            setError(err)
        },async()=>{
            const url=await storageRef.getDownloadURL()
            const createdAt=new Date()
            collection.add({url,createdAt})
            setUrl(url)
        }
        
        )
    },[file])
    
    return {progress,url,error}
}

export default useStorage