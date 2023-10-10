<h1>Tjo {data.username} </h1>
<form method="post" action="?/logout" use:enhance>
    <button>Logout</button>
</form>


<script lang="ts">
    export let data;
    import { onDestroy } from 'svelte';
    import { goto } from '$app/navigation';
    import { enhance } from '$app/forms';
    
    

    
    onDestroy(() => {
                
        window.removeEventListener('popstate', handlePopState);
    });


    function handlePopState(event: PopStateEvent) {
        
        goto('?/login', { replaceState: true });
    }


    window.addEventListener('popstate', handlePopState);
</script>
