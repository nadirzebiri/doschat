import { Inter } from "@next/font/google";
import Header from "../../components/header";
import Message from "../../components/message";
import styles from "../styles/index.module.css";
import Chatbox from "../../components/chatbox";
import io from "socket.io-client";
import { useEffect, useState } from "react";
let socket;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	useEffect(() => {
		socketInitializer();
	}, []);

	const socketInitializer = async () => {
		await fetch("/api/socketio");
		if (!socket) {
			socket = io();

			socket.on("test", () => {
				console.log("test");
			});
		}
	};

	return (
		<>
			<Header />
			<div className={styles.messagesContainer}>
				<Message
					authorName='Doschat developer'
					message='Welcome to Doschat! You can start chatting right away!'
					byAuthUser={false}
				/>
			</div>
			<Chatbox />
		</>
	);
}
