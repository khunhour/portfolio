export const projects = [
	{
		title: "dev:store",
		description:
			<p>dev:store is a cross-platform e-commerce shopping website build using React. The app allows users to browser
				 through products, add item to wisthlist/cart, and checkout by utilizing <a href="https://fakestoreapi.com/">Fake Store API</a> along with <span>React Hooks</span>.
				  <span>React Router</span> is also used to implement route handling for the entire app.</p>,
		challenges: <p>One issue that came up during this project is that I was passing the same state as props 
			through multiples component hierarchy. This issue introduced me <span>useContext</span>
			 which I finally implemented into the project.</p>,
		image: "/images/projectImages/devstore.png",
		tags: ["React", "React Router","React Hooks", "FakeStore API", "JavaScript", "HTML/CSS" ],
		source: "https://github.com/khunhour/shopping-cart",
		demo: "https://khunhour.github.io/shopping-cart/",
	},
	{
		title: "Battleship",
		description: "lorem",
		image: "/images/projectImages/battleship.png",
		tags: ["Unit Testing", "Jest", "JavaScript", "Webpack", "HTML/CSS"],
		source: "https://github.com/khunhour/battleship",
		demo: "https://khunhour.github.io/battleship/",
	},
	{
		title: "Weather App",
		description: <p>A fully responsive weather application that enables users to search weather 
			information via city's name. By leveraging weather data from <a href="https://openweathermap.org/">OpenWeatherMap API</a>, the app displays 
			the current weather forecast, hourly forecast for the next 24-hours as well as daily forecast
			 for the next 7 days. It also includes a toggle to switch between Celsius and Fahrenheit.</p>,
		challenges: <p>During this project, one notable challenge that I faced was dealing with time zone conversion. It did cause a little
			 bit headache, but I learned a lot about how <span>UTC</span> and <span>time zone</span> works. </p>,
		image: "/images/projectImages/weatherApp.png",
		tags: [
			"OpenWeatherMap API",
			"JavaScript",
			"Async&Await",
			"HTML/CSS",
		],
		source: "https://github.com/khunhour/weather_app",
		demo: "https://khunhour.github.io/weather_app/",
	},
	{
		title: "WhatToDo",
		description: "lorem",
		image: "/images/projectImages/WhatToDo.png",
		tags: [
			 "JavaScript",
			  "date-fns Library",
			  "localStorage",
			  "Webpack",
			   "HTML/CSS",
		],
		source: "https://github.com/khunhour/todo_list",
		demo: "https://khunhour.github.io/todo_list/",
	},
];
