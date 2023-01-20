import styles from "./message.module.css";

export default function Message({ authorName, message, byAuthUser }) {
	return byAuthUser ? (
		<div className={`${styles.message} ${styles.messageAuthored}`}>
			<p className={styles.msgAuthor}>{`You (${authorName})`}</p>
			<p className={styles.msgContent}>{message}</p>
		</div>
	) : (
		<div className={`${styles.message} ${styles.messageNotAuthored}`}>
			<p className={styles.msgAuthor}>{authorName}</p>
			<p className={styles.msgContent}>{message}</p>
		</div>
	);
}
