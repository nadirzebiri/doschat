import styles from "./chatbox.module.css";

export default function Chatbox() {
	return (
		<div className={styles.chatbox}>
			<input
				className={styles.chatInput}
				placeholder='Send a message...'
				type='text'
			/>
		</div>
	);
}
