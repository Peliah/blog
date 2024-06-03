import React, { createContext, useContext, useState } from 'react'
import { UserContext } from '../App'
import { Navigate } from 'react-router-dom';
import BlogEditor from './BlogEditor';
import BlogPublish from './BlogPublish';

const blogStructure = {
    title: '',
    banner: '',
    content: [],
    tags: [],
    desc: '',
    author: { user: {} },
}

export const EditorContext = createContext({});

const Editor = () => {

    const [blog, setBlog] = useState(blogStructure);
    const [editorState, setEditorState] = useState("editor")

    let { userAuth } = useContext(UserContext);

    return (
        <EditorContext.Provider value={{ blog, setBlog, editorState, setEditorState }}>
            {
                userAuth === null ? <Navigate to={'/sign-in'} /> :
                    editorState === "editor" ? <BlogEditor /> : <BlogPublish />
            }
        </EditorContext.Provider>
    )
}

export default Editor