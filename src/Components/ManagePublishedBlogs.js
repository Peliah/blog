import React from 'react'
import { Link } from 'react-router-dom'
import styles from './component.module.css'
import { TbTrash } from 'react-icons/tb'
import { FiEdit, FiTrash } from 'react-icons/fi'

const ManagePublishedBlogs = ({ blog }) => {
    return (
        <>
            <div className={styles.managePublishedlogs}>
                <img src={URL.createObjectURL(blog.banner)} className={styles.publishedImages} />
                <div className={styles.pubBlogDiv2}>
                    <div>
                        <Link to={`/blog/${blog.id}`} className={styles.blogTitle}>{blog.title}</Link>
                        <p></p>
                    </div>
                    <div className={styles.editLinkDiv}>
                        <Link to={`/editor/${blog.id}`} >
                            {/* Edit */}
                            <FiEdit size={30} />
                        </Link>
                        {/* <button></button> */}
                        {/* <button></button> */}
                        <FiTrash color='red' size={30} />
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default ManagePublishedBlogs