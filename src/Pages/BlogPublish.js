import React, { useContext } from 'react'
import { AnimationWrapper, Tag } from '../Components'
import toast, { Toaster } from 'react-hot-toast'
import { RxCross2 } from 'react-icons/rx';
import pageStyles from './pages.module.css'
import comStyles from '../Components/component.module.css'
import { EditorContext } from './Editor';
import { UserContext } from '../App';
import { blogs } from '../json/blogs'
import { useNavigate } from 'react-router-dom';

const BlogPublish = () => {

    let characterLimit = 200;
    let tagLimit = 10;
    let navigate = useNavigate();
    let { userAuth } = useContext(UserContext)
    let { blog, setBlog, setEditorState } = useContext(EditorContext);

    const handleCloseEvent = () => {
        setEditorState("editor")
    }

    const handleBlogTitleChange = (e) => {
        setBlog({ ...blog, title: e.target.value });
    }

    const handleBlogDescChange = (e) => {
        setBlog({ ...blog, desc: e.target.value });

    }

    const handleKeyDown = (e) => {
        console.log(e);
        if (e.keyCode === 13 || e.keyCode === 188) {
            e.preventDefault();
            if (blog.tags.length < tagLimit) {
                console.log(blog.tags.length);
                if (!blog.tags.includes(e.target.value) && e.target.value.length) {
                    console.log(e.target.value.length);
                    setBlog({ ...blog, tags: [...blog.tags, e.target.value] })
                }
            } else {
                toast.error(`You can a max ${tagLimit} tags!`)
            }

            e.target.value = ""
        }
    }

    const handlePublish = () => {
        setBlog({ ...blog, author: userAuth });
        console.log(blog);
        blogs.append(blog);
        toast.success("Blog Published");
        setTimeout(() => {
            navigate("/")
        }, 500);
    }


    return (
        <AnimationWrapper>
            <section className={pageStyles.publisSection}>
                <button className={pageStyles.crossBtn} onClick={handleCloseEvent}>
                    <RxCross2 size={20} />
                </button>
                <div className={`${pageStyles.publishDiv} ${pageStyles.center}`}>
                    <p className={pageStyles.previewText}>Preview</p>
                    <div className={pageStyles.sectionDivDiv} style={{ borderRadius: "10px" }}>
                        <img src={URL.createObjectURL(blog.banner)} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                        <img />
                    </div>

                    <h1 className={pageStyles.title}>{blog.title}</h1>

                    <p className={pageStyles.blogDesc}>{blog.desc}</p>

                </div>

                <div className={pageStyles.leftSide}>
                    <p className={pageStyles.previewText}>Blog Title</p>
                    <input
                        className={pageStyles.inputBox}
                        defaultValue={blog.title}
                        placeholder='Blog Title'
                        onChange={handleBlogTitleChange}
                    />

                    <p className={pageStyles.previewText}>Short description about your blog</p>
                    <textarea
                        defaultValue={blog.desc}
                        maxLength={characterLimit}
                        className={`${pageStyles.inputBox} ${pageStyles.textareaDesc}`}
                        onChange={handleBlogDescChange}
                    // onKeyDown={handleTitleKeyDown}
                    ></textarea>
                    <p className={pageStyles.characterlimit}>{characterLimit - blog.desc.length}/{characterLimit} characters left</p>

                    <p className={pageStyles.previewText}>Topics - (Helps in searching and ranking your blog post)</p>

                    <div className={`${pageStyles.inputBox} ${pageStyles.topicDiv}`}>
                        <input
                            type='text'
                            placeholder='Topic'
                            className={`${pageStyles.inputBox} ${pageStyles.topicInput}`}
                            onKeyDown={handleKeyDown}
                        />
                        {/* <Tag tag={"Test"} /> */}
                        {
                            blog.tags.map((tag, i) => {
                                return <Tag tag={tag} key={i} />
                            })
                        }
                    </div>
                    <p className={pageStyles.characterlimit}>{tagLimit - blog.tags.length}/{tagLimit} tags left</p>
                    <button className={`${comStyles.btn} ${comStyles.btn_dark}`} onClick={handlePublish} style={{ marginTop: "30px", fontSize: "1rem" }}>Publish</button>

                </div>
                <Toaster />
            </section>
        </AnimationWrapper>
    )
}

export default BlogPublish