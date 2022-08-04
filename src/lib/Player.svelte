<script lang="ts">
    import 'cubing/twisty';

    export let alg: string;
    export let setup: string;
    export let anchor: string;
    export let background: string = '#bbbbbb';
    export let showAlg: boolean = false;
    export let title: string = '';

    export let showBorder: boolean = false;
</script>

<div class="player" class:border={showBorder}>
    {#if title !== ''}
        <strong>
            <h3 style="margin-top: 0px;">{title}</h3>
        </strong>
    {/if}

    <twisty-player
        {alg}
        experimental-setup-alg={setup}
        experimental-setup-anchor={anchor}
        background="none"
        style="background: {background};"
        {...$$restProps}
    />

    {#if showAlg}
        <strong>
            <h3 style="margin-bottom: 0px;">{alg}</h3>
        </strong>
    {/if}
</div>

<style>
    h3 {
        text-align: center;
        place-content: center;
    }
    .border {
        margin: 4px;
        padding: 20px;
        border: 1px solid black;
    }
</style>
