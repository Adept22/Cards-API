function AD(selector) {
    if (typeof selector === 'function') {
        addEventListener('DOMContentLoaded', selector);
        return;
    }
    if (!(this instanceof AD)) {
        return new AD(selector)
    }
    this.length = 0;
    try {
        var elements = document.querySelectorAll(selector);
        var elementsArr = elements ? Array.prototype.slice.call(elements) : [];
        Array.prototype.push.apply(this, elementsArr);
    } catch (e) {}
}

AD.prototype.each = function (handler) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];
        var returns = handler.call(element, i);
        if (returns === false) {
            break;
        }
    }
    return this;
};

AD.prototype.css = function (props) {
    if (arguments.length === 2) {
        var prop = props;
        var value = arguments[1];
        props = {};
        props[prop] = value;
    }
    return this.each(function() {
        var style = this.style;
        for (var prop in props)
			if (props.hasOwnProperty(prop)) {
				var value = props[prop];
				style[prop] = value;
			}
    });
};

AD.prototype.toggleClass = function (classForToggle) {
    return this.each(function() {
        var elementClassNames = this.className.split(' ');
		if (elementClassNames.indexOf(classForToggle) == -1)
		    elementClassNames.push(classForToggle);
		else
		    elementClassNames.splice(elementClassNames.indexOf(classForToggle), 1);
		this.className = elementClassNames.join(' ');
    });
}
