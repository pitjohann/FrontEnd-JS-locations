<script>
    import * as api from '$lib/api.js';
    import Modal from './Modal.svelte';
    let showModal = false;
    export let data;
    let film = data.body;
    let token = data.token;

   let has_role = true;


    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const payload = JSON.parse(jsonPayload);
    let roles = payload.role;
    console.log(roles);


    function editLoc(_id) {

    }

    async function deleteLoc(_id) {
        console.log(token);
        await api.del(`locations/${_id}`, token);
        window.location.reload();

    }
</script>





<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td,button {
        border: 2px solid black;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #ddd;
    }
    button {
        width: 135px;
        height: 40px;
        margin: 5px;
    }
</style>
    {#if roles === "admin"}
        <a href="/addLocation">
        <button >
            Add Location
        </button>
        </a>
        {/if}
<table>
{#each film as element}
 <tr>
     {#if roles === "admin"}
     <button on:click={() => editLoc()}>
         Edit Location
     </button>
     <button on:click={() => deleteLoc(element._id)}>
         Delete Location
     </button>
     {/if}
     <td on:click={() => showModal = {data: element}}>
         Type de tournage : {element.filmType}
     </td>
     <td on:click={() => showModal = {data: element}}>
         Nom du Producteur : {element.filmProducerName}
     </td>

     <td on:click={() => showModal = {data: element}}>
         Nom du Film : {element.filmName}
     </td>
     <td on:click={() => showModal = {data: element}}>
         Nom du Directeur : {element.filmDirectorName}
     </td>

     <td on:click={() => showModal = {data: element}}>
         Année de sortie : {element.year}
     </td>
 </tr>
{/each}
</table>
{#if showModal}
    <Modal close={() => showModal = false} data={showModal.data} />
{/if}
