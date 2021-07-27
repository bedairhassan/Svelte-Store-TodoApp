<script>

import ListOfTasks from './ListOfTasks.svelte'



//-----------------------------------


    import { tasks } from "../../store";

    let localTasks;
    $: tasks.subscribe(array=>localTasks=array)
</script>

<main>
    <h1>List of Tasks</h1>

    {#if localTasks.length > 0}
    <ListOfTasks {localTasks}/>
        <!-- <ul>
            {#each localTasks as task}
                <li>{task}</li>
            {/each}
        </ul> -->
    {:else}
        <h3>No Tasks Available yet</h3>
    {/if}
</main>


<style>
    h3{
        color: rgba(192, 0, 0, 0.425);
    }
</style>