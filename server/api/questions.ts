export const elos = [
	{
		text: 'Ferro',
		value: 'iron',
	},
	{
		text: 'Bronze',
		value: 'bronze',
	},
	{
		text: 'Prata',
		value: 'silver',
	},
	{
		text: 'Ouro',
		value: 'gold',
	},
	{
		text: 'Platina',
		value: 'platinum',
	},
	{
		text: 'Diamante',
		value: 'diamond',
	},
	{
		text: 'Mestre',
		value: 'master',
	},
	{
		text: 'Grão-Mestre',
		value: 'grandmaster',
	},
	{
		text: 'Desafiante',
		value: 'challenger',
	},
]

export const tiers = [
	{
		text: 'IV',
		value: '4',
	},
	{
		text: 'III',
		value: '3',
	},
	{
		text: 'II',
		value: '2',
	},
	{
		text: 'I',
		value: '1',
	},
]

export const yesNo = [
	{
		text: 'Sim',
		value: 'yes',
	},
	{
		text: 'Não',
		value: 'no',
	},
]

interface IQuestion {
	title: string
	id: string
	options: {
		text: string
		value: string
	}[]
}

export const questions: IQuestion[] = [
	{
		title: 'Qual é a liga atual?',
		id: 'currentElo',
		options: elos,
	},
	{
		title: 'Qual é o tier atual?',
		id: 'currentTier',
		options: tiers,
	},
	{
		title: 'Qual liga desejada?',
		id: 'desiredElo',
		options: elos,
	},
	{
		title: 'Qual tier desejado?',
		id: 'desiredTier',
		options: tiers,
	},
	// {
	// 	title: 'Qual seu PDL atual?',
	// 	input: '0 ~ 100',
	// },
	{
		title: 'Quanto PDL ganha por vitória?',
		id: 'pdlPerWin',
		options: [
			{
				text: 'Abaixo de 15',
				value: '-15',
			},
			{
				text: 'Acima de 15',
				value: '+15',
			},
		],
	},
	{
		title: 'Qual o modo de jogo desejado?',
		id: 'gameMode',
		options: [
			{
				text: 'Solo/Duo',
				value: 'solo',
			},
			{
				text: 'Flex',
				value: 'flex',
			},
		],
	},
	{
		title: 'Deseja que o serviço seja feito com o chat offline?',
		id: 'offlineChat',
		options: yesNo,
	},
	{
		title: 'Tecla do Flash?',
		id: 'flashKey',
		options: [
			{
				text: 'D',
				value: 'd',
			},
			{
				text: 'F',
				value: 'f',
			},
		],
	},
	{
		title: 'Deseja que o jobber jogue em uma lane específica?',
		id: 'specificLane',
		options: [
			{
				text: 'Não',
				value: 'no',
			},
			{
				text: 'Top',
				value: 'top',
			},
			{
				text: 'Jungle',
				value: 'jungle',
			},
			{
				text: 'Mid',
				value: 'mid',
			},
			{
				text: 'ADC',
				value: 'adc',
			},
			{
				text: 'Suporte',
				value: 'support',
			},
		],
	},
	{
		title: 'Deseja uma vitória extra ao final do serviço?',
		id: 'extraWin',
		options: yesNo,
	},
	{
		title: 'Deseja que seja feito em um horário específico?',
		id: 'specificSchedule',
		options: [
			{
				text: 'Não',
				value: 'no',
			},
			{
				text: 'Manhã',
				value: 'morning',
			},
			{
				text: 'Tarde',
				value: 'afternoon',
			},
			{
				text: 'Noite',
				value: 'night',
			},
		],
	},
	{
		title: 'Deseja um serviço expresso? (redução no prazo de entrega)',
		id: 'expressService',
		options: yesNo,
	},
	{
		title: 'Deseja que as partidas sejam jogadas APENAS solo?',
		id: 'soloOnly',
		options: yesNo,
	},
	{
		title: 'Deseja prioridade na fila?',
		id: 'priorityQueue',
		options: yesNo,
	},
]

export default defineEventHandler(event => {
	return questions
})
