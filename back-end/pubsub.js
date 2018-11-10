
var events = {
    events: {},
    on: function (event_name, func) {
        this.events[event_name] = this.events[event_name] || [];
        this.events[event_name].push(func);
    },
    off: function(event_name, func) {
        if (this.events[event_name]) {
            var x =0;
            while(i<this.events[event_name].length){
                if (this.events[event_name][i] === func) {
                    this.events[event_name].splice(i, 1);
                    break;
                }
                i++;

            };
        }
    },
    trigger: function (event_name, data) {
        if (this.events[event_name]) {
            this.events[event_name].forEach(function(func) {
                func(data);
            });
        }
    }
};