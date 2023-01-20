import Image from "next/image";
import styles from "./header.module.css";
import utilsStyles from "../src/styles/utils.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<Image
				className={styles.icon}
				src='/logo.svg'
				height='77'
				width='55'
				alt='logo'
			/>
			<h1 className={utilsStyles.heading}>Doschat - talk with friends</h1>
		</div>
	);
}
