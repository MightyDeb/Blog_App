import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = ()=>{

    const [title, setTitle]= useState('')
    const [category,setCategory]= useState('Uncategorised')
    const [desc, setDesc]= useState('')
    const [thumbnail, setThumbnail]= useState('')
  
    const modules= {
      toolbar: [
        [{'header': [1,2,3,4,5,6,false]}],
        ['bold','italic'],['underline','strike'],['blockquote'],
        [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
        ['link','image'],
        ['clean']
      ],
    }
    const formats= ['header','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image']
    const POST_CATEGORIES= ['Agriculture','Business','Eductaion','Entertainment','Art','Investment','Uncategorised','Travel']
  
    return(
      <section className="create-post">
        <div className="post-container">
          <h2>Edit Post</h2>
          <p className="form_error-message">
            This is an error message
          </p>
          <form className="create-post_form">
            <div className="form-front">
            <input type="text" placeholder="Title" value={title} onChange={e=> setTitle(e.target.value)} autoFocus />
            <select name="category" value={category} onChange={e=> setCategory(e.target.value)}>
              {
                POST_CATEGORIES.map(cat=>
                  <option key={cat}>
                    {cat}
                  </option>
                )
              }
            </select>
            </div>
              <ReactQuill modules={modules} formats={formats} value={desc} onChange={setDesc} accept='png, jpg, jpeg'/>
              <div className="form-end">
              <span>Please enter your thumbnail</span>
              <input type="file" onChange={e=> setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
              <button class="submit-button">Update</button>
              </div>
          </form>
        </div>
      </section>
  )
}

export default EditPost