import './App.css'
import { useState, useEffect, useCallback } from 'react'
import GameIcon from './component/GameIcon'
import BotSwitch from './component/BotSwitch'
import logo from './asset/logo.png'
import { checkGameStatus, getBotNextPosition } from './GameLogic'
import { FaPlay } from 'react-icons/fa'

const emptyGame = ['', '', '', '', '', '', '', '', '']

function App() {
	const [game, setGame] = useState(['', '', '', '', '', '', '', '', ''])
	const [player, setPlayer] = useState('x')
	const [gameStatus, setGameStatus] = useState(false)
	const [gameText, setGameText] = useState('Start the Game')
	const [gameStats, setGameStats] = useState({
		gameCount: 0,
		xScore: 0,
		oScore: 0,
		drawScore: 0,
	})
	const [winCombination, setWinCombination] = useState([])
	const [botStatus, setBotStatus] = useState(true)

	const play = useCallback(
		(id) => {
			if (game[id] === '') {
				let newGame = game
				newGame[id] = player
				setGame(newGame)
				let curGameStatus = checkGameStatus(game, player)
				if (curGameStatus.status) {
					setPlayer(player === 'x' ? 'o' : 'x')
				} else {
					setGameStatus(curGameStatus.status)
					if (curGameStatus.combination.length === 3) {
						setWinCombination(curGameStatus.combination)
					}
					if (curGameStatus.winner === 'x') {
						setGameText('Winner: Player X')
						setGameStats({
							...gameStats,
							xScore: gameStats.xScore + 1,
							gameCount: gameStats.gameCount + 1,
						})
					} else if (curGameStatus.winner === 'o') {
						setGameText('Winner: Player O')
						setGameStats({
							...gameStats,
							oScore: gameStats.oScore + 1,
							gameCount: gameStats.gameCount + 1,
						})
					} else {
						setGameText("It's a draw")
						setGameStats({
							...gameStats,
							drawScore: gameStats.drawScore + 1,
							gameCount: gameStats.gameCount + 1,
						})
					}
				}
			} else {
				console.log(id + ' is already occupied')
			}
		},
		[game, gameStats, player]
	)

	useEffect(() => {
		if (botStatus && player === 'o' && gameStatus) {
			play(getBotNextPosition(game, player))
		}
	}, [game, gameStatus, botStatus, player, play])

	const checkIndexInWinCombination = (index) => {
		let status = false
		if (winCombination.length === 3) {
			if (winCombination.indexOf(index) !== -1) {
				status = true
			}
		}
		return status
	}

	const newGame = () => {
		setGame([...emptyGame])
		setPlayer('x')
		setGameStatus(true)
		setGameText('Start the Game')
		setWinCombination([])
	}

	return (
		<div className='app'>
			<div className='appHeader'>
				<div className='appTitle'>
					<img className='appLogo' src={logo} alt='logo' />
					<span>Tic Tac Toe</span>
				</div>
				<BotSwitch botStatus={botStatus} setBotStatus={setBotStatus} />
				{gameStatus && (
					<h4 className='appSubTitle'>Turn: Player {player.toUpperCase()}</h4>
				)}
				{!gameStatus && <h4 className='appSubTitle'>{gameText}</h4>}
			</div>
			<div className='appBody'>
				<div className='appGame'>
					{!gameStatus && (
						<div className='appBtnContainer'>
							<FaPlay className='appPlayBtn' onClick={newGame} />
						</div>
					)}
					{game.map((item, itemindex) => (
						<div
							key={itemindex}
							className={
								checkIndexInWinCombination(itemindex)
									? 'appGameCell selected'
									: 'appGameCell'
							}
							onClick={() => play(itemindex)}
						>
							<GameIcon item={item} />
						</div>
					))}
				</div>
				<div className='appGameStats'>
					<div className='appGameScore'>
						<span className='appGameScoreHeader'>Game #</span>
						<span className='appGameScoreData'>{gameStats.gameCount}</span>
					</div>
					<div className='appGameScore'>
						<span className='appGameScoreHeader'>Player X</span>
						<span className='appGameScoreData'>{gameStats.xScore}</span>
					</div>
					<div className='appGameScore'>
						<span className='appGameScoreHeader'>Player O</span>
						<span className='appGameScoreData'>{gameStats.oScore}</span>
					</div>
					<div className='appGameScore'>
						<span className='appGameScoreHeader'>Draw</span>
						<span className='appGameScoreData'>{gameStats.drawScore}</span>
					</div>
				</div>
			</div>
			<footer className='appFooter'>
				<span>Copyright © 2021 Tic Tac Toe | Nidhi Singh</span>
			</footer>
		</div>
	)
}

export default App
