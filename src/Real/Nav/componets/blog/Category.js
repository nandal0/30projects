import React, { useEffect, useState } from 'react'
import './Category.css'
import { v4 as uuidv4 } from 'uuid'
import { storage, db } from '../../firebase'
import { useAuth } from '../../login/AuthContext';

const Category = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState('')
    const { currentUSer } = useAuth()

    useEffect(() => {
        if (url) {
            try {
                db.collection('blogs').add({
                    title,
                    body,
                    imageUrl: url,
                    createdAt: new Date(),
                    postedBY: currentUSer.uid,


                })
                console.log("database created");
            }

            catch (e) {
                console.log('error cerated');

            }

        }
    }, [url])

    const submitDeatils = (e) => {
        console.log('helo');
        // e.preventDefault()

        let uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image)
        console.log('uploadTask');




        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress === '100')
                    console.log('Upload is ' + progress + '% done');

            },
            (error) => {
                console.log(error.message);
            },
            () => {


                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setUrl(downloadURL)
                });
            }
        );





    }
    return (
        <div className="category">




            <div className="input-field">
                <h3>Crate a blog</h3>
                <input type="text"
                    className="txt"
                    value={title}
                    placholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="txt"
                    placeholder="body"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>

            <div className="file-field input-field">

                <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">

                    <input className="file-path validate" type="text" />
                </div>
            </div>


            <button className="b btn orange darken-1 fb8c00" onClick={() => submitDeatils()}>Submit Post</button>

        </div>

    )
}

export default Category

