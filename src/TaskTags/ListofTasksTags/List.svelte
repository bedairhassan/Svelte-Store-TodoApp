<script>
    

    import { user,taskTags } from "../../store";

    let tags = [];
    $: {
        taskTags.subscribe((tagsGuest) => (tags = tagsGuest));
    }
</script>

<main>
    <h1>List of Tags</h1>

    {#if tags.length>0}
        <!-- <ListOfTasks {localTasksTags}/> -->
        <ul>
            {#each tags as task}
                <li>{task}</li>
            {/each}
        </ul>
    {:else}
        <h3>No Tags Available yet</h3>
    {/if}
</main>

<style>
    h3 {
        color: rgba(192, 0, 0, 0.425);
    }
</style>
