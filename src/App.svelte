<script>
	import Sample from './components/Sample.svelte';
	import Button from './components/Button.svelte';
	import {count, increment, decrement} from './store/store.js';

	export let name;

	function handleButtonClick(event) {
		alert("ぼたんくりっく");
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Sample name="aaa" /><Button on:click={handleButtonClick} />
	<div>
	The count is {$count} <button on:click={increment}>+1</button><button on:click={decrement}>-1</button>
	{#if $count % 2 == 0}
		<div>count が偶数</div>
	{/if}


	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>