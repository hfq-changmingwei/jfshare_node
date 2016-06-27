var suggest_j=-1,tempArr=[],keytempArr=[],tempSize=10,tempLast,allwordsview='',suggest_div_width,search_input_id,sugTO,sugTO2,sugIsDown=false,sugX,sugY,tempSearchkey;
var sug_gid=function(node){
	return document.getElementById(node);
}
var sug_gname=function(node){
	return sug_gid("suggest_key").getElementsByTagName(node);
}

function Suggest_Initialize(id,width,x,y)
{
    search_input_id = id;
    if(sug_gid(search_input_id))
    {
       sug_gid(search_input_id).onkeyup =keyup;
       sug_gid(search_input_id).onkeydown = keydown;
       sug_gid(search_input_id).onpaste = onpaste_search;
       sug_gid(search_input_id).autocomplete = "off";
       document.onclick =hide_suggest;
       window.onresize=suggest_keywords_view;
       suggest_div_width = width;
       sugX=(x=="undefined"||x==""?0:x);
       sugY=(y=="undefined"||y==""?0:y);
    }
    Create_Suggest_Div();
}

function Create_Suggest_Div()
{
    document.write('<div id="suggest_key" class="suggest_key" style="position:absolute;left:0px;top:80px;z-index:10000;background-color:White;" ></div>');
}


function header_trim(str)
{
 return str.replace(/(\s*$)|(^\s*)/g, '');
}

function getkeyword()
{

    var objfrm=document.searchform;
    var selectguan="";
    if(objfrm.catalog.value!=""){
        if(objfrm.catalog.value>4000000){
            selectguan=objfrm.catalog.value;
        }else{
            selectguan="";
        }
    }
	if(sugTO2) clearTimeout(sugTO2);
	if(escape(sug_gid(search_input_id).value)==""){
        hide_suggest();
    }
	else{
	    var tempI=tempCheck(sug_gid(search_input_id).value+objfrm.catalog.value);
	    if(tempI==-1){
            tempSearchkey=(sug_gid(search_input_id).value);
            var myurl="";
    if(objfrm.catalog.value==selectguan){
             myurl="http://schprompt.dangdang.com/suggest.php?"+"keyword="+(sug_gid(search_input_id).value)+"&catalog=" + "&guanid=" + selectguan + "&"+Math.random();
             }else{
                 if(selectguan=="")
                     if(objfrm.catalog.value>4000000)
                        myurl="http://schprompt.dangdang.com/suggest.php?"+"keyword="+(sug_gid(search_input_id).value)+"&catalog="+ "&guanid=" + objfrm.catalog.value +  "&"+Math.random();
                     else
                         myurl="http://schprompt.dangdang.com/suggest.php?"+"keyword="+(sug_gid(search_input_id).value)+"&catalog="+ objfrm.catalog.value +"&guanid=" +   "&"+Math.random();

                 else
                    myurl="http://schprompt.dangdang.com/suggest.php?"+"keyword="+(sug_gid(search_input_id).value)+"&catalog="+ objfrm.catalog.value + "&guanid=" +  "&"+Math.random();
             }
            invokeServer(myurl);
	        viewkeywords(tempI);
                sugIsDown=false;
            }
        else if(tempI==-2){
             hide_suggest();
         }
        else if(tempLast!=sug_gid(search_input_id).value || sug_gid("suggest_key").innerHTML=="" ){
                tempSearchkey=unescape(keytempArr[tempI][1]);
                sug_gid("suggest_key").innerHTML=unescape(tempArr[tempI][1]);
	            viewkeywords(tempI);
                    sugIsDown=false;
        }
   }
   if(sugIsDown) {

        tempLast=sug_gid(search_input_id).value;
        sugTO2=window.setTimeout(getkeyword,3000);
   }
}

function tempFill(n,v){
    if(tempArr.length>=tempSize) tempArr.shift();
    tempArr.push([escape(n),escape(v)])
}
function keytempFill(n,v){
    if(keytempArr.length>=tempSize) keytempArr.shift();
    keytempArr.push([escape(n),escape(v)])
}
function tempCheck(n){
    for(var i=0;i<tempArr.length;i++) {
        var t0=unescape(tempArr[i][0]),t1=unescape(tempArr[i][1]);
        if(t0==n)
            return i;
        else if(t1=="" && n.indexOf(t0)==0 && n.length>t0.length)
            return -2;
    }
    return -1;
}

