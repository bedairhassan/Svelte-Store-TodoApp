<script>
    import InputAddTask from './InputAddTask.svelte'
    import Button from './Button.svelte'
    // import ArrayofTags from '../Tags/Tags.svelte'
    import ArrayofTags from '../../TaskTags/Tags/Tags.svelte'
</script>

<main >
   <div align="center">
    <table>
        <tr>
            <td> <InputAddTask /> </td>
            <td><ArrayofTags/></td>
            <td><Button /></td>
        </tr>
    </table>
   </div>
</main>
