
$(function(){
	// test for more common things than total for any one person
	// console.log("Compare",users.commonthings,users.user1things,users.user2things);
	if (users.commonthings < users.user1things || 
		users.commonthings < users.user2things) {
		
		var $commonthings = $("#commonthings");

		// labels
		$("#user1label").html(users.user1name + ": " + users.user1things);
		$("#user2label").html(users.user2name + ": " + users.user2things);
		$commonthings.html("Common: " + users.commonthings);
		
		var whosmaller = users.user1things > users.user2things ? "user2things" : "user1things";
		var whosbigger = users.user1things > users.user2things ? "user1things" : "user2things";

		// always resize for common circle sizes
		var modifier = 200 / users[whosbigger];
		$.each(users, function(key, val) {
			if (!_.isString(val))	{ 
				users[key] = val * modifier;
				console.log("!!!",val * modifier);

			}
		});
		
		$("#user1things").width(users.user1things)
						 .height(users.user1things)
						 .css('border-radius', users.user1things);
		
		$("#user2things").width(users.user2things)
						 .height(users.user2things)
						 .css({'border-radius': users.user2things, 'margin-left': -users.commonthings});

		$("#" + whosmaller).css("margin-top", (users[whosbigger] - users[whosmaller]) / 2);

		// size container
		$("#venn_container").width(10 + users.user1things + users.user2things - users.commonthings);
		// position common things
		$commonthings.css({'margin-left': users.user1things - users.commonthings});

	} else {
		console.log("test failed");
		$("#venn_container").children().hide();
	}

});