function invokeServer(url)
{
     var scriptOld=document.getElementById('temp_script');
     if(scriptOld!=null && document.all)
     {
        scriptOld.src = url;
        return;
     }
    var head=document.documentElement.firstChild,script=document.createElement('script');
    script.id='temp_script';
    script.type = 'text/javascript';
    script.src = url;
    if(scriptOld!=null)
       head.replaceChild(script,scriptOld);
    else
       head.appendChild(script);
}

function viewkeywords(shownum)
{
    var x=getposOffset_top(sug_gid(search_input_id),'left');
    var y=getposOffset_top(sug_gid(search_input_id),'top');
    var div_obj=sug_gid("suggest_key");
    if(isIE_c())
        div_obj.style.left=(x+sugX-1)+'px';
    else
        div_obj.style.left=(x+sugX-1)+'px';
    div_obj.style.top=(y+sugY-3)+'px';
    if(shownum>-1)
    div_obj.style.display="inline";
}

function suggest_keywords_view(){
     if(sug_gid("suggest_key").style.display=="none")return;
     viewkeywords(-1);
}

function set_style(num){

	for(var i=0;i<sug_gname("li").length;i++){
		var li_node=sug_gname("li")[i];
		li_node.className="";
	}
	if(suggest_j>-1 && suggest_j<=sug_gname("li").length){
		var i_node=sug_gname("li")[suggest_j];
		sug_gname("li")[suggest_j].className="select_key";
		//sug_gname("li")[suggest_j].style.width=suggest_div_width+"px";
		}
	}
function mo(nodevalue){
    	suggest_j=nodevalue;
	set_style(suggest_j);
}

function form_submit(){
	if(suggest_j>=0 && suggest_j<sug_gname("li").length){
	    sug_gid(search_input_id).value=sug_gname("li")[suggest_j].childNodes[1].nodeValue;
        }
	sug_gid('suggest_searchkey_btn').click()
}

function goto_class(classstr,key){

        sug_gid('suggest_class_btn').click();
    	if(classstr>=4000000)
	{
		location.href="http://search.dangdang.com/mall/search_mall.php?q=" + key + "&cat="+classstr + "&ref=suggest-1-1";
                return ;
	}
	if(classstr.indexOf("01")===0){
		location.href="http://search.dangdang.com/book/search_pub.php?key=" + key + "&catalog=" + classstr + "&SearchFromTop=1&ref=suggest-1-1";
                return;
        }
	if(classstr.indexOf("03")===0){
		location.href="http://search.dangdang.com/music/search_pub.php?key=" + key + "&catalog=" + classstr + "&SearchFromTop=1&ref=suggest-1-1";
                return;
        }
	if(classstr.indexOf("05")===0){
		location.href="http://search.dangdang.com/movie/search_pub.php?key=" + key + "&catalog=" + classstr + "&SearchFromTop=1&ref=suggest-1-1";
                return;
        }
        location.href="http://search.dangdang.com/movie/search_pub.php?key=" + key + "&catalog=" + classstr + "&SearchFromTop=1&ref=suggest-1-1";
        return;
}

function goto_product(product_id){

    sug_gid('suggest_product_btn').click();
     var obj = document.createElement('a');
     obj.href   = "http://product.dangdang.com/product.aspx?product_id="+product_id+"&ref=suggest-1-0";
     window.open(obj.href);
}

function hide_suggest(){
	var nodes=document.body.childNodes
	for(var i=0;i<nodes.length;i++){
		if(nodes[i]!=sug_gid(search_input_id))
                    suggest_j=-1;
                    sug_gid("suggest_key").style.display="none";
                    //sug_gid("suggest_key").innerHTML="";
		}
	}


function keyup(e)
{
    	var keyc;

	if(window.event){
		keyc=event.keyCode;
		}
	else if(e.which){
		keyc=e.which;
		}
        if(keyc==27){hide_suggest();return;}
	if(keyc!=40&&keyc!=38&&keyc!=13){


	if(sugTO) clearTimeout(sugTO);
        if(escape(header_trim(sug_gid(search_input_id).value))!=""){
            sugTO = setTimeout(getkeyword,300);
            sugIsDown=true;
        }else{
            hide_suggest(2);
        }

	}
}

