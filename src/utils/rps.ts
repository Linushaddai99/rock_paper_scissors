export const rpsChoices = ["rock", "paper", "scissors"];

export const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"];

export const checkBasicWinner = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) return "draw";
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }
    return "computer";
};

export const checkAdvancedWinner = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) return "draw";
    if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        return "player";
    }
    return "computer";
};

// Function to get a random choice from RPS
export function getRandomRPSChoice() {
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
}

// Function to get a random choice from RPSLS
export function getRandomRPSLSChoice() {
    return rpslsChoices[Math.floor(Math.random() * rpslsChoices.length)];
}

// Example Usage
const playerMove = "rock";
const computerMove = getRandomRPSChoice();
console.log(`Player: ${playerMove}, Computer: ${computerMove}, Winner: ${checkBasicWinner(playerMove, computerMove)}`);
