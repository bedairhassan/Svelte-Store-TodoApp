<script>
    export let buttonName,buttonClick,buttonClass;
</script>

<main>
    <button class={buttonClass} on:click={buttonClick}>{buttonName}</button>
</main>