 
  function getCp(){
	  $.getJSON(root + '/app/data?viewid=gw_pro', function(rt){
		  var data = rt.data;
		  var strVar = "";
		  $.each(data, function(i, obj){
			  strVar += "<figure>\n";
			  strVar += "        <a href=\"./detal.jsp?id=" + obj.id + "\">\n";
			  strVar += "          <img src=\"" + obj.img_content + "\" alt=\"\">\n";
			  strVar += "          <figcaption>" + obj.title + "<\/figcaption>\n";		  
			  strVar += "          <span>" + obj.tags + "<\/span>\n";
			  strVar += "        <\/a>\n";
			  	strVar += "            <div class=\"left-pic-show\">\n";
			    strVar += "                <div class=\"anli_ul_div_t_1\">\n";
			    strVar += "                    <div class=\"anli_ul_div_t_1_1\">\n";
			    strVar += "                        <img src=\"" + obj.cover_img + "\" />\n";	    
			    strVar += "                    <\/div>\n";
			    strVar += "					<span>扫一扫，查看实例</span>\n";			    
			    strVar += "                <\/div>\n";
			    strVar += "            <\/div>\n";	
			  strVar += "      <\/figure>\n";
		  }) 
		  $(".bussinessshow").append(strVar);
	  })
  }
  function getCp1(type){
	  
	  var str_param = type == "全部" ? "" : "&type=" + type;
	  $.getJSON(root + '/app/data?viewid=gw_pro'+str_param, function(rt){
		  var data = rt.data;
		  var strVar = "";
		  $(".anli_ul").append(strVar);
		  $.each(data, function(i, obj){
			    strVar += "<li class=\"col-md-1-5\" bor=\",0,,,\">\n";
			    strVar += "    <div class=\"anli_ul_div\">\n";
			    strVar += "        <div class=\"anli_ul_div_img\">\n";
			    strVar += "            <img class=\"img\" src=\"" + obj.img_content + "\" />\n";
			    strVar += "            <div class=\"anli_ul_div_t\">\n";
			    strVar += "                <div class=\"anli_ul_div_t_1\">\n";
			    strVar += "                    <div class=\"anli_ul_div_t_1_1\">\n";
			    strVar += "                        <img src=\"" + obj.cover_img + "\" />\n";
			    strVar += "                    <\/div>\n";
			    strVar += "                <\/div>\n";
			    strVar += "            <\/div>\n";
			    strVar += "        <\/div>\n";
			    strVar += "        <div class=\"anli_ul_div_title\">"+obj.title+"<\/div>\n";
			    strVar += "        <div style=\"text-align:center; bottom:10px;\"><span class=\"xxspan1\" title=\"开通应用：活动票务 同城生活\">"+obj.tags+"<\/span><\/div>\n";
			    strVar += "    <\/div>\n";
			    strVar += "<\/li> \n";

		  }) 
		  $(".anli_ul").append(strVar);
	  })
  }
  
  
  	  
  