import { Inter } from "@next/font/google";
import Header from "../../components/header";
import utilsStyles from "../styles/utils.module.css";
import Message from "../../components/message";
import styles from "../styles/index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Header />
			<div className={utilsStyles.container}>
				<div className={styles.messagesContainer}>
					<Message
						authorName='bob'
						message='This is a message example !! Did you know that i like this app. crazy ik. random stuff'
						byAuthUser={false}
					/>
					<Message
						authorName='bob'
						message='This is a message example !! Did you know that i like this app. crazy ik. random stuff'
						byAuthUser={true}
					/>
					<Message
						authorName='bob'
						message='This is a message example !! Did you know that i like this app. crazy ik. random stuff'
						byAuthUser={false}
					/>
				</div>
			</div>
		</>
	);
}
