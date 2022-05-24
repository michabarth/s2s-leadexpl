<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
	let searchParams = new URLSearchParams(window.location.search);
	var tid = "";
	if(searchParams.has('tid')){
		tid = searchParams.get('tid');
	}
	var pid = "";
	if(searchParams.has('pid')){
		pid = searchParams.get('pid');
	}
	
	
	
	
	
	// ************************
	// Hier euren Link einfügen
	// ************************
	var link = 'https://partners.adklick.net/setlead.php?id=2547&orderid=[ORDERID]&user=[pid]&subid=[tid]&pass=4ae796d95577745453dcd0d9d1454649&mode=waiting'
	// ************************
	// Hier euren Link einfügen
	// ************************
	
	
	
	
	
	$("form").submit(function(event) {
		var email = $("#wv-form-item-email").val();
		link = link.replace("[ORDERID]",encodeURIComponent(email));
		link = link.replace("[pid]",pid);
		link = link.replace("[tid]",tid);
		jQuery.ajax({
			url : link,
	   	crossDomain: true,
			dataType:'jsonp'
		});
	});
});
</script>
