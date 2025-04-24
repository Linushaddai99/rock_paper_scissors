export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

export type Rules = {
    rock: {
        scissors: string;
        lizard: string;
    };
    paper: {
        rock: string;
        spock: string;
    };
    scissors: {
        paper: string;
        lizard: string;
    };
    lizard: {
        spock: string;
        paper: string;
    };
    spock: {
        scissors: string;
        rock: string;
    };
}

export type State = {
  playersChoice: string
  computersChoice: string
  level: string
  score: number
}