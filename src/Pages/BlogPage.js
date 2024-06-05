import React from 'react'
import pageStyles from './pages.module.css'
import comStyles from '../Components/component.module.css'
import { blogs } from '../json/blogs'
import { Link, useParams } from 'react-router-dom'
import { AnimationWrapper, BlogContent } from '../Components'

const BlogPage = () => {
    let { page } = useParams()
    let blog = blogs.find(blog => blog.id == page);
    console.log(blog);

    return (
        <section className={`${pageStyles.h_cover}`}>
            <AnimationWrapper>
                <div className={pageStyles.BlogPage}>
                    <img src={URL.createObjectURL(blog.banner)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ marginTop: "20px" }}>
                        <h2 className={pageStyles.title}>{blog.title}</h2>
                        {/* <div className={pageStyles.blogAuthor}>
                            <img src={require()} />
                            <p>

                                <br />
                                <Link></Link>
                            </p>
                        </div>
                        <p></p> */}
                    </div>
                    <div>
                        {
                            blog.content.blocks.map((block, i) => {
                                return (
                                    <div>
                                        <BlogContent block={block} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </AnimationWrapper>
        </section>
    )
}

export default BlogPage