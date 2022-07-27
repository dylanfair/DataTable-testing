var $ = require( 'jquery' );
var dt = require( 'datatables.net' )( window, $ );
var buttons = require( 'datatables.net-dt' )( window, $ );

$(function() {
    $('#table_id').DataTable();
});


var DTtable = $('#table_id').DataTable();
console.log(DTtable.rows().data())