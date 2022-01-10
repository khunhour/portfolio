export const projects = [
	{
		title: "dev:store",
		description: (
			<p>
				dev:store is a cross-platform e-commerce shopping website build
				using <span>React</span>. The app allows users to browser
				through products, add item to wishlist/cart, and checkout by
				utilizing <a href="https://fakestoreapi.com/">Fake Store API</a>{" "}
				along with <span>React Hooks</span>. Route handling for the
				entire app is done by implementing <span>React Router</span>.
			</p>
		),
		challenges: (
			<p>
				One issue that came up during this project is that I was passing
				the same state as props through multiples component hierarchy.
				This issue introduced me <span>useContext</span> which I finally
				implemented into the project.
			</p>
		),
		image: "/assets/projectImages/devstore.png",
		tags: [
			"React",
			"React Router",
			"React Hooks",
			"FakeStore API",
			"JavaScript",
			"HTML/CSS",
		],
		source: "https://github.com/khunhour/shopping-cart",
		demo: "https://khunhour.github.io/shopping-cart/",
	},
	{
		title: "Battleship",
		description: (
			<p>
				Battleship is a fully responsive game developed with{" "}
				<span>TDD</span> ideology in mind. By using <span>Jest</span>, a
				series of <span>unit tests</span> are created to test public
				functions/methods in order to reduce bugs and errors for the
				overall project. AI is also implemented for the computer to make
				smart and strategic moves.
			</p>
		),
		challenges: (
			<p>
				the challenge of this project is all about unit tests. I learned
				a lot a <span>TDD</span> as well as how important it is for code
				quality. Admittedly, this is also the first time in a project
				that I dare myself to finish thinking about the logic and tests
				of the game first, before starting to think of how it would
				look. It was hard at first, but it was smooth sailing after
				that.
			</p>
		),
		image: "/assets/projectImages/battleship.png",
		tags: ["Unit Testing", "Jest", "JavaScript", "Webpack", "HTML/CSS"],
		source: "https://github.com/khunhour/battleship",
		demo: "https://khunhour.github.io/battleship/",
	},
	{
		title: "Weather App",
		description: (
			<p>
				A fully responsive weather application that enables users to
				search weather information via city's name. By leveraging data
				from{" "}
				<a href="https://openweathermap.org/">OpenWeatherMap API</a>,
				the app displays the current weather forecast, hourly forecast
				for the next 24-hours as well as daily forecast for the next 7
				days. It also includes a toggle to switch between Celsius and
				Fahrenheit.
			</p>
		),
		challenges: (
			<p>
				During this project, one notable challenge that I faced was
				dealing with time zone conversion. It did cause a little bit
				headache, but I learned a lot about how <span>UTC</span> and{" "}
				<span>time zone</span> works.{" "}
			</p>
		),
		image: "/assets/projectImages/weatherApp.png",
		tags: ["OpenWeatherMap API", "JavaScript", "Async&Await", "HTML/CSS"],
		source: "https://github.com/khunhour/weather_app",
		demo: "https://khunhour.github.io/weather_app/",
	},
	{
		title: "WhatToDo",
		description: (
			<p>
				WhatToDo is a to-do list app that lets users easily organize
				their tasks and projects. It is built using{" "}
				<span>JavaScript ES6 Modules</span> and bundled using{" "}
				<span>Webpack</span>. To efficiently format date,{" "}
				<a href="https://date-fns.org/">date-fns Library</a> is
				utilized. A light and dark mode toggle is incorporated into the
				app as well.
			</p>
		),
		challenges: (
			<p>
				This project was very fun to work on, but I did encountered some
				problems along the way especially when I tried to implement a{" "}
				<span>drag-and-drop</span> feature in order to rearrange
				projects. I managed to get it to work, but I think the code can
				be a bit cleaner.
			</p>
		),
		image: "/assets/projectImages/WhatToDo.png",
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
