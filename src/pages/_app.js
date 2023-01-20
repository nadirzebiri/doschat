import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Layout from "../../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}
