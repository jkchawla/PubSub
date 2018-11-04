var pubsub = {};

//Function definition
(function(q) {
    var topics = {}, subUid = -1;
    //process.stdout.write('working \n');
    q.subscribe = function(topic, func) {
    	process.stdout.write('subscribed');
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
//defining publish function topic and arguments 
    q.publish = function(topic, args) { 
        if (!topics[topic]) {
            return false;
        }

        setTimeout(function() { //Timeout
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0; 

            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);
        return true;

    };
    // q.unsubscribe = function(token) {
    //     for (var m in topics) {

    //         if (topics[m]) {
    //         	process.stdout.write('working \n');
    //             for (var i = 0, j = topics[m].length; i < j; i++) {
    //                 if (topics[m][i].token === token) {
    //                     topics[m].splice(i, 1);
    //                     return token;
    //                 }
    //             }
    //         }
    //     }
    //     return false;
    // };
}

(pubsub));

