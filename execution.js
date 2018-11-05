
(function(){
	var $el = $('#addPub')
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
var Publisher = (function(){

	var publishers = []

	var $el = $('#publist')
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

	function get(indx){
		indx = indx || -1
		if(indx != -1)
			return publishers[indx]
		return publishers;
	}

	function add(name){

		pubs = publishers.map(function(pub, indx){
			return pub.name.toLowerCase()
		});

		indx = pubs.indexOf(name.toLowerCase())
		if(indx != -1) {
			alert(name + ' is already a publisher!')
			return
		}

		publishers.push({'name' : name})
		_render()
	}


	function send(event){
        $currentEl = $(event.target)
        $pub = $currentEl.closest('.publisher');
        name = $pub.find('h4').html();
        topic = $pub.find('input')[0].value;
        payload = $pub.find('textarea')[0].value;

		work = {
			'name':name,
			'topic': topic,
			'payload': payload
		};

		pubs = publishers.map(function(publisher){
			return publisher.name;
		});

		indx = pubs.indexOf(work.name);

		publishers[indx].works = publishers[indx].works || []

		publishers[indx].works.push({
			'topic':topic,
			'payload':payload
		});

		_render();

		events.trigger('notify', work)
	}

	return {
		get: get,
		send: send
	}

})();




