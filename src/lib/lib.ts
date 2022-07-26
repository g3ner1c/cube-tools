import "cubing/twisty";
import type { TwistyPlayer } from "cubing/twisty";

export function setPlayer(player: TwistyPlayer, alg: string, setup?: string, anchor?: string, background?: string): void {
    if (typeof setup === 'undefined') setup = "x2";
    if (typeof anchor === 'undefined') anchor = "end";
    if (typeof background === 'undefined') background = "none";
    player.setAttribute('alg', alg);
    player.setAttribute('experimental-setup-alg', setup);
    player.setAttribute('experimental-setup-anchor', anchor);
    player.setAttribute('background', background);
}