

var Publisher = (function(){

	var publishers = []
	var $el = $('#publishlist')
	var template = $el.html()
	$el.delegate('button','click',send)

	events.on('pub_add', add)

	_render();

	function _render(){
		data = {
				publishers: publishers
		}
		$el.html(Mustache.render(template, data))
	}
(function(){
	var $el = $('#add_p')
	var template = $el.html()

	$el.delegate('button','click',op)

	render()

	function op(event){
		$currentEl = $(event.target)
		name = $el.find('input')[0].value
		operation = $currentEl.html().toLowerCase()
		events.trigger("pub_" + operation,name)
		render()
	}

	function render(){
		$el.find('input').val('')
	}
})();

var Subscriber = (function(){

	var subscribers = [];

	var $el = $('#subscribelist')
	var template = $el.html()

	$el.delegate('button','click',addTopic)
	events.on('notify', _notify)
	events.on('add_s', add)


	_render();

	function _render(){
		data = {
				subscribers: subscribers
		}

		$el.html(Mustache.render(template, data))
	}

;(function($){
	var $el = $('#sub-addition')
	var template = $el.html()

	$el.delegate('button','click',op)

	render()

	function op(event){
		$currentEl = $(event.target)
		name = $el.find('input')[0].value
		operation = $currentEl.html().toLowerCase() 
		events.trigger("sub_" + operation,name)
		render()
	}

	function render(){
		$el.find('input').val('')
	}
})(jQuery);
