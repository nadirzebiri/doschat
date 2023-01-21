import styles from "./chatbox.module.css";

export default function Chatbox({ onSubmit }) {
	return (
		<form
			className={styles.chatContainer}
			onSubmit={(event) => {
				// Stop the form from submitting and refreshing the page.
				event.preventDefault();

				const message = event.target.message.value;
				const isMessageEmpty = message.replace(/ /g, "") === "";

				if (!isMessageEmpty) {
					onSubmit(message);
					event.target.message.value = "";
				}
			}}
		>
			<div className={styles.chatbox}>
				<input
					className={styles.chatInput}
					placeholder='Send a message...'
					type='text'
					id='message'
				/>
				<button type='submit' className={styles.chatSendBtn}>
					Send
				</button>
			</div>
		</form>
	);
}
