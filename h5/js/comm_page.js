function showPages(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	var html = '<div style="float:right;padding-top:10px;">';
	html += '共&nbsp'+pageTotalSize+'&nbsp条:&nbsp;';
	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo == 1) {
		// html+='<span class="inactive"> 上一页 </span>';
		html += '<span class="inactive"> 上一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo - 1) + ')" title="Page ' + (pageNo - 1)
				+ '"> 上一页 </a>';
	}

	for ( var i = 1; i <= size; i++) {
		if (i == pageNo) {
			html += '<span class="this-page"> ' + i + ' </span>';
		} 
		else {
			html += '<a href="javascript:' + showFunction + '(' + pageSize
					+ ',' + i + ')" title="Page ' + i + '"> ' + i + ' </a>';
		}
	}

	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo >= size) {
		html += '<span class="inactive"> 下一页 </span></div>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo + 1) + ')" title="Page ' + (pageNo + 1)
				+ '"> 下一页 </a>';
	}

	//html += '<div style="float:right;">'
	//		+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
	//		+ '&nbsp;</span>条&nbsp;' + '</div>';

	$("#" + pageObj).html(html);
}

function showPages_left0(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	// alert("size="+size);

	// alert(Math.floor(size));
	// alert(pageTotalSize%pageSize);


	var html = '<div>';
	html += '共&nbsp'+size+'&nbsp页:&nbsp;'+pageTotalSize +"&nbsp;条记录";
	//html += '共&nbsp'+pageTotalSize+'&nbsp条&nbsp;'+size +"&nbsp;页&nbsp;";
	//html += '共&nbsp'+size +"&nbsp;页&nbsp;:";
	html+=",每页"+pageSize+"条记录";
	

	//html += '<div style="float:right;">'
	//		+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
	//		+ '&nbsp;</span>条&nbsp;' + '</div>';

	$("#" + pageObj).html(html);
}

function showPages_left(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	// alert("size="+size);

	// alert(Math.floor(size));
	// alert(pageTotalSize%pageSize);


	var html = '<div>';
	html += '共&nbsp'+pageTotalSize+'&nbsp条&nbsp;'+size +"&nbsp;页&nbsp;:";
	//html += '共&nbsp'+size +"&nbsp;页&nbsp;:";
	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo == 1) {
		// html+='<span class="inactive"> 上一页 </span>';
		html += '<span class="inactive"> 上一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo - 1) + ')" title="Page ' + (pageNo - 1)
				+ '"> 上一页 </a>';
	}

	for ( var i = 1; i <= size; i++) {
		if (i == pageNo) {
			html += '<span class="this-page"> ' + i + ' </span>';
		} else if(i!=1 && i!=2 && i!=size  && ( i<pageNo-2 || i>pageNo+2) )
			{
			//html += '<span class="this-page"> ' +'.'+ ' </span>';
				if(i==pageNo-3 || i==pageNo+3)
				{
					html += '<span> ' +'...'+ ' </span>';
				}	
			}
		else {
			html += '<a href="javascript:' + showFunction + '(' + pageSize
					+ ',' + i + ')" title="Page ' + i + '"> ' + i + ' </a>';
		}
	}

	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo >= size) {
		html += '<span class="inactive"> 下一页 </span></div>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo + 1) + ')" title="Page ' + (pageNo + 1)
				+ '"> 下一页 </a>';
	}

	//html += '<div style="float:right;">'
	//		+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
	//		+ '&nbsp;</span>条&nbsp;' + '</div>';

	$("#" + pageObj).html(html);
}

function showPagesNew(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	var html = "";
	html += '<div style="float:left;">Pages:&nbsp;';
	if (pageNo == 1) {
		// html+='<span class="inactive"> 上一页 </span>';
		html += '<span class="inactive"> 上一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo - 1) + ')" title="Page ' + (pageNo - 1)
				+ '"> 上一页 </a>';
	}

	var startSize = 1;
	// var endSize = size;
	if (pageNo <= 5) {
		startSize = 1;
	} else if (pageNo > 5) {
		startSize = 1 + pageNo - 5;
	}
	
	if(startSize>1)
	{
		html += '<span class="inactive">...</span>';
	}

	for ( var i = startSize; i <= size && i < startSize + 5; i++) {
		if (i == pageNo) {
			html += '<span class="this-page"> ' + i + ' </span>';
		} else {
			html += '<a href="javascript:' + showFunction + '(' + pageSize
					+ ',' + i + ')" title="Page ' + i + '"> ' + i + ' </a>';
		}
	}
	
	if(startSize+5<=size)
	{
		html += '<span class="inactive">...</span>';
	}

	if (pageNo >= size) {
		html += '<span class="inactive"> 下一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo + 1) + ')" title="Page ' + (pageNo + 1)
				+ '"> 下一页 </a>';
	}

	html += '</div><div style="float:right;">'
		+'总计<span style="color:#004499;font-size:16px;">&nbsp;'+pageTotalSize+ '&nbsp;</span>条&nbsp;&nbsp;'
		+'共<span style="color:#004499;font-size:16px;">&nbsp;' + size
		+ '&nbsp;</span>页&nbsp;' + '&nbsp;&nbsp;到第<span style="color:#004499;font-size:14px;">&nbsp;'
		+'<input id="jumpto" type="text" style="text-align:center;vertical-align:middle;width:30px;color:#004499;font-size:14px;" '
		+'name="jumpto" size="4" value="'+pageNo+'">'
		+'&nbsp;</span>页'
		+'<button type="button" style="background-position: 0 -179px;'
		+'padding: 0 0 0 0 ;'
		+'cursor:pointer;'
		+'height:20px;'
	    +'margin: 0 0 0 5px;'
	    +'font-size: 12px;'
	    +'text-align:center;'
	    //+'text-indent: -9999px;'
	    //+'vertical-align: middle;'
	    +'width: 42px;" '
	    +'onclick="'+showFunction+'(' +pageSize + ',0)">确定</button>'
		+'</div>';
	
