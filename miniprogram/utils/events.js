function on (name, self, callback) {
    let tuple = [self, callback];
    let callbacks = getApp().events[name];
    if (Array.isArray(callbacks)) {
        callbacks.push(tuple);
    } else {
        getApp().events[name] = [tuple];
    }
}

function remove (name, self) {
    let callbacks = getApp().events[name];
    if (Array.isArray(callbacks)) {
        getApp().events[name] = callbacks.filter((tuple) => {
            return tuple[0] != self;
        });
    }
}

function emit (name, data) {
    let callbacks = getApp().events[name];
    if (Array.isArray(callbacks)) {
        callbacks.map(tuple => {
            let self = tuple[0];
            let callback = tuple[1];
            callback.call(self, data);
        });
    }
}

export { on, remove, emit };