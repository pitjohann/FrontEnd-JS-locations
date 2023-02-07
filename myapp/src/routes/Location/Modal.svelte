<div class="modal">
    <tr>


        <td>
            filmType = {data.filmType};
        </td>
        <td>
            filmProducerName = {data.filmProducerName};
        </td>
        <td>
            endDate = {data.endDate};
        </td>
        <td>
            filmName = {data.filmName};
        </td>
        <td>
            district = {data.district};
        </td>
        <td>
            sourceLocationId = {data.sourceLocationId};
        </td>
        <td>
            filmDirectorName = {data.filmDirectorName};
        </td>
        <td>
            address = {data.address};
        </td>
        <td>
            startDate = {data.startDate};
        </td>
        <td>
            year = {data.year};
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
</style>

<script>
    export let close;
    export let data;
</script>
