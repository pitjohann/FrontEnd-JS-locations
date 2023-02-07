<script>

    import Modal from './Modal.svelte';
    let showModal = false;
    export let data;
    let film = data.body;
    let has_role = true;

    if (!has_role) {
        window.location.href = '/login';
    }




    function editLoc(_id) {

    }

    function deleteLoc(_id){


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
     <button on:click={() => deleteLoc()}>
         Delete Location
     </button>
     <td on:click={() => showModal = {data: element}}>
         filmType = {element.filmType};
     </td>
     <td>
         filmProducerName = {element.filmProducerName};
     </td>
     <td>
         endDate = {element.endDate};
     </td>
     <td>
         filmName = {element.filmName};
     </td>
     <td>
         district = {element.district};
     </td>
     <td>
         sourceLocationId = {element.sourceLocationId};
     </td>
     <td>
         filmDirectorName = {element.filmDirectorName};
     </td>
     <td>
         address = {element.address};
     </td>
     <td>
         startDate = {element.startDate};
     </td>
     <td>
         year = {element.year};
     </td>
 </tr>
{/each}
</table>
{#if showModal}
    <Modal close={() => showModal = false} data={showModal.data} />
{/if}
{/if}