
$(function() {
    $('#table_id').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});


var DTtable = $('#table_id').DataTable();
console.log(DTtable.rows().data());