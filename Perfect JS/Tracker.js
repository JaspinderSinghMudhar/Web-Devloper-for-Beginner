<script >
// 	Journey Tracker
	window.addEventListener('load',() => {
		sessionStorage.setItem('jouney', sessionStorage.getItem("jouney") + window.location.href + ' >>> ');
		if( document.querySelector('.journey_field_js')){
			sessionStorage.setItem('jouney',(sessionStorage.getItem("jouney")).replace(/https:\/\//g,'\nhttps:\/\/').replace(/null/g,''));
			document.querySelector('.journey_field_js').value = sessionStorage.getItem("jouney");
			document.addEventListener( 'wpcf7mailsent', ()=> {
				sessionStorage.removeItem('jouney');
				sessionStorage.clear();	
			}, false );
		}
	})	
</script>