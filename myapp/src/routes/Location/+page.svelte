<script>
    import * as api from '$lib/api.js';
    import Modal from './Modal.svelte';
    let showModal = false;
    export let data;
    let film = data.body;
    let token = data.token;
    /*if(token === {}) {
        window.location.href = '/login';
    }
    /*
    let hasRole = true
    let roles = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

    if (roles === "user") {
        hasRole = false
    }*/







    function editLoc(_id) {

    }

    function deleteLoc(_id){
        console.log(_id)
        api.del(`locations/${_id}`,token)
        window.location.reload()

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

    <a href="/addLocation">
    <button style="display: none" >
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
         filmType : {element.filmType};
     </td>
     <td on:click={() => showModal = {data: element}}>
         filmProducerName = {element.filmProducerName};
     </td>
     <td on:click={() => showModal = {data: element}}>
         endDate = {element.endDate};
     </td>
     <td on:click={() => showModal = {data: element}}>
         filmName = {element.filmName};
     </td>
     <td on:click={() => showModal = {data: element}}>
         district = {element.district};
     </td>
     <td on:click={() => showModal = {data: element}}>
         sourceLocationId = {element.sourceLocationId};
     </td>
     <td on:click={() => showModal = {data: element}}>
         filmDirectorName = {element.filmDirectorName};
     </td>
     <td on:click={() => showModal = {data: element}}>
         address = {element.address};
     </td>
     <td on:click={() => showModal = {data: element}}>
         startDate = {element.startDate};
     </td>
     <td on:click={() => showModal = {data: element}}>
         year = {element.year};
     </td>
 </tr>
{/each}
</table>
{#if showModal}
    <Modal close={() => showModal = false} data={showModal.data} />
{/if}
