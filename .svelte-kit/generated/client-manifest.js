export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/[id]/gasfix.svelte"),
	() => import("../../src/routes/[id]/gasindex.svelte"),
	() => import("../../src/routes/[id]/powerfix.svelte"),
	() => import("../../src/routes/[id]/powerindex.svelte"),
	() => import("../../src/routes/[id].svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"[id]": [[0, 6], [1]],
	"[id]/gasfix": [[0, 2], [1]],
	"[id]/gasindex": [[0, 3], [1]],
	"[id]/powerfix": [[0, 4], [1]],
	"[id]/powerindex": [[0, 5], [1]]
};