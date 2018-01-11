function showMini(el) {
    var hoverTimer, outTimer, $target;
    var loginname = window.oper_username;
    var now_page_name;
    var $this;
    var ajaxProxyCaches = {};
    var dataCaches = {};
    var caches = {};
    var flag = false;//区分是关注还是未关注
    document.domain = 'csdn.net';


    //通过iframe跨域请求数据的方法：
    function ajaxProxy(proxyUrl, opts) 
    {
        var c = ajaxProxyCaches[proxyUrl];
        if (c === undefined) 
        {
            c = ajaxProxyCaches[proxyUrl] = [];
            var func = arguments.callee;
            $('<iframe class="poxy_uc" src="' + proxyUrl + '" style="display:none">').load(function () {
                c.contentWindow = this.contentWindow;
                func(proxyUrl, opts);
            }).prependTo('body');
        } 
        else if (c.contentWindow === undefined) 
        {
            c.push(opts);
        } 
        else 
        {
            do {
                c.contentWindow.jQuery.ajax(opts);
            } while (opts = c.shift());
        }
    }


    function blindEvent()
    {
        $('#mini .person_add_focus').click(function () {
            window.open('http://msg.csdn.net/letters/model?receiver=' + now_page_name, '_blank', 'height=350,width=700');
        })

        if (caches[now_page_name].flag) {

            $("#mini .person_add_focus").prev().mouseover(function () {
                $(this).html('取&nbsp;&nbsp;&nbsp;消');
                $(this).css({'background-color': '#9e9e9e'});
            })
            $("#mini .person_add_focus").prev().mouseout(function () {
                $(this).html('已关注');
                $(this).css({'background-color': '#c7c7c7'});
                // $("#min .visoter").css({'margin-left': '59px'});
            })
        }


        $("#mini .person_add_focus").prev().click(function () {

            if (loginname) {

                var $this = $(this);

                if (caches[now_page_name].flag == false) {
                    var do_follow_url = 'http://my.csdn.net/index.php/follow/do_follow?username=' + now_page_name + '&type =10&jsonpcallback=?';
                    $.ajax({
                        type: "get",
                        url: do_follow_url,
                        dataType: "jsonp",
                        success: function (data) {
                            if (parseInt(data.succ) == 1) {
                                $this.html('已关注');
                                $this.css({'background-color': '#c7c7c7'});
                                $this.mouseover(function () {
                                    $this.html('取&nbsp;&nbsp;&nbsp;消');
                                    $this.css({'background-color': '#9e9e9e'});
                                })
                                $this.mouseout(function () {
                                    $this.html('已关注');
                                    $this.css({'background-color': '#c7c7c7'});

                                })
                            }
                            caches[now_page_name].flag = true;
                            caches[now_page_name].guanzhuClass = "person_deliver_letter";
                            caches[now_page_name].guanzhuStr = "已关注";

                        }
                    });
                }

                else {
                    do_unfollow_url = 'http://my.csdn.net/index.php/follow/do_unfollow?username=' + now_page_name + '&jsonpcallback=?';
                    $.ajax({
                        type: "get",
                        url: do_unfollow_url,
                        dataType: "jsonp",
                        success: function (data) {
                            if (parseInt(data.succ) == 1) {
                                $this.html('<i class="icon-plus">' + '</i>' + ' 关注');
                                $this.css({'background-color': '#ececec'});
                                $this.unbind("mouseover");
                                $this.unbind("mouseout");
                            }
                            caches[now_page_name].flag = false;
                            caches[now_page_name].guanzhuClass = "person_deliver_letter_un";
                            caches[now_page_name].guanzhuStr = "<i class='icon-plus'></i>关注";
                        }

                    })
                }
            }
            else 
            {
                window.location.href = "https://passport.csdn.net/";
            }
        })
    }


    $(document).on("mouseenter","img[username],#mini",   function (event) {

            var event = event || window.event;
            $target = $(event.target || event.srcElement);

            $this = $(this);
          
            if( $(this).attr("username")!=null){
                now_page_name = $(this).attr("username");
                var offsetValue=  $(this).offset();
                var left=    offsetValue.left;
                var top=   offsetValue.top;
                var width=  $(this).width();
                var height=  $(this).height();
            }

            clearTimeout(outTimer);

            function hoverStart() 
            {
                if ($target.closest("#mini").length <= 0) {
                    $("#mini").remove();
                }
                else {
                    return false;
                }
                var htmlStr = "";
                var position="";

                var postData = {
                    username: now_page_name
                };
                var str = JSON.stringify(postData);
                if (!caches[now_page_name]) 
                {
                    ajaxProxy('http://internalapi.csdn.net/proxy.html', {
                        headers: {
                            'X-acl-token': 'KE/wpXt4CPAvKRLBTiuf-ZmBFRsK'
                        },
                        type: 'POST',
                        url: 'http://internalapi.csdn.net/uc/get/userinfo/getprofilebyusername',
                        data: str,
                        contentType: 'application/json',
                        dataType: 'json',
                        success: function (data) 
                        {
                            if(data.msg!="ok")
                            {
                                return
                            }                           
                            var result = data.result;                           
                            var guanzhuClass = "";
                            var guanzhuStr = "";

                            //徽章dom字符串
                            var huistr = "";

                            //是否有徽章
                            var hashui = false;

                            var avatarurl = result.avatarurl;
                            var nickname = result.nickname;
                            var IsCTO = result.IsCTO;
                            var IsPro = result.IsPro;


                             //徽章数组
                            var huizhang = result.medal;
                            var huicount = huizhang.length;

                            if(huicount>0)
                            {
                                hashui = true;
                            }
                          
                            if(hashui)
                            {
                                for(var i=0;i<huizhang.length;i++)
                                {
                                    huistr+= "<li class='medal m"+huizhang[i].type+"' title='"+huizhang[i].codename+"'>"+"</li>";
                                }

                                huistr = "<dd class='medals'>"+"<ul>"+huistr+"</ul>"+"</dd>";
                            }


                            if (result.curjob == null||result.curjob == "") {
                                var curjob = "IT从业者";
                            }
                            else {
                                var curjob = result.curjob;
                            }
                            var interestname = "";
                            var skillname = "";

                            var flag_cto = "<img src='http://csdnimg.cn/mini/cto.png' class='cto_img' style='width:25px; height:17px'>";
                            var flag_lector = "<img src='http://csdnimg.cn/mini/lector.png' class='lector_img' style='width:55px; height:16px'>";

                            if (!IsCTO) {
                                flag_cto = "";
                            }

                            if (!IsPro) {
                                flag_lector = "";
                            }


                            if (result.speciality != null) {
                                for (var c = 0; c < result.speciality.length; c++) {

                                    if (result.speciality[c].interestname == undefined) {
                                        result.speciality[c].interestname = "";

                                    }
                                    else {
                                        interestname += result.speciality[c].interestname+"&nbsp;&nbsp;";
                                    }

                                    if (result.speciality[c].skillname == undefined) {
                                        result.speciality[c].skillname = "";

                                    }
                                    else {
                                        skillname += result.speciality[c].skillname+"&nbsp;&nbsp;";
                                    }
                                }
                            }

                            if (loginname) 
                            {
                                var check_follow_url = 'http://my.csdn.net/index.php/follow/check_is_followed/' + loginname + '/' + now_page_name + '?jsonpcallback=?';

                                $.ajax({
                                    type: "get",
                                    url: check_follow_url,
                                    dataType: "jsonp",
                                    success: function (data) {

                                        if (data.msg == 'failed') {

                                            guanzhuClass = "person_deliver_letter_un";
                                            guanzhuStr = "<i class='icon-plus'></i>关注";
                                            flag = false

                                        }
                                        else {
                                            guanzhuClass = "person_deliver_letter";
                                            guanzhuStr = "已关注";
                                            flag = true;
                                        }

                                        if(hashui)
                                        {
                                            position="left:"+(left-60+width/2)+"px;"+"top:"+(top-200)+"px"; 
                                        }
                                        else
                                        {
                                            position="left:"+(left-60+width/2)+"px;"+"top:"+(top-172)+"px";
                                        }

                                        var kill_des=interestname + skillname;
                                        if((interestname + skillname).length==0)
                                        {
                                            kill_des="我比较低调，所以暂无相关介绍"
                                        }
                                        //当访问的用户是当前用户时上面不应该显示关注，于取消关注
                                        var guanzhu_button="<a href='javascript:void(0)' class='" + guanzhuClass + "'>"+ guanzhuStr + "</a><a href='javascript:void(0)'class='person_add_focus'><i class='icon-envelope-alt'></i>发私信</a>";

                                        if(loginname==now_page_name)
                                        {
                                            guanzhu_button="";
                                        }
                                       
                                        htmlStr = "<div id='mini' style='"+ position+"' data-mod='popu_60' class='tracking-ad'><div class='jiantou'></div> <dl class='clearfix'>" +
                                            "<dt class='touxiang'><img src='" + avatarurl + "'></dt>" +
                                            "<dd class='person_info name'>" + nickname + " " + flag_cto + " " + flag_lector + "</dd>" +
                                            "<dd class='person_info zhiwei' >" + curjob + "</dd>"+huistr+"</dl>" +
                                            "<div id ='content'>" + kill_des + "</div> <div class='clearfix'>"+guanzhu_button+"<a class='visoter'  target='_blank'href='http://my.csdn.net/" + now_page_name + "?ref=miniprofile'>访问Ta的主页</a> </div>";

                                        $("body").append(htmlStr);

                                        dataCaches[now_page_name] = {};
                                        dataCaches[now_page_name].avatarurl = avatarurl;
                                        dataCaches[now_page_name].nickname = nickname;
                                        dataCaches[now_page_name].curjob = curjob;
                                        dataCaches[now_page_name].interestname = interestname;
                                        dataCaches[now_page_name].skillname = skillname;
                                        dataCaches[now_page_name].flag_cto = flag_cto;
                                        dataCaches[now_page_name].flag_lector = flag_lector;
                                        dataCaches[now_page_name].guanzhuClass = guanzhuClass;
                                        dataCaches[now_page_name].guanzhuStr = guanzhuStr;
                                        dataCaches[now_page_name].huistr = huistr;
                                        dataCaches[now_page_name].huicount = huicount;
                                        dataCaches[now_page_name].flag = flag;
                                        caches[now_page_name] = dataCaches[now_page_name];
                                        blindEvent();

                                        //增加徽章滚动，徽章多于8个产生滚动
                                        if(huicount>8)
                                        {
                                            addslide();
                                        }

                                    }
                                })

                            }                            
                            else
                            {
                               if(hashui)
                               {
                                 position="left:"+(left-60+width/2)+"px;"+"top:"+(top-200)+"px"; 
                               }
                                 else
                               {
                                  position="left:"+(left-60+width/2)+"px;"+"top:"+(top-172)+"px";
                               }

                                var kill_des=interestname + skillname;
                                if((interestname + skillname).length==0)
                                {
                                    kill_des="我比较低调，所以暂无相关介绍"
                                }
                                //当访问的用户是当前用户时上面不应该显示关注，于取消关注
                                var guanzhu_button="<a href='javascript:void(0)' class='person_deliver_letter_un'> <i class='icon-plus'></i>关注</a><a href='javascript:void(0)'class='person_add_focus'><i class='icon-envelope-alt'></i>发私信</a>";
                                var htmlStr = "<div id='mini'  style='"+ position+"' data-mod='popu_60' class='tracking-ad'><div class='jiantou'></div> <dl class='clearfix'>" +
                                    "<dt class='touxiang'><img src='" + avatarurl + "'></dt>" +
                                    "<dd class='person_info name'>" + nickname + " " + flag_cto + " " + flag_lector + "</dd>" +
                                    "<dd class='person_info zhiwei' >" + curjob + "</dd>"+huistr+"</dl>" +
                                    "<div id ='content'>" + kill_des + "</div> <div class='clearfix'>"+guanzhu_button+"<a class='visoter'  target='_blank'href='http://my.csdn.net/" + now_page_name + "?ref=miniprofile'>访问Ta的主页</a> </div>";

                                $("body").append(htmlStr);
                                $('#mini .person_add_focus').click(function () {
                                    if (loginname) {
                                        window.open('http://msg.csdn.net/letters/model?receiver=' + now_page_name, '_blank', 'height=350,width=700');
                                    }
                                    else {
                                        window.location.href = "https://passport.csdn.net/";
                                    }
                                    return false;
                                })
                                $("#mini .person_add_focus").prev().click(function () {

                                    window.location.href = "https://passport.csdn.net/";

                                });
                                dataCaches[now_page_name] = {};
                                dataCaches[now_page_name].avatarurl = avatarurl;
                                dataCaches[now_page_name].nickname = nickname;
                                dataCaches[now_page_name].curjob = curjob;
                                dataCaches[now_page_name].interestname = interestname;
                                dataCaches[now_page_name].skillname = skillname;
                                dataCaches[now_page_name].huistr = huistr;
                                dataCaches[now_page_name].huicount = huicount;
                                dataCaches[now_page_name].flag_cto = flag_cto;
                                dataCaches[now_page_name].flag_lector = flag_lector;
                                caches[now_page_name] = dataCaches[now_page_name];

                                //增加徽章滚动，徽章多于8个产生滚动
                                if(huicount>8)
                                {
                                    addslide();
                                }


                            }
                        }
                    });
                }

                else {
                    var guanzhuClass = caches[now_page_name].guanzhuClass;
                    var guanzhuStr = caches[now_page_name].guanzhuStr;
                    var avatarurl = caches[now_page_name].avatarurl;
                    var nickname = caches[now_page_name].nickname;                
                    var flag_cto = caches[now_page_name].flag_cto;
                    var flag_lector = caches[now_page_name].flag_lector;                  
                    var curjob = caches[now_page_name].curjob;
                    var interestname = caches[now_page_name].interestname;
                    var skillname = caches[now_page_name].skillname;
                    var huistr = caches[now_page_name].huistr;
                    var huicount = caches[now_page_name].huicount;

                     if(huistr)
                    {
                        position="left:"+(left-60+width/2)+"px;"+"top:"+(top-200)+"px"; 
                    }
                    else
                    {
                        position="left:"+(left-60+width/2)+"px;"+"top:"+(top-172)+"px";
                    }


                    var kill_des=interestname + skillname;
                    if((interestname + skillname).length==0)
                    {
                        kill_des="我比较低调，所以暂无相关介绍"
                    }
                    //当访问的用户是当前用户时上面不应该显示关注，于取消关注


                    if (loginname) {
                        var guanzhu_button="<a href='javascript:void(0)' class='" + guanzhuClass + "'>"+ guanzhuStr + "</a><a href='javascript:void(0)'class='person_add_focus'><i class='icon-envelope-alt'></i>发私信</a>";
                        if(loginname==now_page_name)
                        {
                            guanzhu_button=""
                        }
                        htmlStr = "<div id='mini' style='"+ position+"'  data-mod='popu_60' class='tracking-ad' ><div class='jiantou'></div> <dl class='clearfix'>" +
                            "<dt class='touxiang'><img src='" + avatarurl + "'></dt>" +
                            "<dd class='person_info name'>" + nickname + " " + flag_cto + " " + flag_lector + "</dd>" +
                            "<dd class='person_info zhiwei' >" + curjob + "</dd>"+huistr+"</dl>" +
                            "<div id ='content'>" + kill_des  + "</div> <div class='clearfix'>"+guanzhu_button+"<a class='visoter'  target='_blank'href='http://my.csdn.net/" + now_page_name + "?ref=miniprofile'>访问Ta的主页</a> </div>";
                        $("body").append(htmlStr);
                        blindEvent();

                        //增加徽章滚动，徽章多于8个产生滚动
                        if(huicount>8)
                        {
                            addslide();
                        }

                    }
                    else {
                        var guanzhu_button="<a href='javascript:void(0)' class='person_deliver_letter_un'> <i class='icon-plus'></i>关注</a><a href='javascript:void(0)'class='person_add_focus'><i class='icon-envelope-alt'></i>发私信</a>";
                        htmlStr = "<div id='mini'  style='"+ position+"'  data-mod='popu_60' class='tracking-ad' ><div class='jiantou'></div> <dl class='clearfix'>" +
                            "<dt class='touxiang'><img src='" + avatarurl + "'></dt>" +
                            "<dd class='person_info name'>" + nickname + " " + flag_cto + " " + flag_lector + "</dd>" +
                            "<dd class='person_info zhiwei' >" + curjob + "</dd>"+huistr+"</dl>" +
                            "<div id ='content'>" +kill_des + "</div> <div class='clearfix'>"+guanzhu_button+"<a class='visoter'  target='_blank'href='http://my.csdn.net/" + now_page_name + "?ref=miniprofile'>访问Ta的主页</a> </div>";
                        $("body").append(htmlStr);
                        $('#mini .person_add_focus').click(function () {
                            if (loginname) {
                                window.open('http://msg.csdn.net/letters/model?receiver=' + now_page_name, '_blank', 'height=350,width=700');
                            }
                            else {
                                window.location.href = "https://passport.csdn.net/";
                            }
                            return false;
                        })
                        $("#mini .person_add_focus").prev().click(function () {

                            window.location.href = "https://passport.csdn.net/";

                        });

                        //增加徽章滚动，徽章多于8个产生滚动
                        if(huicount>8)
                        {
                            addslide();
                        }
                    }
                }
            }

            hoverTimer = setTimeout(hoverStart, 100);
            return false
        }
    )


    $(document).on("mouseleave", "img[username],#mini",   function (event) {
        clearTimeout(hoverTimer);
        function hoverEnd() {

            $("#mini").remove();
        }

        outTimer = setTimeout(hoverEnd, 200);
        return false

    })



    //徽章增加滚动
    function addslide()
    {
        $('#mini').find('.medals').append('<div class="scroll_btn_con"><a href="javascript:;" class="scroll_right"></a><a href="javascript:;" class="scroll_left_disable"></a></div>');
        var $left = $('#mini').find('.scroll_btn_con').children().eq(1);
        var $right = $('#mini').find('.scroll_btn_con').children().eq(0);
        var $huizhang = $('#mini').find('.medals').find('ul');
        $huizhang.css({'width':($huizhang.children().length*31)});
        var l_limit = 248-$huizhang.children().length*31;

        var timer_move = null;
        var i = 0;

        $left.mouseover(function(){

        timer_move=setInterval(function(){

        if($huizhang[0].offsetLeft>=0)
        {
        clearInterval(timer_move);
        $huizhang.css({'left':0});
        i=0;
        }

        if(i==0)
        {
        $left[0].className = 'scroll_left_disable';
        }
        else if(i==l_limit)
        {
        $right[0].className = 'scroll_right_disable';
        }
        else
        {
        $left[0].className = 'scroll_left';
        $right[0].className = 'scroll_right';
        }


        $huizhang.css({'left':i});
        i+=1;

        },10);          
        });

        $left.mouseout(function(){

        clearInterval(timer_move);
        });

        $right.mouseover(function(){

        timer_move=setInterval(function(){

        if($huizhang[0].offsetLeft<=l_limit)
        {
        clearInterval(timer_move);
        $huizhang.css({'left':l_limit});
        i=l_limit;
        }

        if(i==0)
        {
        $left[0].className = 'scroll_left_disable';
        }
        else if(i==l_limit)
        {
        $right[0].className = 'scroll_right_disable';
        }
        else
        {
        $left[0].className = 'scroll_left';
        $right[0].className = 'scroll_right';
        }

        $huizhang.css({'left':i});
        i-=1;

        },10);
        });

        $right.mouseout(function(){

        clearInterval(timer_move);
        });
    }

}