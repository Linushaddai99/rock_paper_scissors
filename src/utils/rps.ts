
export const rpsChoices = [
    { name: 'rock', id: 1 },
    { name: 'paper', id: 2 },
    { name: 'scissors', id: 3 },
]


export const checkBasicWinner = (playerChoice: number, computerChoice: number) => {
    if (playerChoice === computerChoice) return 'draw';
    if (playerChoice === 1 && computerChoice === 3) return 'player';
    if (playerChoice === 2 && computerChoice === 1) return 'player';
    if (playerChoice === 3 && computerChoice === 2) return 'player';
    return 'computer';
}

export const rpslsChoices = [
    { name: 'rock', id: 1 },
    { name: 'paper', id: 2 },
    { name: 'scissors', id: 3 },
    { name: 'lizard', id: 4 },
    { name: 'spock', id: 5 },
]

export const checkAdvancedWinner = (playerChoice: number, computerChoice: number) => {
    if (playerChoice === computerChoice) return 'draw';
    if (playerChoice === 1 && (computerChoice === 3 || computerChoice === 4)) return 'player';
    if (playerChoice === 2 && (computerChoice === 1 || computerChoice === 5)) return 'player';
    if (playerChoice === 3 && (computerChoice === 2 || computerChoice === 4)) return 'player';
    if (playerChoice === 4 && (computerChoice === 2 || computerChoice === 5)) return 'player';
    if (playerChoice === 5 && (computerChoice === 1 || computerChoice === 3)) return 'player';
    return 'computer';
}

export function getRandomNumber1to3() {
    return Math.floor(Math.random() * 3) + 1;
}

export function getRandomNumber1to5() {
    return Math.floor(Math.random() * 5) + 1;
}