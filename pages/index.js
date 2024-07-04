import StartPage from './enter/StartPage.js'
import ConnectionType from './enter/ConnectionType.js';
import GameType from './enter/GameType.js';
import ModeTournament from './game/ModeTournament.js';
import GameTournament from './game/GameTournament.js';
import WaitingPlayer from './game/online/WaitingPlayer.js';
import SetNameTournament from './game/local/SetNameTournament.js';
import GameAI from './game/GameAI.js';
import SetNameAI from './game/local/SetNameAI.js';

export default (main) => {
	const start = () => new StartPage(main);
	const connection_type = () => new ConnectionType(main);
	const game_type = () => new GameType(main);
	const mode_tournament = () => new ModeTournament(main);
	const game_tournament = () => new GameTournament(main);
	const waiting_player = () => new WaitingPlayer(main);
	const set_name_tournament = () => new SetNameTournament(main);
	const game_ai = () => new GameAI(main);
	const set_name_ai = () => new SetNameTournament(main);

	return {
		start,
		connection_type,
		game_type,
		mode_tournament,
		game_tournament,
		waiting_player,
		set_name_tournament,
		game_ai,
		set_name_ai,
	};
};