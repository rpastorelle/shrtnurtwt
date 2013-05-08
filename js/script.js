var a=[" and "," are "," our "," ate "," for "," wait "," weight "," in "," the "," hate "," mate "," swag ", " facebook "];
var b=[" & "," r ", " r "," 8 "," 4 "," w8 "," w8 "," n "," da "," h8 "," m8 "," #douche ", " \#fb "];
$(function(){
	
	var $tweet = $("#tweet"),
		$countDisplay = $("#twitifyoutput"),
		count = $tweet.val().length;
	
	$countDisplay.text( count );
	
	$("#send").click(function(e){
		e.preventDefault();
		var tweet = $tweet.val().toLowerCase();
		for( var i=0;i<a.length;i++ ){
			tweet = tweet.replace( a[i], b[i] );
		}
		$tweet.val( tweet );
		count = tweet.length;
		$countDisplay.text( count );
	});
	
	
});