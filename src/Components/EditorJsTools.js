
import Embed from "@editorjs/embed";
import Code from '@editorjs/code'
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Header from "@editorjs/header";

export const tools = {
    embed: Embed,
    list: List,
    code: Code,
    image: Image,
    header: {
        class: Header,
        inlineToolbar: true,
        config: {
            levels: [2, 3, 4],
            defaultLevel: 2
        }
    },
    quote: Quote,
    marker: Marker,
    inlineCode: InlineCode
}