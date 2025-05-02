import { Choice, Rules } from "./type";

export const rpsChoices: Choice[] = ["rock", "paper", "scissors"];

export const rpslsChoices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];

const rules: Rules = {
    'rock': { 
        'scissors': "Rock crushes Scissors", 
        'lizard': "Rock crushes Lizard" 
    },
    'paper': { 
        'rock': "Paper covers Rock", 
        'spock': "Paper disproves Spock" 
    },
    'scissors': { 
        'paper': "Scissors cuts Paper", 
        'lizard': "Scissors decapitates Lizard" 
    },
    'lizard': { 
        'spock': "Lizard poisons Spock", 
        'paper': "Lizard eats Paper" 
    },
    'spock': { 
        'scissors': "Spock smashes Scissors", 
        'rock': "Spock vaporizes Rock" 
    }, 
    // 'empty': ''
};



export const checkBasicWinner = (playerChoice: Choice, computerChoice: Choice) => {

    if (playerChoice === computerChoice) {
        return {
            winner: 'draw',
            tag: 'draw'
        }
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
        ) {
        return {
            winner: 'player',
            tag: rules[playerChoice][computerChoice as keyof typeof rules[typeof playerChoice]]
        }
    }

    return {
        winner: 'computer',
        tag: rules[computerChoice][playerChoice as keyof typeof rules[typeof computerChoice]]
    }
};

export const checkAdvancedWinner = (playerChoice: Choice, computerChoice: Choice) => {
    if (playerChoice === computerChoice) {
        return {
            winner: 'draw',
            tag: 'draw'
        }
    }

    if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
        ) {
        return {
            winner: 'player',
            tag: rules[playerChoice][computerChoice as keyof typeof rules[typeof playerChoice]]
        }
    }
        return {
            winner: 'computer',
            tag: rules[computerChoice][playerChoice as keyof typeof rules[typeof computerChoice]]
        }
};



export const getRPSLSResult = (choice1: Choice, choice2: Choice)  => {

    if (choice1 === choice2) return "It's a tie!";
    if (rules[choice1][choice2 as keyof typeof rules[Choice]]) return rules[choice1][choice2 as keyof typeof rules[Choice]];
    if (rules[choice2][choice1 as keyof typeof rules[Choice]]) return rules[choice2][choice1 as keyof typeof rules[Choice]];

    return "Invalid choices!";
}


// Function to get a random choice from RPS
export function getComputerChoice(level: string) {
    if(level === 'basic') {
        return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    } else {
        return rpslsChoices[Math.floor(Math.random() * rpslsChoices.length)];
    }
}

