if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://js.n0bodysec.es/prism/themes/prism.css'
	}).appendTo('head');
	
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://js.n0bodysec.es/prism/plugins/line-numbers/prism-line-numbers.css'
	}).appendTo('head');
				
	$.getScript("https://js.n0bodysec.es/prism/prism.js").done(function(script, textStatus) {
		$.getScript("https://js.n0bodysec.es/prism/components/prism-markup-templating.min.js").done(function(script, textStatus) {
			$.getScript("https://js.n0bodysec.es/prism/plugins/autoloader/prism-autoloader.min.js").done(function(script, textStatus) {
				Prism.plugins.autoloader.languages_path = 'https://js.n0bodysec.es/prism/components/';
				
				$.getScript("https://js.n0bodysec.es/prism/plugins/line-numbers/prism-line-numbers.min.js", function(){ Prism.highlightAll(); });
			});
		});
	});
}
