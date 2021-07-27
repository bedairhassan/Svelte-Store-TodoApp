<script>
    // import { task } from "../store";

    export let localTasks;
</script>

<main>
    <table class="table">


            <thead>
                <th>Name</th>
                <th>Tag</th>
            </thead>

        <tbody>
            {#each localTasks as task}
            <tr>
                <td>{task.name}</td>
                <td>{task.tag}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</main>
