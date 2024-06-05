import React from 'react'
import { Link } from 'react-router-dom'
import pageStyles from './pages.module.css'
import comStyles from '../Components/component.module.css'
import { AnimationWrapper } from '../Components'

const Profile = () => {
    return (
        <AnimationWrapper>
            <section className={`${pageStyles.h_cover} ${pageStyles.profileSection}`}>
                <div className={pageStyles.profileSectionDiv}>
                    <img className={pageStyles.profileImg} />
                    <h1 className={pageStyles.username}>@username</h1>
                    <p className={pageStyles.fullname}>fullame</p>
                    <p>Total blogs-total reads</p>
                    <div className={pageStyles.editProfileDiv}>
                        <Link className={`${pageStyles.editBtn} ${comStyles.btn_light}`}>Edit Profile</Link>
                    </div>
                </div>
            </section>
        </AnimationWrapper>
    )
}

export default Profile