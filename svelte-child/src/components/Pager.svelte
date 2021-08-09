<script>
    import { Route, Link } from 'svelte-routing';
    import Page from './Page.svelte';
</script>

<style>
    .Pager {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Pager .Buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .Pager button {
        background-color: unset;
        border: 1px solid black;
    }

    .Pager button.active {
        background-color: yellow;
    }
</style>

<div class="Pager">
    <div class="Buttons">
        <Link to="/page/1">
            <button>Page 1</button>
        </Link>
    </div>
    <div>
        <Route path="/page/:number" component={ Page } />
    </div>
</div>