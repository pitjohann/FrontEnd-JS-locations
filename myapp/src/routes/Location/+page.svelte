<script>
    import * as api from '$lib/api.js';
    import Modal from './Modal.svelte';
    let showModal = false;
    export let data;
    let film = data.body;
    let token = data.token;

   let has_role = true;







    function editLoc(_id) {

    }

    function deleteLoc(_id){
        console.log(token);
        api.del(`locations/${_id}`,token);
        window.location.reload();

    }
</script>

{#if has_role}



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
    <a href="/addLocation">
    <button >
        Add Location
    </button>
    </a>
<table>
{#each film as element}
 <tr>

     <button on:click={() => editLoc()}>
         Edit Location
     </button>
     <button on:click={() => deleteLoc(element._id)}>
         Delete Location
     </button>
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
{/if}