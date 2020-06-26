import { writable } from 'svelte/store';

export const count = writable(0);

export function increment() {
	count.update(n => n + 1);
}

export function decrement() {
	count.update(n => n - 1);
}