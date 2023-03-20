<script>
    let text = ""
    let moreText = ""
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input id="hat" bind:value={text}/>

<input id="cat" bind:value={moreText}/>

<button disabled={text.length === 0 || moreText.length === 0}>Button!</button>