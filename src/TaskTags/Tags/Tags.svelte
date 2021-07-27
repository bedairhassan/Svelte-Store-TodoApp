<script>
    import { taskTags, task } from "../../store";

    let tags;
    $: taskTags.subscribe((last) => (tags = last));
</script>

<main>
    {#if tags.length > 0}
        <select name="tags" id="tags" bind:value={$task.tag}>
            {#each tags as item}
                <!-- content here -->
                <option value={item}>{item}</option>
            {/each}
        </select>
    {/if}
</main>
