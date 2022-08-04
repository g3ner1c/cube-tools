<script lang="ts">
    import Player from './Player.svelte';

    export let alg: string;
    export let setup: string = 'x2'; // yellow top blue front
    export let anchor: string = 'end'; // end at solved state
    export let background: string = '#bbbbbb';
    export let showAlg: boolean = false;
    export let title: string = '';

    export let showBorder: boolean = false;
</script>

<!-- just Player with different defaults that most cubers are used to -->

<Player {alg} {setup} {anchor} {background} {showAlg} {title} {showBorder} {...$$restProps} />
