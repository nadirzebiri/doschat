import Head from "next/head";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>Doschat app!!</title>

				<meta name='title' content='Doschat app!!' />
				<meta
					name='description'
					content='This is a simple real-time chat app'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://metatags.io/' />
				<meta property='og:title' content='Doschat app!!' />
				<meta
					property='og:description'
					content='This is a simple real-time chat app'
				/>
				<meta
					property='og:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://metatags.io/' />
				<meta property='twitter:title' content='Doschat app!!' />
				<meta
					property='twitter:description'
					content='This is a simple real-time chat app'
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
				/>
			</Head>
			<div>{children}</div>
		</>
	);
}
