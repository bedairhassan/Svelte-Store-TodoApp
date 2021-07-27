<script>
    import { Router, Route, Link } from "svelte-navigator";

    // route
    import { routes } from "../store";

    // components
    // import InputForm from "../AddTask/InputForm.svelte";
    import InputForm from '../Task/AddTask/InputForm.svelte'
    import List from '../Task/ListOfTasks/List.svelte';
    // import TagsForm from "../TagsForm/TagsForm.svelte";
    import TagsMain from '../TaskTags/TagsForm/TagsMain.svelte'
</script>

<main>
    <Route path={routes.tag} component={TagsMain} />
    <Route path="/">
        <InputForm />
        <List />
    </Route>
</main>
