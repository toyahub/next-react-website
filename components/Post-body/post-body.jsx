import styles from 'components/Post-body/post-body.module.css'

export default function PostBody({ children }) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}