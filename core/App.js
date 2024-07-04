import Router from "./Router.js"
import Component from "./Component.js"
import createPages from "../pages/index.js"
import Three from "../pages/Background.js"

export default class App extends Component {
	template() {
		return `
		<head></head>
		<main>
			<canvas data-component="three"></canvas>
		</main>
		`;
	}
	
	mounted() {
		const $three = this.$target.querySelector(
			'[data-conponent="three"]'
		);
		new Three($three);
		
		const $main = this.$target.querySelector('main');
		const pages = createPages($main);

		const router = new Router($main);
		router.addRoute('#/', pages.start);
		router.addRoute('#connection_type/', pages.connection_type);
		router.addRoute('#game_type/', pages.game_type);
		router.addRoute('#mode_tournament/', pages.mode_tournament);
		router.addRoute('#game_tournament/', pages.game_tournament);
		router.addRoute('#waiting_player/', pages.waiting_player);
		router.addRoute('#set_name_tournament/', pages.set_name_tournament);
		router.addRoute('#game_ai/', pages.game_ai);
		router.addRoute('#set_name_ai/', pages.set_name_ai);

		router.start();
	}
}