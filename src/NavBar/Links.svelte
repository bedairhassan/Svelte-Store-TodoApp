<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { routes } from "../store";
</script>

<!-- <main /> -->

<main>
    <ul>
        <li>
            <!-- <a href={routes.home}> -->
            <Link to={routes.home}>
                <h3 class="white">Home</h3>
                <!-- Home -->
            </Link>
            <!-- </a> -->
        </li>
        <li>
            <!-- <a href={routes.tag}> -->
            <Link to={routes.tag}>
                <h3 class="white">Tag</h3>
                <!-- Tag -->
            </Link>
            <!-- </a> -->
        </li>

        <!-- <li style="float: right;">
            <Link to={routes.signpage}>
                <h3 class="white">Signout</h3>
            </Link>
        </li> -->

    </ul>
</main>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    .white {
        color: white;
        font-size: small;
        font-weight: bolder;
        padding: 14px 16px;
        display: block;
        text-align: center;

        /* position: ; */
    }


/* 
    .green {
        float:right;
        background-color: #04aa6d;
    } */
</style>
