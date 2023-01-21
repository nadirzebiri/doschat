import { Inter } from "@next/font/google";
import Header from "../components/header";
import Message from "../components/message";
import styles from "../styles/index.module.css";
import Chatbox from "../components/chatbox";
import io from "socket.io-client";
import { useEffect, useState } from "react";

// yes i use lets because useEffect runs twice
let socket;
let usernameSent;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [username, setUsername] = useState("Anonymous");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const socketInitializer = async (messages) => {
			await fetch("/api/socketio");
			if (!socket) {
				socket = io();
			}
			socket.on("sendMessage", ({ message, username }) => {
				setMessages([
					...messages,
					{
						authorName: username,
						content: message,
						byAuthUser: false,
					},
				]);
			});
		};

		socketInitializer(messages, setMessages);
	}, [messages]);

	useEffect(() => {
		// let user provide a username
		if (!usernameSent) {
			const promptValue = prompt("Enter your username", "Anonymous");
			if (promptValue) {
				setUsername(promptValue);
			}

			usernameSent = true;
		}
	}, [setUsername]);

	return (
		<>
			<Header />
			<div className={styles.messagesContainer}>
				<Message
					authorName='Doschat developer'
					message='Welcome to Doschat! You can start chatting right away!'
					byAuthUser={false}
				/>
				{messages.map((message, index) => (
					<Message
						key={`message-${index}`}
						authorName={message.byAuthUser ? username : message.authorName}
						message={message.content}
						byAuthUser={message.byAuthUser}
					/>
				))}
			</div>

			<Chatbox
				onSubmit={(message) => {
					setMessages([
						...messages,
						{
							content: message,
							byAuthUser: true,
						},
					]);
					socket.emit("sendMessage", { message, username });
				}}
			/>
		</>
	);
}
