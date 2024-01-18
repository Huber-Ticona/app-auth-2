<script>
    import { goto } from "$app/navigation";
    import { userStore } from "$lib/store/user";
    import { onMount } from "svelte";
    import {PUBLIC_BASE_PATH} from '$env/static/public'
    
    
        
        //goto(`${PUBLIC_BASE_PATH}/login`)

    onMount(()=>{
       localStorage.removeItem('token');
       userStore.set({
        id: 0,
        name: "",
        authenticated: false}
        )
    })
</script>
<div>
    logout
    <strong>userstore.value : {$userStore.id}</strong>
</div>