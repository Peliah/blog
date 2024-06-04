import { RxCross2 } from "react-icons/rx";
import comStyles from './component.module.css'
import { useContext } from "react";
import { EditorContext } from "../Pages/Editor";
const Tag = ({ tag, tagIndex }) => {

    let { blog, blog: { tags }, setBlog } = useContext(EditorContext)

    const handleDeleteTag = (e) => {
        tags = tags.filter(t => t != tag);
        setBlog({ ...blog, tags })
    }

    const handleTageEdit = (e) => {
        if (e.keyCode == 13 || e.keyCode == 188) {
            e.preventDefault();
            let currentTag = e.target.value;
            tags[tagIndex] = currentTag;
            setBlog({ ...blog, tags })
            e.target.setAttribute("contentEditable", false);
        }
    }

    const makeEditable = (e) => {

        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    }

    return (
        <div className={comStyles.tagDiv}>
            <p
                className={comStyles.tagP}
                contentEditable="true"
                onKeyDown={handleTageEdit}
                onClick={makeEditable}
            >{tag}</p>
            <button className={comStyles.tagButton}
                onClick={handleDeleteTag}
            >
                <RxCross2 size={20} />
            </button>
        </div>
    );
}

export default Tag;