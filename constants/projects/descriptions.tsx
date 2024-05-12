export const EXPLOTRACK_DESCRIPTION = () => {
	return (
		<div>
			<p>
				Fullstack application built with the Next.js framework and utilizing the
				React library. The application is hosted on Vercel and uses a Postgres
				database. The application is a bookkeeping tool for a company that keeps
				track of company orders and the flow and transactions of explosive
				products. The application includes user authentication, extensive
				logging (with PostHog), and advanced middleware.
				<br />
				<br />
				With this project, I&apos;ve really tried to understand various security
				aspects of web development. I&apos;ve learned a lot about fullstack
				development; how to handle production databases, how to manage sessions
				client-side but also perform appropriate session authentication
				server-side, how to validate user input, email verifications, etc.
			</p>
		</div>
	);
};

export const SPOTISAVER_DESCRIPTION = () => {
	return (
		<div>
			<p>
				A useful and simple service that allows users to analyze and export
				their Spotify playlists. The service is built with Next.js and React.
				Hosted on Vercel. The service is built with a focus on user experience
				and simplicity.
				<br />
				<br />
				The data is fetched and parsed from JSON responses provided by the
				official Spotify API, and finally analyzed through my custom analyzing
				logic. This project was also the first time I implemented a rate limiter
				and understood the importance of securing your API routes.
			</p>
		</div>
	);
};

export const VISUALPATHFINDER_DESCRIPTION = () => {
	return (
		<div>
			<p>
				Fun pathfinder application built as a university assignment. The
				application is built with React and Next.js. Hosted on Railway. The
				application allows users see three different pathfinding algorithms,
				Dijkstra&apos;s, A* and Jump Point Search, in action, as well as compare
				their performance.
				<br />
				<br />
				Building the algorithms with TypeScript was maybe not the most optimal
				choice, but I wanted to make a really great UI for the application, and
				involving multiple languages would have made the project unnecessary
				complex as a university assignment. I learned a ton of the Jest library
				during the development of this project.
			</p>
		</div>
	);
};

export const TIIRASCRAPER_DESCRIPTION = () => {
	return (
		<div>
			<p>
				Simple web scraper built with Python to scrape bird observations from
				the Finnish bird observation service{" "}
				<a className="hover:underline" href="https://www.tiira.fi/">
					<em>Tiira.fi</em>
				</a>
				. The scraper is built with the BeautifulSoup library and the requests
				library. The scraper is also built as a server, so it can be left
				running for as long as needed.
				<br />
				<br />
				The scraper has built-in filtering functionality, which enables the user
				to create their own configuration files to allow/block certain species
				and/or cities. The scraper has a built-in Telegram messaging system,
				which can be configured to send user updates when new observations
				matching the predetermined criteria are found. The scraper also keeps
				track of recent history so no single observation is ever sent twice.
			</p>
		</div>
	);
};

export const BLASTCALC_DESCRIPTION = () => {
	return (
		<div>
			<p>
				Highly sophisticated calculator tool for mining engineers to create
				blasting circuit diagrams and calculate detonation delays. Application
				is built with React and Next.js. The application is hosted on Cloudflare
				Pages. The application has a modern and responsive UI built with the
				Radix UI library.
				<br />
				<br />
				The application has been built based on a real client request (initial
				software requirements specification). The application involves many
				useful tools for real-life applications, multiple layers of different
				analyzing calculations, and pathfinding algorithms to create accurate
				and safe blasting circuit diagrams.
			</p>
		</div>
	);
};

export const FLAGGAME_DESCRIPTION = () => {
	return (
		<div>
			<p>
				A completed Python desktop application built as a university assignment.
				The app is a local single-player game where the user has to guess the
				correct country of a flag. The game is built with Python and the
				user-friendly UI is powered by the Tkinter library.
				<br />
				<br />
				The game has five different game modes included, each with different
				pointing mechanisms. As an addition, the game tracks game history and
				calculates the user&apos;s lifelong statistics! During the development
				of this project, I learned a lot about the Python programming language
				in general, and especially I finally understood the importance of unit
				testing.
			</p>
		</div>
	);
};
