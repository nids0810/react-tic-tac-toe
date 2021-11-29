import './App.css'
import { useState } from 'react'
import GameIcon from './component/GameIcon'
import { checkGameStatus } from './GameLogic'
import { FaPlay } from 'react-icons/fa'

const emptyGame = ['', '', '', '', '', '', '', '', '']

function App() {
	const [game, setGame] = useState(['', '', '', '', '', '', '', '', ''])
	const [player, setPlayer] = useState('x')
	const [gameIsPlaying, setGameStatus] = useState(false)
	const [gameText, setGameText] = useState('Start the Game')
	const [gameStats, setGameStats] = useState({
		gameCount: 0,
		xScore: 0,
		oScore: 0,
		drawScore: 0,
	})
	const [winCombination, setWinCombination] = useState([])

	const play = (id) => {
		if (game[id] === '') {
			let newGame = game
			newGame[id] = player
			setGame(newGame)
			let gameStatus = checkGameStatus(game, player)
			if (!gameStatus.isPlaying) {
				setGameStatus(gameStatus.isPlaying)
				setGameText(gameStatus.text)
				if (gameStatus.combination.length === 3) {
					setWinCombination(gameStatus.combination)
				}
				if (gameStatus.winner === 'x') {
					setGameStats({
						...gameStats,
						xScore: gameStats.xScore + 1,
						gameCount: gameStats.gameCount + 1,
					})
				} else if (gameStatus.winner === 'o') {
					setGameStats({
						...gameStats,
						oScore: gameStats.oScore + 1,
						gameCount: gameStats.gameCount + 1,
					})
				} else {
					setGameStats({
						...gameStats,
						drawScore: gameStats.drawScore + 1,
						gameCount: gameStats.gameCount + 1,
					})
				}
			} else {
				setPlayer(player === 'x' ? 'o' : 'x')
			}
		} else {
			console.log(id + ' is already occupied')
		}
	}

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
		console.log(gameStats)
	}

	return (
		<div className='app'>
			<div className='appHeader'>
				<h2>Tic Tac Toe</h2>
				{gameIsPlaying && <h4>Turn: Player {player.toUpperCase()}</h4>}
				{!gameIsPlaying && <h4>{gameText}</h4>}
			</div>
			<div className='appBody'>
				<div className='appGame'>
					{!gameIsPlaying && (
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
						<span>Game #</span>
						<span>{gameStats.gameCount}</span>
					</div>
					<div className='appGameScore'>
						<span>Player X</span>
						<span>{gameStats.xScore}</span>
					</div>
					<div className='appGameScore'>
						<span>Player O</span>
						<span>{gameStats.oScore}</span>
					</div>
					<div className='appGameScore'>
						<span>Draw</span>
						<span>{gameStats.drawScore}</span>
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
