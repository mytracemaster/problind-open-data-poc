var Paginacao = function () {

    return {

        //main function to initiate the module
        init: function () {
            
            if (!jQuery().dataTable) {
                return;
            }
           
            // begin second table
            $('.table').dataTable({
                "aLengthMenu": [
                    [15, 30, 45, -1],
                    [15, 30, 45, "Todos"] // change per page values here
                ],
                "bFilter": false,
                "bSort": false,
                // set the initial value
                "iDisplayLength": 15,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ registros por p\u00e1gina",
                    "oPaginate": {
                        "sPrevious": "Anterior",
                        "sNext": "Pr\u00f3ximo"
                    },
                    "sEmptyTable": "Nenhum registro encontrado.",
                    "sInfo": "Exibindo _START_ at\u00e9 _END_ de _TOTAL_ registros.",
                    "sInfoEmpty": "Exibindo 0 at\u00e9 0 de 0 registros.",
                    "sZeroRecords": "Nenhum registro encontrado."
                }
            
            });

            $('.table-scrollable').css('border','0px')
        }

    };

}();