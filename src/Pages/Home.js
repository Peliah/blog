import React from 'react'
import pageStyles from './pages.module.css'
import { blogs } from "../json/blogs";
const Home = () => {
    console.log(blogs);
    return (
        <div className={pageStyles.h_cover}>Home</div>
    )
}

export default Home