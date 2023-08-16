			function text_len(len,ele) {
				var eles = document.querySelectorAll(ele);
				for(i in eles){
				  if(eles[i].innerHTML.length > len){
					eles[i].innerHTML = eles[i].innerHTML.substr(0, len)+"...";
				  }
				}
			}
			text_len(30,"#subheading-row h2")
			text_len(20,"#subheading-row p")