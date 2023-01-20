import { Inter } from "@next/font/google";
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Header />
			<h1>test</h1>
			testtt
		</>
	);
}
