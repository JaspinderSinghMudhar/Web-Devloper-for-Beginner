// 	Journey Tracker Old
window.addEventListener('load',()=>{
    sessionStorage.setItem('jouney', sessionStorage.getItem("jouney") + window.location.href + ' >>> ');
    if( document.querySelector('.journey_field_js')){
        sessionStorage.setItem('jouney',(sessionStorage.getItem("jouney")).replace(/http:\/\//g,'\nhttp:\/\/').replace(/null/g,''));
        document.querySelector('.journey_field_js').value = sessionStorage.getItem("jouney");
        console.log(sessionStorage.getItem("jouney"));
        document.addEventListener( 'wpcf7mailsent', ()=> {
            sessionStorage.removeItem('jouney');
            sessionStorage.clear();	
        }, false );
    }
})	



// 	Journey Tracker New Compressed
var set,get,key;
set = (a,b)=>{sessionStorage.setItem(a,b);}
get = (a)=>{sessionStorage.getItem(a);}
key = 'jouney';
window.addEventListener('load',()=>{
    set(key, get(key) + window.location.href + ' >>> ');
    if( document.querySelector('.journey_field_js')){
        set(key,(get(key)).replace(/http:\/\//g,'\nhttp:\/\/').replace(/null/g,''));
        document.querySelector('.journey_field_js').value = get(key);
        document.addEventListener( 'wpcf7mailsent', ()=> {
            sessionStorage.removeItem(key);
            sessionStorage.clear();	
        }, false );
    }
})	



// 	Journey Tracker New Compressed Automation
var set,get,key;set=(a,b)=>{sessionStorage.setItem(a,b)};get=(a)=>{sessionStorage.getItem(a)};key='jouney';window.addEventListener('load',()=>{set(key,get(key)+window.location.href+' >>> ');if(document.querySelector('.journey_field_js')){set(key,(get(key)).replace(/http:\/\//g,'\nhttp:\/\/').replace(/null/g,''));document.querySelector('.journey_field_js').value=get(key);document.addEventListener('wpcf7mailsent',()=>{sessionStorage.removeItem(key);sessionStorage.clear()},false)}});