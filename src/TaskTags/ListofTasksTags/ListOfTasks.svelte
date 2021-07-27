<script>
    export let localTasksTags;
</script>

<main>
    <ul>
        {#each localTasksTags as task}
            <li>{task}</li>
        {/each}
    </ul>
</main>
