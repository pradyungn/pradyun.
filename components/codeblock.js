import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import dark from "../styles/mountain"
import styles from "../styles/Code.module.css"

export default (props) => {
    const { node, inline, className, children, ...props2} = props
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={dark}
        language={match[1]}
        PreTag="div"
        customStyle={{background: "var(--lbg)"}}
        {...props2}
      />
    ) : (
      <code className={`${styles.inline} ${className}`} {...props2}>
        {children}
      </code>    )
}
