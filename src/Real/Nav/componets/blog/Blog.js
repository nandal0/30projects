import { database } from 'faker/locale/zh_TW'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase'
import './Blog.css'

const Blog = () => {
  const [blogs, setBlogss] = useState([])
  const data = []

  useEffect(() => {

    db.collection('blogs').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const da = doc.data()
          data.push(da)

        })

      }

      )
    setBlogss(data)
    // console.log(blogs);

    // console.log(data);

  }, [])
  console.log(blogs);
  return (
    <div className="blogo">


      {


        blogs.map((blog) => {
          console.log('helo');
          // console.log(blog);

          return (
            <div key={blog.createdAt} >
              <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <span className="card-title">{blog.title}</span>


                    <div className="card-image">
                      <img src={blog.imageUrl} />
                    </div>
                    <div className="card-content">
                      <p>{blog.body}</p>
                    </div>
                    <div className="card-action">
                      {/* <Link >Read more</Link> */}


                    </div>
                  </div>
                </div></div>

            </div>
          )



        }
        )

      }





    </div>
  )
}

export default Blog


