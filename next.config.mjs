/** @type {import('next').NextConfig} */
const nextConfig = {
	loaders: [
		{
			test: /\.html$/,
			loader: "html-loader?attrs[]=video:src",
		},
		{
			test: /\.mp4$/,
			loader: "url?limit=10000&mimetype=video/mp4",
		},
	],
};

export default nextConfig;
