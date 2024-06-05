import React from 'react'
import styles from './component.module.css'


const Quote = ({ quote, caption }) => {
    return (
        <div className={styles.quote}>
            <p className={styles.quoteQuote}>{quote}</p>
            <p className={styles.quoteCaption}>{caption}</p>
        </div>
    )
}

const List = ({ style, items }) => {
    return (
        <ol style={{ paddingLeft: "20px" }}>
            {
                items.map((listitem, i) => {
                    return <li style={{ marginTop: "16px", marginBottom: "16px" }} key={i} dangerouslySetInnerHTML={{ __html: listitem }}></li>
                })
            }

        </ol>
    )
}

const Code = ({ code }) => {
    return (
        <div className={styles.code}>
            <p dangerouslySetInnerHTML={{ __html: code }}></p>
        </div>
    )
}


const BlogContent = ({ block }) => {
    let { type, data } = block;

    if (type == "paragraph") {
        return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
    }
    if (type == "header") {
        if (data.level == 3) {
            return <h3 className={styles.header3} dangerouslySetInnerHTML={{ __html: data.text }}></h3>
        } else if (data.level == 2) {
            return <h2 className={styles.header2} dangerouslySetInnerHTML={{ __html: data.text }}></h2>
        }
    }
    // if (type=="image") {
    //     return <img src={data.file.uri} caption={data.caption}/>
    // }

    if (type == "quote") {
        return <Quote quote={data.text} caption={data.caption} />
    }

    if (type == "list") {
        return <List style={data.style} items={data.items} />
    }
    if (type == "code") {
        return <Code code={data.code} />
    }

}

export default BlogContent