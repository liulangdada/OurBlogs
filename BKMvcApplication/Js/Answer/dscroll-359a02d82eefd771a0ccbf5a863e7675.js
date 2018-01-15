function Creatscroll(id,seth){
  
  var oScrolloutbox = document.getElementById(id);
  var oScrollcon = oScrolloutbox.children[0];  
  var scrollH = oScrollcon.offsetHeight;
  var scrollbottom;

  if(oScrolloutbox.children[1])
  {
  	  var scrollbox = oScrolloutbox.children[1];
  	  scrollbar = scrollbox.children[0];
  }
  else
  {
  	  var scrollbox = document.createElement('div'); 
	  var scrollbar = document.createElement('div');
	  scrollbox.appendChild(scrollbar);	  
	  oScrolloutbox.appendChild(scrollbox);
	  scrollbox.style.position = 'absolute';
	  scrollbox.style.zIndex = 999;
	  scrollbox.style.right = 3 + 'px';
	  scrollbox.style.top =  0 + 'px';
	  scrollbox.style.border = "0px solid #c1c1c1";
	  scrollbar.style.backgroundColor = '#ffffff';
	  scrollbox.style.width = 8+'px';
	  scrollbar.style.width = 8+'px';  	
	  scrollbar.style.backgroundColor = '#d7dad9';
	  scrollbar.style.position = 'absolute';
	  scrollbar.style.cursor = 'pointer';
	  scrollbar.style.borderRadius = 5+'px';
  }  	 

  if(scrollH>seth)
  {
	oScrolloutbox.style.height = seth + 'px';
	scrollbox.style.height = seth + 'px';
	barH = (seth/scrollH)*seth;
	scrollbottom = seth-barH;
	scrollbox.style.display = 'block';			
	scrollbar.style.height = parseInt(barH)+'px';		

		scrollbar.onmousedown = function(ev)
		{
			var oEvent = ev||event;
			var disY = oEvent.clientY - this.offsetTop;

			document.onmousemove = function(ev)
			{
				var oEvent = ev||event;
				var t = oEvent.clientY - disY;
				setTop(oScrollcon,t);

				if(scrollbar.setCapture)
				{
					scrollbar.setCapture();
				}
			}

			document.onmouseup = function()
			{				
				document.onmousemove = null;
				document.onmouseup = null;
	
				if(scrollbar.setCapture)
				{			  
					scrollbar.releaseCapture();
				}								
			}
			
			return false;
		}

	}
	else
	{
		scrollbox.style.display = 'none';
		oScrolloutbox.style.height = scrollH + 'px';		
		scrollbottom=0;

	}

     addWheel(oScrolloutbox,function(down){
		var t=scrollbar.offsetTop;

		if(down){
			t+=10;
		}else{
			t-=10;
		}
		setTop(oScrollcon,t);

	});

     function setTop(obj,t)
     {
     	t<0 && (t=0);
		t>scrollbottom && (t=scrollbottom);
		scrollbar.style.top= t + 'px';
		obj.style.top = -((scrollH-seth)/scrollbottom)*t + 'px';
     }
    function addWheel(obj,fn){
        function fnWheel(ev){
            var oEvent=ev || event;
            var down=false;
            if(oEvent.wheelDelta){
                if(oEvent.wheelDelta<0){
                    down=true;
                }else{
                    down=false;
                }
            }else{
                if(oEvent.detail>0){
                    down=true;
                }else{
                    down=false;
                }
            }
            fn(down);

            if(scrollH>seth)
            {
                if(oEvent.preventDefault){
                    oEvent.preventDefault();
                }
                return false;
            }

        }
        if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
            obj.addEventListener('DOMMouseScroll',fnWheel,false);
        }else{
            obj.onmousewheel=fnWheel;
        }
    };
}


;
