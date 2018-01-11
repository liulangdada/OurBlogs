// Traffic Stats of the entire Web site By baidu end
var _gaq = [];
var userAgent = navigator.userAgent.toLowerCase();

    // Traffic Stats of the entire Web site By baidu
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    // Traffic Stats of the entire Web site By baidu end

!(function(){
  var currUser={
      userName:"",
      userNick:'<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',
      userInfo:"",
      desc : '<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',
      avatar:"//csdnimg.cn/public/common/toolbar/images/100x100.jpg"
    };
  var prodLogo = "none";
  var $oScriptTag =$("#toolbar-tpl-scriptId");
  var skin =$oScriptTag.attr("skin")=="black"?" csdn-toolbar-skin-black ":"";
  var fixed = $oScriptTag.attr("fixed")=="top"?" navbar-fixed-top ":"";
  var prodIndex= $oScriptTag.attr("domain")?$oScriptTag.attr("domain"):window.location.protocol+"//"+window.location.host;
      prodIndex+='?ref=toolbar_logo';
  var getCookie =function (objName){//获取指定名称的cookie的值
      var arrStr = document.cookie.split("; ");
      for(var i = 0;i < arrStr.length;i ++){
      var temp = arrStr[i].split("=");
      if(temp[0] == objName && objName=="UD") return decodeURIComponent(temp[1]);
      if(temp[0] == objName) return decodeURI(temp[1]);
      }
  }
  var setCookie = function (name,value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();// + ";domain=.csdn.net;path=/";
  }
  var HTMLEncode =function(str) {
      var s = "";
      if(str.length == 0) return "";
      s = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
      return s;
    }
  var AUtoAvatar = function(AU){
    if(!AU||!currUser.userName){
      return false;
    }
    var _AUPath = AU.split("").join("/");
    var userName = currUser.userName&&currUser.userName.toLowerCase();
    return "//avatar.csdn.net/"+_AUPath+"/2_"+userName+".jpg";
  }
  var hasLogin = false;
  var loginMark ="unlogin";
  function checkLogin(callback) {
          currUser.userNick = getCookie("UserNick") ||currUser.userNick;
          currUser.userName = getCookie("UserName") || currUser.userName;
          currUser.userInfo = getCookie("UserInfo") || currUser.userInfo;
          currUser.avatar = AUtoAvatar(getCookie("AU")) || currUser.avatar;
          currUser.desc = getCookie("UD") || currUser.desc;
          if(getCookie("UD")){
            currUser.desc = HTMLEncode(currUser.desc.replace(/\+/g," "));
          }
          callback(currUser);
    }
  checkLogin(function(currUser){
    if(currUser.userName&&currUser.userInfo){
        hasLogin = true;
    }
    loginMark = hasLogin?"":"unlogin";
  })

  /*
  * init pord logo
  */
  var prodJSON = {
      "blog" : "blog-icon",
      "download" : "down-icon",
      "bbs" : "bbs-icon",
      "my" :"space-icon",
      "code" : "code-icon",
      "share" : "share-icon",
      "tag" : "tag-icon",
      "dashboard":"dashboard-icon",
      "news" : "news-icon",
      "tag" : "tag-icon",
      "ask" : "ask-icon",
      "notify" : "notify-icon"
  }
  if(prodJSON[$oScriptTag.attr("prod")]){
    prodLogo=prodJSON[$oScriptTag.attr("prod")]||$oScriptTag.attr("prod");
  }

// 因为 logo 是SVG 的，所以必须把 iconfont.js 加入到代码里面
  $(document.body).prepend('<script class="toolbar-s" type="text/javascript" src="//csdnimg.cn/cdn/content-toolbar/iconfont.js"></script>');
  
  // 注册url，https://passport.csdn.net/account/register?ref=toolbar

  var tpl ='\<div class="csdn-toolbar csdn-toolbar tb_disnone '+skin+fixed+'">\
        <div class="container row center-block ">\
          <ul class="pull-left left-menu clearfix">\
            <li>\
              <a href="//www.csdn.net?ref=toolbar" title="CSDN首页" target="_blank">\
              <svg class="icon" aria-hidden="true">\
                  <use xlink:href="#toolbar-csdnlogo"></use>\
              </svg>  \
              </a>\
            </li>\
            <li><a href="http://blog.csdn.net/?ref=toolbar" class="toolbar_to_feed" title="博客" target="_blank">博客</a></li>\
            <li><a href="http://edu.csdn.net?ref=toolbar" title="学院" target="_blank">学院</a></li>\
            <li><a href="http://download.csdn.net?ref=toolbar" title="下载" target="_blank">下载</a></li>\
            <li><a href="http://gitbook.cn/?ref=csdn" title="GitChat" target="_blank">GitChat</a></li>\
            <li class="tb_is1090hide"><a href="http://bbs.csdn.net?ref=toolbar" title="论坛" target="_blank">论坛</a></li>\
            <li class="tb_is1150hide"><a href="http://ask.csdn.net?ref=toolbar" title="问答" target="_blank">问答</a></li>\
            <li class="tb_is1210hide"><a href="http://mall.csdn.net?ref=toolbar" title="商城" target="_blank">商城</a></li>\
            <li class="tb_is1270hide"><a href="http://geek.csdn.net?ref=toolbar" title="极客头条" target="_blank">头条</a></li>\
            <li class="tb_is1330hide"><a href="http://huiyi.csdn.net/?ref=toolbar" title="活动" target="_blank">活动</a></li>\
            <li class="tb_is1400hide"><a href="https://gitee.com/?utm_source=csdn_toolbar" title="码云" target="_blank">码云</a></li>\
            <li class="tb_is1400hide"><a href="http://www.iteye.com?ref=toolbar" title="ITeye" target="_blank">ITeye</a></li>\
            <li class="show-more">\
            <a href="javascript:;"class="show-more-a"><svg width="22" height="4" xmlns="http://www.w3.org/2000/svg"><path d="M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#4F4F4F" fill-rule="evenodd"/></svg></a>\
              <div class="more">\
                <div class="tb_is1090show"><a href="http://bbs.csdn.net?ref=toolbar" target="_blank">论坛</a></div>\
                <div class="tb_is1150show"><a href="http://ask.csdn.net?ref=toolbar" target="_blank">问答</a></div>\
                <div class="tb_is1210show"><a href="http://mall.csdn.net?ref=toolbar" target="_blank">商城</a></div>\
                <div class="tb_is1270show"><a href="http://geek.csdn.net?ref=toolbar" target="_blank">极客头条</a></div>\
                <div class="tb_is1330show"><a href="http://huiyi.csdn.net/?ref=toolbar" target="_blank">活动</a></div>\
                <div class="tb_is1400show"><a href="https://gitee.com/?utm_source=csdn_toolbar" target="_blank">码云</a></div>\
                <div class="tb_is1400show"><a href="http://www.iteye.com?ref=toolbar" target="_blank">ITeye</a></div>\
              </div>\
            </li>\
          </ul>\
          <div class="pull-right login-wrap '+loginMark+'">\
            <ul class="btns">\
            <li class="toolbar-tracking csdn-tracking-statistics tracking-click" data-mod="popu_369"><a href="#" style="padding:0"></a></li>\
              <li>\
                <div class="search_bar csdn-tracking-statistics tracking-click" data-mod="popu_366">\
                  <input type="text" class="input_search" name="">\
                  <a href="//so.csdn.net/so/" target="_blank" class="btn-nobg-noborder btn-search"><i class="iconfont-toolbar toolbar-sousuo"></i></a>\
                </div>\
              </li>\
              <li class="write-bolg-btn csdn-tracking-statistics tracking-click" data-mod="popu_370"><a class="" href="http://mp.blog.csdn.net/postedit?ref=toolbar" target="_blank"><i class="iconfont-toolbar toolbar-icon_boke"></i><span>写博客</span></a></li>\
              <li class="gitChat"><a class="" href="http://gitbook.cn/new/gitchat/activity?utm_source=csdnblog1" target="_blank"><i class="iconfont-toolbar toolbar-icon_gitchatx"></i><span>发Chat</span></a></li>\
              <li class="userinfo"><a href="https://passport.csdn.net/account/login?ref=toolbar">登录</a><span></span><a href="https://passport.csdn.net/account/mobileregister?ref=toolbar&action=mobileRegister">注册</a></li>\
              <li class="userLogin">\
                <div class="loginCenter"><a href="http://my.csdn.net?ref=toolbar" target="_blank"><img class="login_img" src="'+currUser.avatar+'"><div class="toolbar-circle"></div></a></div>\
                <div class="userControl">\
                  <div><a href="http://blog.csdn.net/'+currUser.userName +'?ref=toolbar" target="_blank">我的博客</a></div>\
                  <div><a class="xiaoxi" href="http://msg.csdn.net/?ref=toolbar" target="_blank">消息<span class="toolbar-newsL">(3)</span></a></div>\
                  <div><a href="http://my.csdn.net/my/account/changepwd?ref=toolbar" target="_blank">设置</a></div>\
                  <div><a href="http://bbs.csdn.net/forums/Service?ref=toolbar" target="_blank">反馈</a></div>\
                  <div><a href="http://oldblog.csdn.net/home/help.html" target="_blank">帮助</a></div>\
                  <div><a href="//passport.csdn.net/account/logout?ref=toolbar">退出</a></div>\
                </div>\
              </li>\
            </ul>\
          </div>\
        </div>\
    </div>';
  $(document.body).prepend($(tpl));
  var timeOut = 1;
  if((window.location.host.indexOf('bbs.csdn.net')>-1 && window.location.pathname.indexOf('home')>-1)||(window.location.host.indexOf('bbs.csdn.net')>-1 && window.location.pathname.indexOf('forums')>-1)){
    $('.csdn-toolbar').addClass('csdn-toolbarbbshome')
  }
  function istracking(){
    if(timeOut>10){
      console.log('网速过差或未加载mainjs');
      return false;
    } 
    try {
      if(typeof(csdn.trackingAd) === 'function'){
        bindTracking();
      }else{
        timeOut++;
        setTimeout(istracking,1000);
      }
    } catch (e) {
      timeOut++;
      setTimeout(istracking,1000);
    }
  }
  istracking();
  function bindTracking(){
    csdn.trackingAd('.toolbar-tracking', {
        pid: 'toolbar',
        mod: 'popu_366',
        mtp: '1'
    });
    // search_bar
    csdn.trackingAd('.search_bar', {
        pid: 'toolbar',
        mod: 'popu_369',
        mtp: '1'
    });
    
    csdn.trackingAd('.write-bolg-btn', {
        pid: 'toolbar',
        mod: 'popu_370',
        mtp: '1'
    });
  }

  (function() {
    if(!hasLogin) return ;
    var url = '//svc-notify.csdn.net/get_unread?jsonpcallback=?'
    $.ajax({
      url: url,
      data: {},
      dataType: 'jsonp', // TODO jsonp方式调用不能产生正确的timeout错误等，考虑换成支持跨域的xhr(在ff chrome ie8+)
      success: function (json) {
        // var $userControl = $('.userControl');
        if(json.count > 0){
          var length = json.count;
          // $userControl.css({'width':100,'right':-26})
          if (length>99){
             length = 99;
              // $userControl.css({'width':110,'right':-16})
          }
          $('.toolbar-circle').fadeIn();
          $('.toolbar-newsL').html('('+length+')').css({'marginLeft':4}).fadeIn();
          
          $(document).on('click','.xiaoxi',function(){
            $('.toolbar-circle').fadeOut()
            $('.toolbar-newsL').fadeOut()
          })
        }
      }
    });
  })()
})();

