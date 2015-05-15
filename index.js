var $ = require('jquery');

console.log('AQUI');


$.getJSON('http://rest.pubmlst.org/db/pubmlst_spneumoniae_isolates/isolates/9', function(d){
	console.log(d);
});