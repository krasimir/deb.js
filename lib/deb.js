(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        factory();
    }
}(this, function() {
	Function.prototype.debc = function(desc) {
		return Function.prototype.deb.apply(this, [desc, true])
	}
	Function.prototype.deb = function(desc, collapsed) {
		
		var getColor = function() {
			return 'rgb(' + (Math.floor((256-180)*Math.random()) + 200) + ',' + (Math.floor((256-180)*Math.random()) + 200) + ',' + (Math.floor((256-180)*Math.random()) + 200) + ')';
		}
		var log = function(str, group, styles) {
			if(typeof console === 'undefined') return;
			if(is_chrome && typeof str === 'string') {
				if(styles !== false && str.indexOf('%20') < 0) {
					console[group ? (collapsed ? 'groupCollapsed' : 'group') : 'log']('%c' + str, 'background:' + bg + ';' + styles);
				} else {
					console[group ? (collapsed ? 'groupCollapsed' : 'group') : 'log'](str);
				}
			} else {
				console[group ? 'group' : 'log'](str);
			}
		}
		var groupEnd = function() {
			if(typeof console === 'undefined') return;
			console.groupEnd();
		}
		var fnIn = function(stack, args, fn) {
			var fnDef = fn.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[0];
			// in
		    if (stack[0].indexOf('Error') === 0) { stack = stack.slice(1); }
			log(desc + fnDef + ')', grouping);
		    // arguments
		    if(args && args.length > 0) {
		    	log('arguments:', true);
				for(var i=0; i<args.length; i++) {
					var a = typeof args[i] == 'function' ? 'function' : args[i];
					log(a, false, 'color:#727272;font-size:10px;');
				}
				groupEnd();
			}
			// stack trace
		    if(stack && stack.length > 1) {
		    	log('stack trace:', true);
				for(var i=0; i<stack.length; i++) {
					log('  ' + stack[i].trim(), false, false);
				}
				groupEnd();
			}
		}
		var fnOut = function(time, res) {
			log('  returns: ' + (typeof res == 'function' ? 'function' : res ));
			log('  duration: ' + (Date.now() - time) + 'ms');
			log('}');
			if(grouping) { groupEnd(); }
		}

		var fn =  this, 
			desc = desc ? desc + ': ' : '',
			indent = 0, bg,
			grouping = console && console.group && console.groupEnd,
			is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

		return function() {
			bg = getColor();
			var time = Date.now();
			fnIn((new Error()).stack.split(new RegExp("\\n")), arguments, fn);
			var res = fn.apply(this, Array.prototype.slice.call(arguments, 0));
			fnOut(time, res);
			return res;
		}
	}
}));
