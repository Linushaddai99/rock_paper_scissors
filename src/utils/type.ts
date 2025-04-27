export type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock" | 'empty';

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
  playersChoice: Choice
  computersChoice: Choice
  level: string
  score: number
  result: {
    winner: string
    tag: string
  }
}