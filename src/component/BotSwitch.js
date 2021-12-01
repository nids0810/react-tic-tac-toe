import { FaUserAstronaut, FaUser } from 'react-icons/fa'

const BotSwitch = ({ botStatus, setBotStatus }) => {
	return (
		<div className='appBotSwitch'>
			<div
				className={botStatus ? 'appSwitchBtn selected' : 'appSwitchBtn'}
				onClick={() => setBotStatus(!botStatus)}
			>
				<FaUserAstronaut className='appBotSwitchIcon' />
				<span>BOT</span>
			</div>
			<div
				className={botStatus ? 'appSwitchBtn' : 'appSwitchBtn selected'}
				onClick={() => setBotStatus(!botStatus)}
			>
				<FaUser className='appBotSwitchIcon' />
				<span>2PLAYERS</span>
			</div>
		</div>
	)
}

export default BotSwitch
