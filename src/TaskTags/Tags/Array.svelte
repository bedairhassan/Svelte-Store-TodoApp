<script>
    import { taskTags, task} from "../store";


    let tags;
    $: taskTags.subscribe(last=>tags=last)

</script>

<main>
    <select name="tags" id="tags" bind:value={$task.tag}>
        {#each tags as item}
            <!-- content here -->
            <option value={item}>{item}</option>
        {/each}
    </select>
</main>