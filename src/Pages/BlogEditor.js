import React, { useContext, useEffect, useState } from 'react'
import comStyles from '../Components/component.module.css'
import pageStyles from './pages.module.css'
import { Link } from 'react-router-dom'
import { AnimationWrapper } from '../Components'
import { EditorContext } from './Editor'
import './Texteditor.css'
import EditorJS from '@editorjs/editorjs'
import { tools } from '../Components/EditorJsTools'
import { FaRegImage } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';


const BlogEditor = () => {
  // const [image, setImage] = useState('')
  let { blog, setBlog, textEditor, setTextEditor, setEditorState } = useContext(EditorContext)

  useEffect(() => {
    if (!textEditor.isReady) {
      setTextEditor(new EditorJS({
        holder: "textEditor",
        data: blog.content,
        tools: tools,
        placeholder: "Let's write something awesome"

      }))
    }
  }, [])


  const handleBannerUpload = (e) => {
    console.log(e.target.files[0]);
    // setImage(e.target.files[0])
    setBlog({ ...blog, banner: e.target.files[0] })
    toast.success("Banner Uploaded")

  }

  const handleTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  const handleTitleChange = (e) => {
    let input = e.target;
    input.style.height = 'auto'
    input.style.height = input.scrollHeight + "px"

    setBlog({ ...blog, title: input.value })
    console.log(blog.title);
  }

  const handlePublish = () => {
    if (!blog.banner) {
      console.log(blog.banner);
      return toast.error("Upload a blog banner to publish it");
    }
    if (!blog.title.length) {
      return toast.error("Write the blog title");
    }
    if (textEditor.isReady) {
      // console.log(textEditor);
      textEditor.save().then(data => {
        console.log(data);
        if (data.blocks.length) {
          setBlog({ ...blog, content: data })
          setEditorState("publish")
        } else {
          return toast.error("Write something to publish")
        }
      })
        .catch((err) => {
          console.log("publishing error: " + err);
        })
    }
  }

  const handleSaveDraft = () => {

  }


  return (
    <>
      <nav className={comStyles.navbar}>
        <Link to='/' className={comStyles.logoLink}>
          <img src={require('../Assets/images/logoDark.png')} className={comStyles.logo} />
        </Link>
        <p className={`${comStyles.displayTrue}`}>
          {blog.title.length ? blog.title : 'New Blog'}
        </p>
        <div className={comStyles.subNavDiv2}>
          <button className={`${comStyles.btn} ${comStyles.btn_dark}`} onClick={handlePublish}>Publish</button>
          <button className={`${comStyles.btn} ${comStyles.btn_light}`} onClick={handleSaveDraft}>Save Draft</button>
        </div>
      </nav>

      <AnimationWrapper>
        <section>
          <div className={pageStyles.sectionDiv}>
            <label htmlFor='uploadBanner'>
              <div className={pageStyles.sectionDivDiv}>
                {
                  blog.banner ?
                    <img src={URL.createObjectURL(blog.banner)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    :
                    <FaRegImage size={100} color='#d3d3d3' />
                }
                <input
                  id='uploadBanner'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  hidden
                  onChange={handleBannerUpload}
                />
              </div>
            </label>
            <textarea className={pageStyles.title}
              defaultValue={blog.title}
              placeholder='Blog Title'
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            >

            </textarea>

            <hr className={pageStyles.horizontalRule} />

            <div className={pageStyles.textEditor} id='textEditor' style={{ textAlign: 'left' }}></div>

          </div>
        </section>
        <Toaster />
      </AnimationWrapper>
    </>
  )
}

export default BlogEditor