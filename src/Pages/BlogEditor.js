import React, { useContext, useEffect } from 'react'
import comStyles from '../Components/component.module.css'
import pageStyles from './pages.module.css'
import { Link } from 'react-router-dom'
import { AnimationWrapper } from '../Components'
import { EditorContext } from './Editor'
import './Texteditor.css'
import EditorJS from '@editorjs/editorjs'
import { tools } from '../Components/EditorJsTools'

const BlogEditor = () => {

  let { blog, setBlog } = useContext(EditorContext)

  useEffect(() => {
    let editorjs = new EditorJS({
      holder: "textEditor",
      data: '',
      tools: tools,
      placeholder: "Let's write something awesome"

    })
  }, [])


  const handleBannerUpload = (e) => {
    console.log(e.target.files[0]);

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
          <button className={`${comStyles.btn} ${comStyles.btn_dark}`}>Publish</button>
          <button className={`${comStyles.btn} ${comStyles.btn_light}`}>Save Draft</button>
        </div>
      </nav>

      <AnimationWrapper>
        <section>
          <div className={pageStyles.sectionDiv}>
            <div className={pageStyles.sectionDivDiv}>
              <label htmlFor='uploadBanner'>
                <img src={require('../Assets/images/banner.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <input
                  id='uploadBanner'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
            <textarea className={pageStyles.title}
              placeholder='Blog Title'
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            >

            </textarea>

            <hr className={pageStyles.horizontalRule} />

            <div className={pageStyles.textEditor} id='textEditor' style={{ textAlign: 'left' }}></div>

          </div>
        </section>
      </AnimationWrapper>
    </>
  )
}

export default BlogEditor