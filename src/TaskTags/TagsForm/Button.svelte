<script>
    import { taskTags, task } from "../../store";

    const buttonName = "submit";

    const buttonClick = () =>
        taskTags.update((oldArray) => [...oldArray, $task.tag]);

    import PrimaryButton from "../../reusable/PrimaryButton.svelte";
</script>

<main>
    <!-- <button on:click={buttonClick}>{buttonName}</button> -->
    <PrimaryButton {buttonClick} {buttonName} />
</main>