function onpaste_search(){
    sugTO = setTimeout(getkeyword,300);
}
function keydown(e){
	var keyc;

	if(window.event){
		keyc=event.keyCode;
		}
	else if(e.which){
		keyc=e.which;
		}

	if(keyc==40 || keyc==38){
            if(sug_gid("suggest_key").style.display=="none")return;

        if(keyc==40){
		if(suggest_j<sug_gname("li").length){
			suggest_j++;
			if(suggest_j>=sug_gname("li").length) {suggest_j=-1;
                            sug_gid(search_input_id).value=tempSearchkey;
                        }
		}else{
                    suggest_j=0;
                }
		if(suggest_j>=sug_gname("li").length) suggest_j=-1;

	}
	if(keyc==38){
		if(suggest_j>=0){
			suggest_j--;
			if(suggest_j<=-1) {
                            suggest_j=sug_gname("li").length;
                            sug_gid(search_input_id).value=tempSearchkey;
                        }
		}
		else
			suggest_j=sug_gname("li").length-1;
	}
	set_style(suggest_j);
	if(suggest_j>=0 && suggest_j<sug_gname("li").length){
            if(sug_gname("li")[suggest_j].getAttribute("type")=="search")
		sug_gid(search_input_id).value=sug_gname("li")[suggest_j].childNodes[1].nodeValue;
        }
	else{
		//sug_gid(search_input_id).value=temp_str;
		}
	}
}

function getposOffset_top(what, offsettype)
{
    var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
    var parentEl=what.offsetParent;
    while (parentEl!=null)
    {
        totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
         parentEl=parentEl.offsetParent;
    }
    return totaloffset;
}


function getCookie_one(name,type){
  var search;
  search = name + "=";
  var cookies=document.cookie.split(";")  ;

  if(type=="dangdang"){
    var dangdangcookie="";
     for(i=0;i<cookies.length;i++){
        if(cookies[i].indexOf("dangdang.com=")>-1){
            dangdangcookie=cookies[i].split("&");
            for(x=0;x<dangdangcookie.length;x++){
                if(dangdangcookie[x].indexOf(search)>-1){
                    return unescape(dangdangcookie[x].substring(search.length,dangdangcookie[x].length));
                }
            }
        }
     }

  }else{
       for(i=0;i<cookies.length;i++){
        if(cookies[i].indexOf("dangdang.com=")<0){
            if(cookies[i].indexOf(search)>-1){
                return unescape(cookies[i].substring(search.length+1,cookies[i].length));
            }
        }
      }
  }
  return "";
}

function initHeaderOperate()
{
    var usernick=getCookie_one("show_name","dangdang");
    var marks="";
    var chakanlk="";

    var validatedflag=getCookie_one("validatedflag","");
    if(validatedflag=="1")
        marks = "��<a name=\"ddnav_verifymail\" href=\"https://login.dangdang.com/VerifyEmail.aspx\">����δ��֤</a>��";
    if (validatedflag == "2" || validatedflag == "3")
        marks = "��<a name=\"ddnav_verifymail\" href=\"https://login.dangdang.com/VerifyEmail.aspx\">����δ��֤</a>��";

    if(usernick=="")
        xinshou = "<a name=\"ddnav_login\" href=\"https://login.dangdang.com/Signin.aspx\" target=\"_self\" class=\"login_link\">��¼</a><a name=\"ddnav_register\" href=\"https://login.dangdang.com/Register.aspx\" target=\"_self\" class=\"login_link\">���ע��</a>";
    else
    {
        chakanlk = " [<a name=\"ddnav_signout\" href=\"java"+"scr"+"ipt:PageTopSignOut();\" target=\"_self\">�˳���¼</a>]";
        xinshou = "";
        var cartItemsCount=getCookie_one("cart_items_count","");
        if(cartItemsCount!=null&&cartItemsCount.length>0)
        {
            var cic=document.getElementById("cart_items_count");
            if(cic!='')
                cic.innerHTML="("+cartItemsCount+")";
        }
    }

    if(usernick.length>10)
        usernick=usernick.substr(0,10)+"��";

    var nkname=document.getElementById("nickname");
    if(usernick!=''){
         userlink = "<a href=\"http://my.dangdang.com/myhome/homepage.aspx\" target=\"_blank\" class=\"login_link\">"+usernick+"</a>";
        nkname.innerHTML='���ã�'+userlink+''+marks+chakanlk;
    }
    else
        nkname.innerHTML='��ӭ���ٵ���������'+xinshou;
}


