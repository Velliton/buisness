$('.nav-newsmedia-item').click(function(event){
	var i=$(this).data('filter');
	if (i==3) {
		$('.item-newsmedia-column').show();
	} else {
		$('.item-newsmedia-column').hide();
		$('.item-newsmedia-column.f_'+i).show();
	}	
	$('.nav-newsmedia-item').removeClass('active');
	$(this).addClass('active');
	return false;
})