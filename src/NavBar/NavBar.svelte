<script>
import { Router, Route, Link } from "svelte-navigator";
import Links from './Links.svelte'
import Routing from './Routing.svelte'
// <Link to={routes.Tags}>Tags</Link>

// <Router><Nav/><NavRoute/></Router>

// <NavRoute/> :
// <Route path={routes.Tags} component={Tags} />
// <Route path="/"><LoginPage /></Route>

</script>

<main>
<Router>
    <Links/>
    <Routing/>
</Router>
</main>