function PageTopSignOut(){
    location.href="https://login.dangdang.com/SignOut.aspx?returnurl="+escape(location.href);
}

//����div��ʾ
function showwindownewtop(obj,objdiv,addx,addy){

    var x=getposOffset(obj,'left');
    var y=getposOffset(obj,'top');
    var div_obj=document.getElementById(objdiv);
		div_obj.style.left=(x+addx)+'px';
		div_obj.style.top=(y+addy)+'px';
		if(div_obj.style.display=="none"){
		div_obj.style.display="inline";}
		else{
			div_obj.style.display="none";
		}
	}

function SignOut(){
    var ifru=document.getElementById("usernameifr");
    ifru.src="../../../../../login.dangdang.com/SignOut.aspx-returnurl=http---www.dangdang.com-customer-signout.asp"/*tpa=http://login.dangdang.com/SignOut.aspx?returnurl=http://www.dangdang.com/customer/signout.asp*/;
   changeuser();
}

function changeuser(){
var nkname=parent.document.getElementById("nickname");
nkname.innerHTML='���ã���ӭ���ٵ�������<a href="http://reco.dangdang.com/">����Ϊ���Ƽ���</a>[��<a href="http://login.dangdang.com/Signin.aspx" name="sign_in" target="_self" class="blue12a">��¼</a>/<a href="http://login.dangdang.com/Register.aspx" target="_self" name="Register" class="blue12a">ע��</a>]';
}

//--------------------header---------
//�������˵�
function showgaoji(aid,did){
    var obj = document.getElementById(aid);
    var divotherChannel=document.getElementById(did);
    obj.className="menu_btn hover";
    divotherChannel.style.zIndex = 1000 ;
    divotherChannel.style.display = "block";
}

function hideotherchannel(aid,did){
    var divotherChannel=document.getElementById(did);
    var mydd=document.getElementById(aid);
    if(divotherChannel.style.display!="none"){
            divotherChannel.style.display="none";
            mydd.className="menu_btn";
    }
}
//-------------category start---------
function showCategory(aid,did,json_url){
    var divotherChannel=sug_gid(did);
    divotherChannel.style.display = "block";
    sug_gid(aid).className = "ddnewhead_category";
    if(!menudataloaded){
        loadCategoryJson(json_url);
    }
}

function hiddenCategory(event,did){
    var obj=sug_gid(did);
    if(isMouseLeaveOrEnter(event, obj)){
            obj.style.display="none";
            sug_gid('a_category').className = "ddnewhead_category ddnewhead_category_unit";
            for(i=1;i<16;i++){
                if(sug_gid('__ddnav_sort'+i)){
                    sug_gid('__ddnav_sort'+i).style.display="none";
                    sug_gid('li_label_'+i).className="";
                }
            }
     }
}

function baimouseOver(){
    sug_gid('a_baihchannel').className = "goods hover";
    sug_gid('__ddnav_guan').style.display = "block";
}
function baimouseOut(){
   sug_gid('a_baihchannel').className = "goods";
   sug_gid('__ddnav_guan').style.display = "none";
}

var timecolsediv;
var timestartdiv;
var showindex = 99 ;
var menudataloaded=false;
function amouseOver(index,mid2,obj,evt,key,type){
    if(!menudataloaded)return;
     CreateCategory(index,key,mid2,type);

    showindex = index ;
    if(isMouseLeaveOrEnter(obj,evt)){
        clearTimeout(timecolsediv);
        if(mid2!=1){
            sug_gid('a_category').className = "ddnewhead_category";
        }
        timestartdiv=setTimeout(function(){
        if(showindex != index){
            return ;
        }
        for(i=1;i<16;i++){
            if(sug_gid('__ddnav_sort'+i)){
                sug_gid('__ddnav_sort'+i).style.display="none";
                sug_gid('li_label_'+i).className="";
            }
        }
        sug_gid('li_label_'+index).className = "hover";
        var obj = sug_gid('__ddnav_sort'+index);
        if(obj.style.display =='none'){
            if(index==1){
                obj.style.display = "block";
                return ;
            }
            obj.style.display = "block";
            var movetop=((index-1)*30);
            if(index>8){
                movetop=((index-5)*30)-1;
                obj.style.top = "-"+movetop+"px";
            }else{
                obj.style.top = "-"+movetop+"px";
            }

            /*
            var y = getposOffset_top(sug_gid('categoryh_'+index),'top');
            var scrollTop = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
            var top = scrollTop+Math.max(0,document.documentElement.clientHeight);
            var movetop  = (obj.offsetHeight+y)-top;
            if(movetop>-30){
                obj.style.top = "-"+Math.abs(movetop+6)+"px";
            }else{
               obj.style.top = "-30px";
            }
            */
        }
       },100);
    }
}