// hover
$(function(){
  var moreHover={
    showMore: function(){
      var $dom = $('.show-more .more');
      if($dom.is(":animated")){
        $dom.stop(true,true).fadeIn(200);
      }
      $dom.stop(true,true).fadeIn(200);
    },
    hideMore:function(){
      var $dom = $('.show-more .more');
      if($dom.is(":animated")){
        $dom.stop(true,true).fadeIn(200);
      }
      $dom.stop(true,true).fadeOut(300);
    }
  }
  var userHover={
    showMore: function(){
      var $dom = $('.userControl');
      if($dom.is(":animated")){
        $dom.stop(true,true).fadeIn(200);
      }
      $dom.stop(true,true).fadeIn(200);
    },
    hideMore:function(){
      var $dom = $('.userControl');
      if($dom.is(":animated")){
        $dom.stop(true,true).fadeIn(200);
      }
      $dom.stop(true,true).fadeOut(300);
    }
  }
  $('.show-more').hover(moreHover.showMore,moreHover.hideMore)
  $('.userLogin').hover(userHover.showMore,userHover.hideMore)
  
  

})
// search
$(function(){
  //获取 网站位置 
  function getT(){
    var title = window.location.host.split( ".",1)[0];
    var t = ''
        switch (title) {
          case 'www':
            t = ' '
            break;
          case 'blog':
            t = 'blog'
            break;
          case 'blog':
            t = 'codes_snippet'
            break;
          case 'bbs':
            t = 'discuss'
            break;
          case 'download':
            t = 'doc'
            break;
          case 'geek':
            t = 'news'
            break;
          case 'edu':
            t = 'course'
            break;
          default:
            t = ' '
        }
    return t;
  }
  function goFn(obj,txt){
      var searchTxt = encodeURIComponent(txt),
              url = "//so.csdn.net/so/search/s.do?q="+searchTxt + "&t="+getT()+"";
      if(searchTxt == ''){
          return false;
      }else{
        window.open(url)
          // window.location.href = url;
      }

  }
    var searchBtn = $(".btn-search"),
            searchInpt = $(".input_search"),
            _this = this;
    searchBtn.on("click", function (event) {
        goFn($(this), $(this).prev("input").val());
    });

    searchInpt.keyup(function (event) {
        var evCode = event.keyCode;
        if(evCode == 13) {
            var searchTxt = encodeURIComponent($(this).val()),
                url = "//so.csdn.net/so/search/s.do?q=" + searchTxt + "&t="+getT()+"";
            // window.location.href = url;
            window.open(url)
        }
    });
    // 绑定删除方法
    $(document).on('click','.toolbar_delete_bar',function(){
      $('.input_search').val(' ')
    })
    // 搜索框动画
    var isInputSearch = false;
    $('.input_search').focus(function(){
      // console.log($(window).width())
      if ($(window).width()< 1053) {
        $('.show-more').addClass('tb_disnone');
        $('.left-menu').removeClass('blurshow').addClass('focusnone');
      }

      if($._data($('.input_search')[0],'events')['propertychange']) return
      $('.input_search').on('input propertychange', function() {
        if($(this).val()){
          if(isInputSearch) return 
          isInputSearch=true
          transform_search_icon()
        }else{
          transform_search_icon()
          isInputSearch = false
        }
      }); 
      
    })
    $('.input_search').blur(function(){
      $('.search_bar').animate({width:180},500)
      $('.input_search').animate({width:130},500,function(){
        $('.show-more').removeClass('tb_disnone');
        $('.left-menu').removeClass('focusnone').addClass('blurshow');
      })
    })
    $(document).on('click','.btn_clear',function(){
      $('.input_search').val('');
      transform_search_icon()
      isInputSearch = false
    })
    function transform_search_icon(){
      if($('.btn-search').length>0){
        $('.btn-search').detach();
        $('.search_bar').append('<a href="javascript:;" class="btn-nobg-noborder btn_clear"><i class="iconfont-toolbar toolbar-guanbi1"></i></a>');
      }else{
        $('.btn_clear').detach();
        $('.search_bar').append('<a href="//so.csdn.net/so/" target="_blank" class="btn-nobg-noborder btn-search"><i class="iconfont-toolbar toolbar-sousuo"></i></a>');
      }
    }
    // toolbar_prompt_hover($('.write-bolg-btn a'),'写博客')
    // toolbar_prompt_hover($('.gitChat a'),'发布Chat')
    // toolbar_prompt_hover($('.search_bar'),'err')
    function toolbar_prompt_hover(e,text){
      e = e instanceof jQuery ? e:$(e);
      e.css({'position':'relative'})
      var con = {
                e:e,
                text:text,
                isbind:false
       },
        isHave = false;
      this.events = this.events ? this.events : [con];
      for (var i = 0; i < this.events.length; i++) {
        if(this.events[i].e[0] == e[0]){
          this.events[i].text = text;
          this.events[i].e.children('.toolbar-prompt-box').text(this.events[i].text);
          isHave = true;
        }
      }
      if(!isHave){
        this.events.push(con);
        isHave= false
      }
      if(!this.events[this.events.length-1].isbind){
        toolbar_binding(this.events[this.events.length-1])
        this.events[this.events.length-1].isbind = true;
      }
    }
    function toolbar_binding(evens){
      // console.log(evens);
          var even = evens.e;
              t = evens.text;
          even.append(toolbar_tpls(t))
          var even_children = even.children('.toolbar-prompt-box'),
              even_children_w = even_children.width(),
              even_width = even.width();
          even_children.css({'left':-((even_children_w+16-even_width)/2)}).children().css({'left':(even_children_w+16)/2-5})
          even.hover(toolbar_prompt_show,toolbar_prompt_hide)
    }
    function toolbar_tpls(t) {
      var tpl = '<div class="toolbar-prompt-box">\
                  <div class="arrow"></div>\
                  <span>'+t+'</span>\
                </div>';
                return tpl;
    }
    function children_show(t){
      $(t).children('.toolbar-prompt-box').fadeIn(500)  
    }
    var clearTime;//计时器id
    function toolbar_prompt_show() {
      if($(this).children('.toolbar-prompt-box').is(":animated")){
        $(this).children('.toolbar-prompt-box').stop(true,true).css({'display':'block'})
      }else{
        clearTime = setTimeout(children_show,1000,this);
      }
    }
    function toolbar_prompt_hide() {
      clearTimeout(clearTime)
      $(this).children('.toolbar-prompt-box').fadeOut(500)

    }
  // 阻止
  $(document).on('click','.prevent_a',function(e){
    e.preventDefault();
  });


})