//	html += '<div style="float:right;">'
//			+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
//			+ '&nbsp;</span>条&nbsp;' + '</div>';
	
	// alert("###############==="+html);

	$("#" + pageObj).html(html);
}


function showPages2(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	var html = '<div style="float:right;padding-top:10px;">';
	//html += '共&nbsp'+pageTotalSize+'&nbsp条&nbsp;'+size +"&nbsp;页&nbsp;:";
	html += '共&nbsp'+size +"&nbsp;页&nbsp;:";
	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo == 1) {
		// html+='<span class="inactive"> 上一页 </span>';
		html += '<span class="inactive"> 上一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo - 1) + ')" title="Page ' + (pageNo - 1)
				+ '"> 上一页 </a>';
	}

	for ( var i = 1; i <= size; i++) {
		if (i == pageNo) {
			html += '<span class="this-page"> ' + i + ' </span>';
		} else if(i!=1 && i!=2 && i!=size  && ( i<pageNo-2 || i>pageNo+2) )
			{
			//html += '<span class="this-page"> ' +'.'+ ' </span>';
				if(i==pageNo-3 || i==pageNo+3)
				{
					html += '<span class="this-page"> ' +'...'+ ' </span>';
				}	
			}
		else {
			html += '<a href="javascript:' + showFunction + '(' + pageSize
					+ ',' + i + ')" title="Page ' + i + '"> ' + i + ' </a>';
		}
	}

	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo >= size) {
		html += '<span class="inactive"> 下一页 </span></div>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo + 1) + ')" title="Page ' + (pageNo + 1)
				+ '"> 下一页 </a>';
	}

	//html += '<div style="float:right;">'
	//		+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
	//		+ '&nbsp;</span>条&nbsp;' + '</div>';

	$("#" + pageObj).html(html);
}

function showPages3(pageObj, showFunction, pageSize, pageNo, pageTotalSize,
		totalsize) {
	if(pageTotalSize==null || pageTotalSize=="undefined" || pageTotalSize=="")
	{
		pageTotalSize="0";
	}
	
	var size = 0 ;
	if(pageSize!=null && pageSize!="undefined"&& pageSize!="")
	{
		size = pageTotalSize / pageSize;
		if (pageTotalSize % pageSize > 0) {
			size += 1;
		}

		size = Math.floor(size);
	}	

	var html = '<div style="float:right;padding-top:10px;">';
	//html += '共&nbsp'+pageTotalSize+'&nbsp条&nbsp;'+size +"&nbsp;页&nbsp;:";
	html += '共&nbsp'+size +"&nbsp;页&nbsp;:";
	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo == 1) {
		// html+='<span class="inactive"> 上一页 </span>';
		html += '<span class="inactive"> 上一页 </span>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo - 1) + ')" title="Page ' + (pageNo - 1)
				+ '"> 上一页 </a>';
	}

	for ( var i = 1; i <= size; i++) {
		if (i == pageNo) {
			html += '<span class="this-page"> ' + i + ' </span>';
		} else if(i!=1 && i!=2 && i!=size  && ( i<pageNo-2 || i>pageNo+2) )
			{
			//html += '<span class="this-page"> ' +'.'+ ' </span>';
				if(i==pageNo-3 || i==pageNo+3)
				{
					html += '<span class="this-page"> ' +'...'+ ' </span>';
				}	
			}
		else {
			html += '<a href="javascript:' + showFunction + '(' + pageSize
					+ ',' + i + ')" title="Page ' + i + '"> ' + i + ' </a>';
		}
	}

	if (pageNo==null || pageNo=="" || pageNo=="undefined" || pageNo >= size) {
		html += '<span class="inactive"> 下一页 </span></div>';
	} else {
		html += '<a href="javascript:' + showFunction + '(' + pageSize + ','
				+ (pageNo + 1) + ')" title="Page ' + (pageNo + 1)
				+ '"> 下一页 </a>';
	}
	html+='</div>';

	//html += '<div style="float:right;">'
	//		+ '共<span style="color:#004499;font-size:16px;">&nbsp;' + totalsize
	//		+ '&nbsp;</span>条&nbsp;' + '</div>';
	
	html+='<div style="float:left;padding-top:10px;">'
		+'<span>设置每页显示条数：</span>';
	if(pageSize==10)
	{
		html+='<a style="background-color:#D9ECFF;">10</a>&nbsp;'
		+'<a href="javascript:' + showFunction + '(20,1)">20</a>&nbsp;'
		+'<a href="javascript:' + showFunction + '(50,1)">50</a>&nbsp;';
	}else if(pageSize==20)
	{
		html+='<a href="javascript:' + showFunction + '(10,1)">10</a>&nbsp;'
		+'<a style="background-color:#D9ECFF;">20</a>&nbsp;'
		+'<a href="javascript:' + showFunction + '(50,1)">50</a>&nbsp;';
	}else if(pageSize==50) 
	{
		html+='<a href="javascript:' + showFunction + '(10,1)">10</a>&nbsp;'
		+'<a href="javascript:' + showFunction + '(20,1)">20</a>&nbsp;'
		+'<a style="background-color:#D9ECFF;">50</a>&nbsp;';
	}	
	html+='</div>';
	$("#" + pageObj).html(html);
	
	SetCookie("pageSize",pageSize);
}