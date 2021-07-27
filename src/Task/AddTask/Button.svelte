<script>
    import { tasks, task } from "../../store";

    const buttonName = "submit";

    const buttonClick = () => {
        tasks.update((oldArray) => [
            ...oldArray,
            {
                name: $task.name !== undefined ? $task.name : "",
                tag: $task.tag !== undefined ? $task.tag : "",
            },
        ]);
        // console.log(tasks)
    };

    // $: console.log(tasks)
    import PrimaryButton from '../../reusable/PrimaryButton.svelte'
</script>

<main>
    <!-- <button on:click={buttonClick}>{buttonName}</button> -->
    <PrimaryButton
    {buttonClick}
    {buttonName}/>
</main>
