<script lang="typescript">
	import Sample from './components/Sample.svelte';
	import Button from './components/Button.svelte';
	import {count, increment, decrement} from './store/store.js';
	import { R } from './utils';
	import { timer } from './timer';
	import { onMount } from 'svelte';

	export let name;

	let a: number = 42;
	let current: number = 0;
	let sum: number = 0;

	//onMount(() => timer.subscribe(val => (current = val)));
	R(timer, val => (current = val));

	$: sum = a + current;

	function handleButtonClick(event) {
		alert("ぼたんくりっく");
	}
</script>

<main>
	<h1>Hello {name}!</h1>

	<h2>Count is {$timer}</h2>
	<div class="count">
		<p>What's the meaning of life? {a}</p>
		<p>The sum is {sum}</p>
	</div>

	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Sample name="aaa" /><Button on:click={handleButtonClick} />
	<div>
	The count is {$count} <button on:click={increment}>+1</button><button on:click={decrement}>-1</button>
	{#if $count % 2 == 0}
		<div>count が偶数</div>
	{/if}


	</div>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		.count {
			p {
				color: #ed7f5a;
			}
		}
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
