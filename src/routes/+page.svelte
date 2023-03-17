<script>
    let enabled = false

    let text = ""
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input bind:value={text}/>

<button disabled={text.length === 0}>Button!</button>