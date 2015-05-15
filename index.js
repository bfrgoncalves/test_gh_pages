var $ = require('jquery');

console.log('AQUI');


$.ajax({
            url: "http://rest.pubmlst.org/db/pubmlst_spneumoniae_isolates/isolates/9",
            type: "GET",

            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
               console.log(resultData);

            },
            error : function(jqXHR, textStatus, errorThrown) {
            },

            timeout: 120000,
        });
