<div class="modal">
    <tr>


        <td>
            Type de film : {data.filmType};
        </td>
        <td>
            Nom du Producteur : {data.filmProducerName};
        </td>
        <td>
            Date de Fin : {data.endDate};
        </td>
        <td>
            Nom du film : {data.filmName};
        </td>
        <td>
            Arrondissement : {data.district};
        </td>
        <td>
            IdSourceLieu : {data.sourceLocationId};
        </td>
        <td>
            Nom du Directeur : {data.filmDirectorName};
        </td>
        <td>
            adresse  {data.address};
        </td>
        <td>
            Date de début : {data.startDate};
        </td>
        <td>
            Année de sortie : {data.year};
        </td>
    </tr>
    <button on:click={close}>Close</button>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(120, 120, 120, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    td,button {
        border: 2px solid black;
        padding: 8px;
        text-align: left;
    }


    button {
        width: 135px;
        height: 40px;
        margin: 5px;
    }

</style>

<script>
    export let close;
    export let data;
</script>
