import React, { useEffect, useState } from 'react'
import { db } from './config'

const BookList = () => {

    const [bookmark,setBookmark]=useState([])
    const data=[]

    const getData = async () =>{
        db.collection('bookmarks').get()
        .then(snapshot =>{
            snapshot.forEach(doc=>{
                // const  dat= doc.data()
                // data.push(dat)
                setBookmark((prev)=>{
                    return [...prev,{data:doc.data(),id:doc.id}]
                })
            })
        })
        // console.log(data);
        //  setBookmark(data)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="container-fluid">

                {bookmark.map((book)=>{
                    console.log(book);
                  return(
                      
                    <div key={book.link} className="m-4 card">
                        
                    <div className="card-body">
                     <p>
                     <strong>Title  {book.title}</strong> <br />
                      <strong>Link  {book.link}</strong> <br />
                      <strong>Tag  {book.tag}</strong> <br />
                      
                     </p>
                    </div>
                  </div>
                  )
                })}

        </div>
    )
}

export default BookList
