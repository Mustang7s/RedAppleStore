//search service
$(document).ready(function(){
    
//normal search
	load_data();
	function load_data(query,userId)
	{
		$.ajax({
			url:"../ajax/getter.php",
			method:"post",
			data:{query:query},
			success:function(data)
			{
				$('#searchresult').html(data);
			}
		});
	}
	
	$('#search_text').keyup(function(){
		var search = $(this).val();
		if(search != '')
		{
			load_data(search);
		}
		else
		{
			load_data();			
		}
	});
//normal search	

});