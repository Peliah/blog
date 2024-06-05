import React, { useContext } from 'react'
import { blogs } from '../json/blogs';
import styles from './pages.module.css'
import { UserContext } from '../App';
import { AnimationWrapper, InPageNavigation, ManagePublishedBlogs } from '../Components';


const ManageBlogs = () => {
    let { userAuth } = useContext(UserContext);




    return (
        <div>

            <InPageNavigation routes={["Published Blogs", "Drafts"]}>
                {
                    blogs.length ?
                        <>
                            {
                                blogs.map((blog, i) => {
                                    return (
                                        <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                                            <ManagePublishedBlogs blog={blog} />
                                        </AnimationWrapper>
                                    )
                                })
                            }
                        </>
                        : <h1>No published Blogs</h1>
                }

                {
                    blogs.length ?
                        <>
                            {
                                blogs.map((blog, i) => {
                                    return (
                                        <AnimationWrapper key={i} transition={{ delay: i * 0.04 }}>
                                            <h1>This is a blog card</h1>
                                        </AnimationWrapper>
                                    )
                                })
                            }
                        </>
                        : <h1>No Drafted Blogs</h1>
                }
            </InPageNavigation>

        </div>
    )
}

export default ManageBlogs