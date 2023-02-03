<script>
    export let data;
    let film = data.body;

</script>
<table>
{#each film as element}
 <tr>
     <th>
         filmType={element.filmType};
     </th>
     <th>
         filmProducerName={element.filmProducerName};
     </th>
 </tr>
{/each}
</table>