function amouseOut(index,mid2,event,obj){
    if(!menudataloaded)return;

    if(isMouseLeaveOrEnter(event, obj)){
        if(mid2!=1){
            sug_gid('a_category').className = "ddnewhead_category";
        }
        clearTimeout(timestartdiv);
        timecolsediv=setTimeout(function(){
            var obj = sug_gid('__ddnav_sort'+index) ;
            obj.style.display = "none";
            sug_gid('li_label_'+index).className = "";
            },100);
        }
}

 function isMouseLeaveOrEnter(e,handler){
      if(e.type != 'mouseout' && e.type != 'mouseover') return false;
       var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;
       while(reltg && reltg != handler){
           reltg = reltg.parentNode;
       }
       return(reltg != handler);
   }

 function popmouseOver(index){
     if(!menudataloaded)return;
    clearTimeout(timecolsediv);
    sug_gid('li_label_'+index).className = "hover";
 }

function categoryOut(event,obj){
     if(!menudataloaded)return;
     if(isMouseLeaveOrEnter(event, obj)){
        for(i=1;i<16;i++){
                if(sug_gid('__ddnav_sort'+i)){
                    sug_gid('__ddnav_sort'+i).style.display="none";
                    sug_gid('li_label_'+i).className="";
                }
            }
    }
}

function fill_brand_promo(sid,cid){
    var bangobj = sug_gid('popup_bang_'+sid);
    var promobj =  sug_gid('popup_promotion_'+cid);
    var fillstring = "";
    if(bangobj){
                fillstring = bangobj.innerHTML;
            if(promobj){
                 fillstring += promobj.innerHTML;
            }
            if(header_trim(bangobj.innerHTML)!=""){
                sug_gid('brand_promo_'+cid).innerHTML = fillstring ;
        }
    }
}

function loadCategoryJson(url)
{
     var scriptOld=document.getElementById('json_script');
     if(scriptOld!=null)
     {
        scriptOld.src = url;
        return;
     }
    var head=document.documentElement.firstChild,script=document.createElement('script');
    script.id='json_script';
    script.type = 'text/javascript';
    script.src = url;
    if(scriptOld!=null)
       head.replaceChild(script,scriptOld);
    else
       head.appendChild(script);
}
//-------------category end--------

//ff����
function isIE_c(){
   return window.navigator.userAgent.toLowerCase().indexOf("msie")>=1?true:false;
}
//��ȡie�汾
function getIEVersion(){
    var ret = -1 ;
    if(navigator.appName == "Microsoft Internet Explorer")
    {
          if(navigator.appVersion.match(/8./i)=='8.')
           {
                ret = 8 ;
           }
           if(navigator.appVersion.match(/7./i)=='7.')
           {
                ret = 7 ;
           }
           if(navigator.appVersion.match(/6./i)=='6.')
           {
               ret = 6 ;
           }
    }
    return ret ;
}
function ouputflash(flashurl){
    document.write ('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="172" height="70"><param name="movie" value="'+flashurl+'" /><param name="quality" value="high" /><embed src="'+flashurl+'" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="172" height="70" ></embed></object>');
}
//ͨ�ô��ڹ���
function showwindow(obj,objdiv,addx,addy){
    var x=getposOffset_top(obj,'left');
    var y=getposOffset_top(obj,'top');
    var div_obj=document.getElementById(objdiv);
        div_obj.style.left=(x+addx)+'px';
        if(addy==12)addy+=10;
        div_obj.style.top=(y+addy)+'px';
        div_obj.style.display="inline";
}

function Hidewindow(objdiv){
    var div_obj=document.getElementById(objdiv);
		if(div_obj){
			div_obj.style.display="none";
		}
}

