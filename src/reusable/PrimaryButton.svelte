<script>
    export let buttonName,buttonClick;
    import Button from './Button.svelte'
    
</script>

<main>
    <Button 
    {buttonName}
    {buttonClick}
    buttonClass={'btn btn-primary'}
    />
</main>