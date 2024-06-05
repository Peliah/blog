import React from 'react'
import pageStyles from './pages.module.css'
import comStyles from '../Components/component.module.css'
import { blogs } from '../json/blogs'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    let { page } = useParams()
    let blog = blogs.find(blog => blog.id == 1);
    console.log(blog);
    return (
        <div className={`${pageStyles.h_cover}`}>

        </div>
    )
}

export default BlogPage