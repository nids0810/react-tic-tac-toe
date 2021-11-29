const winnginCombination = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

export const checkGameStatus = (game, player) => {
	let gameStatus = { isPlaying: true, winner: null, text: '', combination: [] }
	let isWinner = checkWinner(game, player)

	if (isWinner.status) {
		gameStatus = {
			isPlaying: false,
			winner: player,
			text: player.toUpperCase() + ' is a winner',
			combination: isWinner.combination,
		}
	} else {
		let isTie = checkTie(game)
		if (isTie) {
			gameStatus = {
				isPlaying: false,
				winner: null,
				text: "It's a draw",
				combination: [],
			}
		}
	}

	return gameStatus
}

export const checkWinner = (game, player) => {
	let output = []
	game.forEach((val, index) => {
		if (val === player) output.push(index)
	})

	let iswinner = { status: false, combination: [] }
	let count = 0
	if (output.length >= 3) {
		for (let item of winnginCombination) {
			for (let index of item) {
				if (output.indexOf(index) === -1) {
					break
				} else {
					count = count + 1
				}
			}
			if (count === 3) {
				iswinner.status = true
				iswinner.combination = item
				break
			} else {
				count = 0
			}
		}
	}
	return iswinner
}

export const checkTie = (game) => {
	const isTie = game.some((value) => {
		return value === ''
	})
	return !isTie
}
