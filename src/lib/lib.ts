import { Alg } from 'cubing/alg';

type Dict<T> = { [key: string]: T };

// prettier-ignore
export const MOVES = [
    'R', 'r',
    'L', 'l',
    'U', 'u',
    'D', 'd',
    'F', 'f',
    'B', 'b',
    'M', 'm',
    'E', 'e',
    'S', 's',
]

export function algGen(alg: string): [number, string[]] {
    // calculate alg gen stats
    // ie. how many different moves are required to exec

    let moves: string[] = [];

    MOVES.forEach((move) => {
        if (alg.includes(move)) {
            moves.push(move);
        }
    });

    return [moves.length, moves];
}
