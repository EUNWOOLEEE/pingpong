import PongGame from '../../components/GameLocal.js'

export async function playGame($state, $target) {
	const $game = $target.querySelector(
		'[data-component="game-div"]'
	);

	const pongGame = new PongGame($game, $state);
	return await waitForGameEnd(pongGame);
}

export function waitForGameEnd(pongGame) {
	return new Promise(resolve => {
		const intervalID = setInterval(() => {
			const value = pongGame.isGameEnd();
			if (value != '') {
				clearInterval(intervalID);
				resolve(value);
			}
		}, 100);
	})
}

export function setComponentOpacity(componentName, value) {
	const $component = document.querySelector(componentName);

	$component.style.opacity = value;
}

export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}