/**
 * Created by liwz on 15-5-29.
 */



$(function()
{
    //var $mod_dd = $(".mod_dl_dd");
    //console.log($charcter);

    function getDot(obj)
    {
        obj.each(function(){
		
			if($(this).height() > 55)
			{
				$(this).css({height:"48px",overflow:"hidden"});
				$(this).append('<span class="dot">...</span>');
			}
		})
		
    }

    //getDot($(".mod_dl_dd"));
    getDot($(".mod_dl_dd_01"));
    getDot($(".hot_person_d"));

})
















;
