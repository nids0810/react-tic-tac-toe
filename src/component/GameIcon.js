import { FaTimes, FaRegCircle } from 'react-icons/fa'

const GameIcon = ({ item }) => {
	if (item === 'x') return <FaTimes className='gameXIcon' />
	else if (item === 'o') return <FaRegCircle className='gameOIcon' />
	else return null
}

export default GameIcon
