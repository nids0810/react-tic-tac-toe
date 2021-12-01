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

//get game position
const getGamePosition = (game, player) => {
	let output = { player: [], opponent: [], empty: [] }
	game.forEach((val, index) => {
		if (val === player) output.player.push(index)
		else if (val === '') output.empty.push(index)
		else output.opponent.push(index)
	})
	return output
}

// check game status
export const checkGameStatus = (game, player) => {
	let gameStatus = { status: true, winner: null, combination: [] }
	let gamePosition = getGamePosition(game, player)
	let isWinner = checkWinner(gamePosition.player)

	if (isWinner.status) {
		gameStatus = {
			status: false,
			winner: player,
			combination: isWinner.combination,
		}
	} else {
		if (gamePosition.empty.length === 0) {
			gameStatus = {
				status: false,
				winner: null,
				combination: [],
			}
		}
	}
	return gameStatus
}

const checkWinner = (position) => {
	let iswinner = { status: false, combination: [] }
	let count = 0
	if (position.length >= 3) {
		for (let item of winnginCombination) {
			for (let index of item) {
				if (position.indexOf(index) === -1) {
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

// Get Bot Next Position
export const getBotNextPosition = (game, player) => {
	const gamePosition = getGamePosition(game, player)
	let botNextPosition = attackingPosition(gamePosition)
	if (botNextPosition === -1) botNextPosition = defendingPosition(gamePosition)
	if (botNextPosition === -1) botNextPosition = randomPosition(gamePosition)

	return botNextPosition
}

// Random position
const randomPosition = (position) => {
	var randomPositionId =
		position.empty[Math.floor(Math.random() * position.empty.length)]
	return randomPositionId
}

// Defending position
const defendingPosition = (position) => {
	let defendingPositionId = -1
	for (let value of position.empty) {
		let newPosition = [...position.opponent, value]
		const isWinner = checkWinner(newPosition)
		if (isWinner.status) {
			defendingPositionId = value
			break
		}
	}
	return defendingPositionId
}

// Attacking position
const attackingPosition = (position) => {
	let attackingPositionId = -1
	for (let value of position.empty) {
		let newPosition = [...position.player, value]
		const isWinner = checkWinner(newPosition)
		if (isWinner.status) {
			attackingPositionId = value
			break
		}
	}
	return attackingPositionId
}
