

$('#table_id').DataTable({
    dom: 'Bfrtip',
    searchDelay: 1000,
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});

var table = $('#table_id').DataTable();


table.columns().flatten().each( function ( colIdx ) {
    // Create the select list and search operation
    var select = $('<select />')
        .appendTo(
            table.column(colIdx).header()
        )
        .on( 'change', function () {
            table
                .column( colIdx )
                .search( $(this).val() )
                .draw();
        } );
 
    // Get the search data for the first column and add to the select list
    table
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
            select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
} );

table.on('search', function() {
    searched_data = table.rows( { search: 'applied' } ).data()
    console.log(searched_data.length); 
    newData = []
    for (var i = 0; i < searched_data.length; i++) {
        newData.push(searched_data[i])
    }
    console.log(newData)
});

// might be wiser to just make a button instead