//����
function searchsubmit()
{
    var objfrm=document.searchform;
    if(sug_gname("li").length>0){
        for(sugnum=0;sugnum<sug_gname("li").length;sugnum++){
            if(sug_gname("li")[sugnum].className=="select_key"&&sug_gname("li")[sugnum].getAttribute("type")!="search"){
                sug_gname("li")[sugnum].onclick();
                return false;
            }
        }
    }
    if(cnlength(objfrm.key.value)<2)
    {
        if(objfrm.key.value.length==0)
        {
	        if(objfrm.catalog.value>4000000 && objfrm.catalog.value<=4000008)
	        {
		        window.location="http://category.dangdang.com/";
		        return false;
	        }
	        else if(objfrm.catalog.value>4000008)
	        {
		        window.location="http://category.dangdang.com/list?cid="+objfrm.catalog.value;
		        return false;
	        }
	        else if(objfrm.catalog.value.indexOf("01")===0)
	        {
		        window.location="http://book.dangdang.com/";
		        return false;
	        }
	        else if(objfrm.catalog.value.indexOf("03")===0)
	        {
		        window.location="http://music.dangdang.com/";
		        return false;
	        }
	        else if(objfrm.catalog.value.indexOf("05")===0)
	        {
		        window.location="http://movie.dangdang.com/";
		        return false;
	        }
        }

        alert("�����ʹ��̣���������д��");
        objfrm.key.focus();
        return false;
    }
    else
    {
           if(cnlength(objfrm.key.value)>70)
           {
                alert(cnlength(objfrm.key.value)+"�����ʹ�������������д��");
                objfrm.key.focus();
                return false;
            }
     }
    //objfrm.key.value=escape(objfrm.key.value)
	if(objfrm.catalog.value=="readonline")
	{
		window.location="http://search.read.dangdang.com/search.php?"+objfrm.readSearchSelect.value+"="+objfrm.key.value;
		return false;
	}
	if(objfrm.catalog.value>=4000000)
	{
		window.location="http://search.dangdang.com/mall/search_mall.php?q="+objfrm.key.value+"&guan="+objfrm.catalog.value;
		return false;
	}
	if(objfrm.catalog.value.indexOf("01")===0)
		objfrm.action="http://search.dangdang.com/book/search_pub.php"
	if(objfrm.catalog.value.indexOf("03")===0)
		objfrm.action="http://search.dangdang.com/music/search_pub.php"
	if(objfrm.catalog.value.indexOf("05")===0)
		objfrm.action="http://search.dangdang.com/movie/search_pub.php"
	if(objfrm.catalog.value=="comm")
		objfrm.action="http://commu.dangdang.com/searchlist.php"
	return true ;
}

function cnlength(str){
    return str.replace(/[^\x00-\xff]/gi,'oo').length;
}

function AddToShoppingCart(product_id)
{
         var url=null;
         if(product_id==null || product_id<1)

                  url="http://shopping.dangdang.com/shoppingcart/shopping_cart.aspx";
         else
                  url="http://shopping.dangdang.com/shoppingcart/shopping_cart_add.aspx?product_ids="+product_id+"&reference_url="+escape(window.location.href);
         var popup=window.open(url,"shoppingcart");
         popup.focus()
}


function AddToFavorlist(product_id)
{
         var url="http://customer.dangdang.com/wishlist/cust_wish_add.aspx?productid="+product_id;
         var popup=window.open(url,"favorlist");
         popup.focus()
}

function top_banner_over(){
 var h = parseInt(document.getElementById("myflash").style.height.replace("px"));
 var hz= parseInt(document.getElementById("reco_top_container").style.height.replace("px"));
 if (hz < divMaxHeight){
 document.getElementById("myflash").style.height = h + 25 +"px";
 document.getElementById("reco_top_container").style.height = hz + 25 +"px";
 clearTimeout(act);
 act = setTimeout('over()', 1);
 }
}

function top_banner_out(){
 var h = parseInt(document.getElementById("myflash").style.height.replace("px"));
 var hz= parseInt(document.getElementById("reco_top_container").style.height.replace("px"));
 if(hz<=divMinHeight+4) {
 document.getElementById("myflash").style.display="none";
 document.getElementById("flash").innerHTML="";
 document.getElementById("likevoit").className="";
 }
 if (hz > divMinHeight) {
 document.getElementById("myflash").style.height = h - 25+ "px";
 document.getElementById("reco_top_container").style.height = hz -25 +"px";
 clearTimeout(act);
 act = setTimeout('out()', 1);
 }
}
