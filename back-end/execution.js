(function(){
    var $element = $('#addPub')
    var ex = $element.html()

    $element.delegate('button','click',open_op)

    render()

    function open_op(event){
        $elem_curr = $(event.target)
        name = $element.find('input')[0].value
        operation = $elem_curr.html().toLowerCase()
        events.trigger("pub_" + operation,name)
        render()
    }

    function render(){
        $element.find('input').val('')
    }
})();

var Publisher = (function(){

    var publishers = []

    var $element = $('#publist')
    var ex = $element.html()

    $element.delegate('button','click',send)

    events.on('pub_add', add)

    _render();

    function _render(){
        data = {
            publishers: publishers
        }
        $element.html(Mustache.render(ex, data))
    }

    function get(indx){
        indx = indx || -1
        if(indx != -1)
            return publishers[indx]
        return publishers;
    }

    function add(name){
        if (!(name)) {
            alert('Please give your publisher a name!')
            return
        }

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
        $elem_curr = $(event.target)
        $pub = $elem_curr.closest('.publisher');
        name = $pub.find('h3').html();
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


;(function($){
    var $element = $('#addSub')
    var ex_sub = $element.html()

    $element.delegate('button','click',open_op)

    render()

    function open_op(event){
        $currentEl = $(event.target)
        name = $element.find('input')[0].value
        operation = $currentEl.html().toLowerCase() 
        events.trigger("sub_" + operation,name)
        render()
    }

    function render(){
        $element.find('input').val('')
    }
})(jQuery);


var Subscriber = (function(){

    var subscribers = [];

    var $element = $('#subList')
    var ex_sub= $element.html()

    //bindEvents
    $element.delegate('button','click',addTopic)
    events.on('notify', _notify)
    events.on('sub_add', add)
    events.on('sub_delete', del)

    _render() 

    function _render(){
        data = {
            subscribers: subscribers
        }

        $element.html(Mustache.render(ex_sub, data))
    }

    function get(indx){
        indx = indx || -1
        if(indx != -1)
            return subscribers[indx]
        return subscribers;
    }

    function add(name){
        if (!(name)) {
            alert('Please give your subscriber a name!')
            return
        }
        subs = subscribers.map(function(sub, indx){
            return sub.name.toLowerCase()
        });

        indx = subs.indexOf(name.toLowerCase())
        if(indx != -1) {
            alert(name + ' already exists!')
            return
        }

        subscribers.push({'name' : name})
        _render()
    }

    function del(name){
        if (!(name)) {
            alert('Please specify the subscriber you want to delete')
            return
        }
        subs = subscribers.map(function(sub, indx){
            return sub.name
        });

        indx = subs.indexOf(name)

        if(indx != -1) {
            subscribers.splice(indx, 1)
            _render()
            return
        }

        alert('NOT FOUND: '+name)
    }

    function _notify(info){
        subscribers.forEach(function(sub, indx){
            sub.topics = sub.topics || []
            sub.notifications = sub.notifications || []
            if(sub.topics.indexOf(info.topic) != -1)
                sub.notifications.push(info)
        });

        _render()
    }


    function addTopic(event){
        $currentEl = $(event.target)
        $sub = $currentEl.closest('.subscriber');
        name = $sub.find('h3').html();
        topic = $sub.find('input')[0].value;

        subscribers.forEach(function(sub, indx){
            if(name.toLowerCase() == sub.name.toLowerCase()){
                sub.topics = sub.topics || []
                if(sub.topics.indexOf(topic) == -1){
                    sub.topics.push(topic);
                    _render()
                    return;
                }
            }
        });
    }

})();


