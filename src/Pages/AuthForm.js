import React, { useContext, useRef } from 'react'
import { AnimationWrapper, InputBox } from '../Components'
import { LuUser } from "react-icons/lu";
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLock } from "react-icons/ci";
import styles from './pages.module.css';
import style from '../Components/component.module.css'
import { Link, Navigate, json } from 'react-router-dom';
import { users } from '../json/user';
import { storeInSession } from '../Utils/Sessions';
import { toast, Toaster } from 'react-hot-toast';
import { UserContext } from '../App';

const AuthForm = ({ type }) => {

    const authForm = useRef();
    let { userAuth, setUserAuth } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData(authForm.current);
        let formData = {}

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        if (type !== "sign-up") {
            const user = users.find(user => user.email === formData.email && user.password === formData.password);
            if (user) {
                toast.success(`Welcome back ${user.name}`, 1000);
                storeInSession("user", JSON.stringify(user));
                setUserAuth(user);
            }
            else {
                toast.error("User doesn't exist!")
            }
        } else {
            toast.error("Only Sign in option, email: admin@mail.com, password:admin ", 10000)
        }

        console.log(formData);
    }
    return (
        userAuth !== null ?
            <Navigate to='/' />
            :
            <AnimationWrapper keyValue={type}>
                <section className={`${styles.h_cover} ${styles.authFormSection}`}>
                    <form ref={authForm} className={styles.authForm}>
                        <h1 className={styles.authTitle}>{type === "sign-in" ? "Welcome Back" : "Join Us Today"}</h1>
                        {
                            type !== "sign-in" ?
                                <InputBox
                                    name="fullname"
                                    type="text"
                                    placeholder="Full name"
                                    icon={<LuUser />}

                                />
                                :
                                ""
                        }
                        <InputBox
                            name="email"
                            type="email"
                            placeholder="Email"
                            icon={<HiOutlineEnvelope />}

                        />
                        <InputBox
                            name="password"
                            type="password"
                            placeholder="Password"
                            icon={<CiLock />}

                        />
                        <button className={` ${styles.authBtn} ${style.btn} ${style.btn_dark}`} onClick={handleSubmit}>
                            {type.replace("-", " ")}
                        </button>

                        {
                            type === "sign-in" ?
                                <p>Don't have an account ?
                                    <Link to='/sign-up'> Sign up here</Link>
                                </p>
                                :
                                <p>Already a member ?
                                    <Link to='/sign-in'> Sign in here</Link>
                                </p>
                        }
                    </form>

                </section>
                <Toaster />
            </AnimationWrapper>
    )
}

export default AuthForm