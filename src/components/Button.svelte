<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function forward(event) {
		dispatch('click', event.detail);
	}
</script>

<main>
    <button on:click={forward}>
        ぼたん
    </button>
</main>

<style>

</style>