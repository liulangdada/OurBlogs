dom_ready(function()
{
	var aText = getByClass(document, 'text_intro');

	for(var i=0;i<aText.length;i++)
	{
		if(aText[i].offsetHeight>45)
		{
			aText[i].style.height = 38+'px';
			var oEllip = document.createElement('span');
			oEllip.innerHTML = '…';
			oEllip.className = 'ellip';
			aText[i].appendChild(oEllip);
		}
	}
})

function getByClass(oParent, sClass)
{
	if(oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sClass);
	}
	
	var aEle=oParent.getElementsByTagName('*');
	
	var re=new RegExp('\\b'+sClass+'\\b');
	var result=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(re.test(aEle[i].className))
		{
			result.push(aEle[i]);
		}
	}	
	return result;
}


function dom_ready(fn){
	if(document.addEventListener){  
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();	
		},false);	
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn && fn();	
			}	
		}	
	}	
}
;
