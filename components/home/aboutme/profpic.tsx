"use client";

const ProfPic = () => {
	return (
		<div className="relative">
			<div className="p-4">
				<img
					className="rounded-full object-contain border-b-8 border-x-2 border-black dark:border-purple-500 shadow-lg dark:shadow-purple-800 shadow-black"
					src={
						"https://dl.dropboxusercontent.com/scl/fi/bwipx7607ro1gb5akaarz/profpic.jpeg?rlkey=ec61wmz84rno3339ssxcngvky"
					}
				/>
			</div>
			<div className="absolute rounded-xl p-2 left-0 right-0 bottom-0 text-primary bg-secondary/50 backdrop-blur-lg font-bold text-lg shadow-lg">
				Joona Kettunen
			</div>
		</div>
	);
};

export default ProfPic;
