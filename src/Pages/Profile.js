import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <section>
            <div>
                <img />
                <h1>@username</h1>
                <p>fullame</p>
                <p>Total blogs-total reads</p>
                <div>
                    <Link>Edit Profile</Link>
                </div>
            </div>
        </section>
    )
}

export default Profile