(function() {
var def = {
  "!name": "jQuery",
  "!define": {
    "offset": {
      "top": "number",
      "left": "number"
    },
    "keyvalue": {
      "name": "string",
      "value": "string"
    }
  },
  "jQuery": {
    "!type": "fn(selector: string, context: frameElement) -> jQuery.fn",
    "!url": "http://api.jquery.com/jquery/",
    "!doc": "Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.",
    "fn": {
      "add": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/add/",
        "!doc": "Add elements to the set of matched elements."
      },
      "addBack": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/addBack/",
        "!doc": "Add the previous set of elements on the stack to the current set, optionally filtered by a selector."
      },
      "addClass": {
        "!type": "fn(className: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/addClass/",
        "!doc": "Adds the specified class(es) to each of the set of matched elements."
      },
      "after": {
        "!type": "fn(content: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/after/",
        "!doc": "Insert content, specified by the parameter, after each element in the set of matched elements."
      },
      "ajaxComplete": {
        "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxComplete/",
        "!doc": "Register a handler to be called when Ajax requests complete. This is an AjaxEvent."
      },
      "ajaxError": {
        "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxError/",
        "!doc": "Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event."
      },
      "ajaxSend": {
        "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxSend/",
        "!doc": "Attach a function to be executed before an Ajax request is sent. This is an Ajax Event."
      },
      "ajaxStart": {
        "!type": "fn(handler: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxStart/",
        "!doc": "Register a handler to be called when the first Ajax request begins. This is an Ajax Event."
      },
      "ajaxStop": {
        "!type": "fn(handler: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxStop/",
        "!doc": "Register a handler to be called when all Ajax requests have completed. This is an Ajax Event."
      },
      "ajaxSuccess": {
        "!type": "fn(handler: fn(event: +jQuery.Event, req: +XMLHttpRequest)) -> jQuery.fn",
        "!url": "http://api.jquery.com/ajaxSuccess/",
        "!doc": ""
      },
      "andSelf": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/andSelf/",
        "!doc": "Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event."
      },
      "animate": {
        "!type": "fn(properties: ?, duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/animate/",
        "!doc": "Perform a custom animation of a set of CSS properties."
      },
      "append": {
        "!type": "fn(content: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/append/",
        "!doc": "Insert content, specified by the parameter, to the end of each element in the set of matched elements."
      },
      "appendTo": {
        "!type": "fn(target: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/appendTo/",
        "!doc": "Insert every element in the set of matched elements to the end of the target."
      },
      "attr": {
        "!type": "fn(name: string, value?: string) -> string",
        "!url": "http://api.jquery.com/attr/",
        "!doc": "Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element."
      },
      "before": {
        "!type": "fn(content: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/before/",
        "!doc": "Insert content, specified by the parameter, before each element in the set of matched elements."
      },
      "bind": {
        "!type": "fn(eventType: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/bind/",
        "!doc": "Attach a handler to an event for the elements."
      },
      "blur": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/blur/",
        "!doc": "Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element."
      },
      "change": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/change/",
        "!doc": "Bind an event handler to the 'change' JavaScript event, or trigger that event on an element."
      },
      "children": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/children/",
        "!doc": "Get the children of each element in the set of matched elements, optionally filtered by a selector."
      },
      "click": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/click/",
        "!doc": "Bind an event handler to the 'click' JavaScript event, or trigger that event on an element."
      },
      "clone": {
        "!type": "fn(dataAndEvents?: bool, deep?: bool) -> jQuery.fn",
        "!url": "http://api.jquery.com/clone/",
        "!doc": "Create a deep copy of the set of matched elements."
      },
      "closest": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/closest/",
        "!doc": "For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree."
      },
      "contents": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/contents/",
        "!doc": "Get the children of each element in the set of matched elements, including text and comment nodes."
      },
      "context": {
        "!type": "fn() -> +Element",
        "!url": "http://api.jquery.com/context/",
        "!doc": "The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document."
      },
      "css": {
        "!type": "fn(name: string, value?: string) -> string",
        "!url": "http://api.jquery.com/css/",
        "!doc": "Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element."
      },
      "data": {
        "!type": "fn(key: string, value?: ?) -> !1",
        "!url": "http://api.jquery.com/data/",
        "!doc": "Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements."
      },
      "dblclick": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/dblclick/",
        "!doc": "Bind an event handler to the 'dblclick' JavaScript event, or trigger that event on an element."
      },
      "delay": {
        "!type": "fn(duration: number, queue?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/delay/",
        "!doc": "Set a timer to delay execution of subsequent items in the queue."
      },
      "delegate": {
        "!type": "fn(selector: string, eventType: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/delegate/",
        "!doc": "Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements."
      },
      "dequeue": {
        "!type": "fn(queue?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/dequeue/",
        "!doc": "Execute the next function on the queue for the matched elements."
      },
      "detach": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/detach/",
        "!doc": "Remove the set of matched elements from the DOM."
      },
      "die": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/die/",
        "!doc": "Remove event handlers previously attached using .live() from the elements."
      },
      "each": {
        "!type": "fn(callback: fn(i: number, element: +Element)) -> jQuery.fn",
        "!url": "http://api.jquery.com/each/",
        "!doc": "Iterate over a jQuery object, executing a function for each matched element."
      },
      "empty": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/empty/",
        "!doc": "Remove all child nodes of the set of matched elements from the DOM."
      },
      "end": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/end/",
        "!doc": "End the most recent filtering operation in the current chain and return the set of matched elements to its previous state."
      },
      "eq": {
        "!type": "fn(i: number) -> jQuery.fn",
        "!url": "http://api.jquery.com/eq/",
        "!doc": "Reduce the set of matched elements to the one at the specified index."
      },
      "error": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/error/",
        "!doc": "Bind an event handler to the 'error' JavaScript event."
      },
      "fadeIn": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/fadeIn/",
        "!doc": "Display the matched elements by fading them to opaque."
      },
      "fadeOut": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/fadeOut/",
        "!doc": "Hide the matched elements by fading them to transparent."
      },
      "fadeTo": {
        "!type": "fn(duration: number, opacity: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/fadeTo/",
        "!doc": "Adjust the opacity of the matched elements."
      },
      "fadeToggle": {
        "!type": "fn(duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/fadeToggle/",
        "!doc": "Display or hide the matched elements by animating their opacity."
      },
      "filter": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/filter/",
        "!doc": "Reduce the set of matched elements to those that match the selector or pass the function's test."
      },
      "find": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/find/",
        "!doc": "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element."
      },
      "finish": {
        "!type": "fn(queue?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/finish/",
        "!doc": "Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements."
      },
      "first": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/first/",
        "!doc": "Reduce the set of matched elements to the first in the set."
      },
      "focusin": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/focusin/",
        "!doc": "Bind an event handler to the 'focusin' event."
      },
      "focusout": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/focusout/",
        "!doc": "Bind an event handler to the 'focusout' JavaScript event."
      },
      "get": {
        "!type": "fn(i: number) -> +Element",
        "!url": "http://api.jquery.com/get/",
        "!doc": "Retrieve the DOM elements matched by the jQuery object."
      },
      "has": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/has/",
        "!doc": "Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element."
      },
      "hasClass": {
        "!type": "fn(className: string) -> bool",
        "!url": "http://api.jquery.com/hasClass/",
        "!doc": "Determine whether any of the matched elements are assigned the given class."
      },
      "height": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/height/",
        "!doc": "Get the current computed height for the first element in the set of matched elements or set the height of every matched element."
      },
      "hide": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/hide/",
        "!doc": "Hide the matched elements."
      },
      "hover": {
        "!type": "fn(fnOver: fn(+jQuery.Event), fnOut?: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/hover/",
        "!doc": "Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements."
      },
      "html": {
        "!type": "fn() -> string",
        "!url": "http://api.jquery.com/html/",
        "!doc": "Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element."
      },
      "index": {
        "!type": "fn(selector?: string) -> number",
        "!url": "http://api.jquery.com/index/",
        "!doc": "Search for a given element from among the matched elements."
      },
      "innerHeight": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/innerHeight/",
        "!doc": "Get the current computed height for the first element in the set of matched elements, including padding but not border."
      },
      "innerWidth": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/innerWidth/",
        "!doc": "Get the current computed width for the first element in the set of matched elements, including padding but not border."
      },
      "insertAfter": {
        "!type": "fn(target: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/insertAfter/",
        "!doc": "Insert every element in the set of matched elements after the target."
      },
      "insertBefore": {
        "!type": "fn(target: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/insertBefore/",
        "!doc": "Insert every element in the set of matched elements before the target."
      },
      "is": {
        "!type": "fn(selector: ?) -> bool",
        "!url": "http://api.jquery.com/is/",
        "!doc": "Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments."
      },
      "jquery": {
        "!type": "string",
        "!url": "http://api.jquery.com/jquery-2/",
        "!doc": "A string containing the jQuery version number."
      },
      "keydown": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/keydown/",
        "!doc": "Bind an event handler to the 'keydown' JavaScript event, or trigger that event on an element."
      },
      "keypress": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/keypress/",
        "!doc": "Bind an event handler to the 'keypress' JavaScript event, or trigger that event on an element."
      },
      "keyup": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/keyup/",
        "!doc": "Bind an event handler to the 'keyup' JavaScript event, or trigger that event on an element."
      },
      "last": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/last/",
        "!doc": "Reduce the set of matched elements to the final one in the set."
      },
      "length": {
        "!type": "number",
        "!url": "http://api.jquery.com/length/",
        "!doc": "The number of elements in the jQuery object."
      },
      "live": {
        "!type": "fn(selector: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/live/",
        "!doc": "Attach an event handler for all elements which match the current selector, now and in the future."
      },
      "load": {
        "!type": "fn(handler: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/load/",
        "!doc": "Load data from the server and place the returned HTML into the matched element."
      },
      "map": {
        "!type": "fn(callback: fn(i: number, element: +Element)) -> jQuery.fn",
        "!url": "http://api.jquery.com/map/",
        "!doc": "Pass each element in the current matched set through a function, producing a new jQuery object containing the return values."
      },
      "mousedown": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mousedown/",
        "!doc": "Bind an event handler to the 'mousedown' JavaScript event, or trigger that event on an element."
      },
      "mouseenter": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mouseenter/",
        "!doc": "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element."
      },
      "mouseleave": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mouseleave/",
        "!doc": "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element."
      },
      "mousemove": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mousemouve/",
        "!doc": "Bind an event handler to the 'mousemove' JavaScript event, or trigger that event on an element."
      },
      "mouseout": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mouseout/",
        "!doc": "Bind an event handler to the 'mouseout' JavaScript event, or trigger that event on an element."
      },
      "mouseover": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mouseover/",
        "!doc": "Bind an event handler to the 'mouseover' JavaScript event, or trigger that event on an element."
      },
      "mouseup": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/mouseup/",
        "!doc": "Bind an event handler to the 'mouseup' JavaScript event, or trigger that event on an element."
      },
      "next": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/next/",
        "!doc": "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector."
      },
      "nextAll": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/nextAll/",
        "!doc": "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector."
      },
      "nextUntil": {
        "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/nextUntil/",
        "!doc": "Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed."
      },
      "not": {
        "!type": "fn(selector: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/not/",
        "!doc": "Remove elements from the set of matched elements."
      },
      "off": {
        "!type": "fn(events: string, selector?: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/off/",
        "!doc": "Remove an event handler."
      },
      "offset": {
        "!type": "fn() -> offset",
        "!url": "http://api.jquery.com/offset/",
        "!doc": "Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document."
      },
      "offsetParent": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/offsetParent/",
        "!doc": "Get the closest ancestor element that is positioned."
      },
      "on": {
        "!type": "fn(events: string, selector?: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/on/",
        "!doc": "Attach an event handler function for one or more events to the selected elements."
      },
      "one": {
        "!type": "fn(events: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/one/",
        "!doc": "Attach a handler to an event for the elements. The handler is executed at most once per element."
      },
      "outerHeight": {
        "!type": "fn(includeMargin?: bool) -> number",
        "!url": "http://api.jquery.com/outerHeight/",
        "!doc": "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without 'px') representation of the value or null if called on an empty set of elements."
      },
      "outerWidth": {
        "!type": "fn(includeMargin?: bool) -> number",
        "!url": "http://api.jquery.com/outerWidth/",
        "!doc": "Get the current computed width for the first element in the set of matched elements, including padding and border."
      },
      "parent": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/parent/",
        "!doc": "Get the parent of each element in the current set of matched elements, optionally filtered by a selector."
      },
      "parents": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/parents/",
        "!doc": "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector."
      },
      "parentsUntil": {
        "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/parentsUntil/",
        "!doc": "Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object."
      },
      "position": {
        "!type": "fn() -> offset",
        "!url": "http://api.jquery.com/position/",
        "!doc": "Get the current coordinates of the first element in the set of matched elements, relative to the offset parent."
      },
      "prepend": {
        "!type": "fn(content: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/prepend/",
        "!doc": "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements."
      },
      "prependTo": {
        "!type": "fn(target: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/prependTo/",
        "!doc": "Insert every element in the set of matched elements to the beginning of the target."
      },
      "prev": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/prev/",
        "!doc": "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector."
      },
      "prevAll": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/prevAll/",
        "!doc": "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector."
      },
      "prevUntil": {
        "!type": "fn(selector?: string, filter?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/prevUntil/",
        "!doc": "Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object."
      },
      "promise": {
        "!type": "fn(type?: string, target: ?) -> +jQuery.Deferred",
        "!url": "http://api.jquery.com/promise/",
        "!doc": "Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished."
      },
      "prop": {
        "!type": "fn(name: string, value?: string) -> string",
        "!url": "http://api.jquery.com/prop/",
        "!doc": "Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element."
      },
      "pushStack": {
        "!type": "fn(elements: [+Element]) -> jQuery.fn",
        "!url": "http://api.jquery.com/pushStack/",
        "!doc": "Add a collection of DOM elements onto the jQuery stack."
      },
      "queue": {
        "!type": "fn(queue?: string) -> [?]",
        "!url": "http://api.jquery.com/queue/",
        "!doc": "Show or manipulate the queue of functions to be executed on the matched elements."
      },
      "ready": {
        "!type": "fn(fn: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/ready/",
        "!doc": "Specify a function to execute when the DOM is fully loaded."
      },
      "remove": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/remove/",
        "!doc": "Remove the set of matched elements from the DOM."
      },
      "removeAttr": {
        "!type": "fn(attrName: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/removeAttr/",
        "!doc": "Remove an attribute from each element in the set of matched elements."
      },
      "removeClass": {
        "!type": "fn(className?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/removeClass/",
        "!doc": "Remove a single class, multiple classes, or all classes from each element in the set of matched elements."
      },
      "removeData": {
        "!type": "fn(name?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/removeData/",
        "!doc": "Remove a previously-stored piece of data."
      },
      "removeProp": {
        "!type": "fn(propName: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/removeProp/",
        "!doc": "Remove a property for the set of matched elements."
      },
      "replaceAll": {
        "!type": "fn(target: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/replaceAll/",
        "!doc": "Replace each target element with the set of matched elements."
      },
      "replaceWith": {
        "!type": "fn(newContent: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/replaceWith/",
        "!doc": "Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed."
      },
      "resize": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/resize/",
        "!doc": "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element."
      },
      "scroll": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/scroll/",
        "!doc": "Bind an event handler to the 'scroll' JavaScript event, or trigger that event on an element."
      },
      "scrollLeft": {
        "!type": "number",
        "!url": "http://api.jquery.com/scrollLeft/",
        "!doc": "Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element."
      },
      "scrollTop": {
        "!type": "number",
        "!url": "http://api.jquery.com/scrollTop/",
        "!doc": "Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element."
      },
      "select": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/select/",
        "!doc": "Bind an event handler to the 'select' JavaScript event, or trigger that event on an element."
      },
      "selector": {
        "!type": "string",
        "!url": "http://api.jquery.com/selector/",
        "!doc": "A selector representing selector passed to jQuery(), if any, when creating the original set."
      },
      "serialize": {
        "!type": "fn() -> string",
        "!url": "http://api.jquery.com/serialize/",
        "!doc": "Encode a set of form elements as a string for submission."
      },
      "serializeArray": {
        "!type": "fn() -> [keyvalue]",
        "!url": "http://api.jquery.com/serializeArray/",
        "!doc": "Encode a set of form elements as an array of names and values."
      },
      "show": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/show/",
        "!doc": "Display the matched elements."
      },
      "siblings": {
        "!type": "fn(selector?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/siblings/",
        "!doc": "Get the siblings of each element in the set of matched elements, optionally filtered by a selector."
      },
      "size": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/size/",
        "!doc": "Return the number of elements in the jQuery object."
      },
      "slice": {
        "!type": "fn(start: number, end?: number) -> jQuery.fn",
        "!url": "http://api.jquery.com/slice/",
        "!doc": "Reduce the set of matched elements to a subset specified by a range of indices."
      },
      "slideDown": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/slideDown/",
        "!doc": "Display the matched elements with a sliding motion."
      },
      "slideToggle": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/slideToggle/",
        "!doc": "Display or hide the matched elements with a sliding motion."
      },
      "slideUp": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/slideUp/",
        "!doc": "Hide the matched elements with a sliding motion."
      },
      "stop": {
        "!type": "fn(clearQueue?: bool, jumpToEnd?: bool) -> jQuery.fn",
        "!url": "http://api.jquery.com/stop/",
        "!doc": "Stop the currently-running animation on the matched elements."
      },
      "submit": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/submit/",
        "!doc": "Bind an event handler to the 'submit' JavaScript event, or trigger that event on an element."
      },
      "text": {
        "!type": "fn() -> string",
        "!url": "http://api.jquery.com/text/",
        "!doc": "Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements."
      },
      "toArray": {
        "!type": "fn() -> [+Element]",
        "!url": "http://api.jquery.com/toArray/",
        "!doc": "Retrieve all the DOM elements contained in the jQuery set, as an array."
      },
      "toggle": {
        "!type": "fn(duration?: number, complete?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/toggle/",
        "!doc": "Display or hide the matched elements."
      },
      "toggleClass": {
        "!type": "fn(className: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/toggleClass/",
        "!doc": "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument."
      },
      "trigger": {
        "!type": "fn(eventType: string, params: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/trigger/",
        "!doc": "Execute all handlers and behaviors attached to the matched elements for the given event type."
      },
      "triggerHandler": {
        "!type": "fn(eventType: string, params: ?) -> ?",
        "!url": "http://api.jquery.com/triggerHandler/",
        "!doc": "Execute all handlers attached to an element for an event."
      },
      "unbind": {
        "!type": "fn(eventType?: string, handler?: fn()) -> jQuery.fn",
        "!url": "http://api.jquery.com/unbind/",
        "!doc": "Remove a previously-attached event handler from the elements."
      },
      "undelegate": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/undelegate/",
        "!doc": "Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements."
      },
      "unload": {
        "!type": "fn(handler: fn(+jQuery.Event)) -> jQuery.fn",
        "!url": "http://api.jquery.com/unload/",
        "!doc": "Bind an event handler to the 'unload' JavaScript event."
      },
      "unwrap": {
        "!type": "fn() -> jQuery.fn",
        "!url": "http://api.jquery.com/unwrap/",
        "!doc": "Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place."
      },
      "val": {
        "!type": "fn() -> string",
        "!url": "http://api.jquery.com/val/",
        "!doc": "Get the current value of the first element in the set of matched elements or set the value of every matched element."
      },
      "width": {
        "!type": "fn() -> number",
        "!url": "http://api.jquery.com/width/",
        "!doc": "Get the current computed width for the first element in the set of matched elements or set the width of every matched element."
      },
      "wrap": {
        "!type": "fn(wrappingElement: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/wrap/",
        "!doc": "Wrap an HTML structure around each element in the set of matched elements."
      },
      "wrapAll": {
        "!type": "fn(wrappingElement: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/wrapAll/",
        "!doc": "Wrap an HTML structure around all elements in the set of matched elements."
      },
      "wrapInner": {
        "!type": "fn(wrappingElement: ?) -> jQuery.fn",
        "!url": "http://api.jquery.com/wrapInner/",
        "!doc": "Wrap an HTML structure around the content of each element in the set of matched elements."
      },

      "slice": {
        "!type": "fn(start: number, end: number) -> jQuery.fn",
        "!url": "http://api.jquery.com/slice/",
        "!doc": "Reduce the set of matched elements to a subset specified by a range of indices."
      },
      "push": {
        "!type": "Array.prototype.push",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push",
        "!doc": "Mutates an array by appending the given elements and returning the new length of the array."
      },
      "sort": {
        "!type": "Array.prototype.sort",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort",
        "!doc": "Sorts the elements of an array in place and returns the array."
      },
      "splice": {
        "!type": "Array.prototype.splice",
        "!url": "https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice",
        "!doc": "Changes the content of an array, adding new elements while removing old elements."
      }
    },
    "ajax": {
      "!type": "fn(url: string, settings: ?) -> +XMLHttpRequest",
      "!url": "http://api.jquery.com/jquery.ajax/",
      "!doc": "Perform an asynchronous HTTP (Ajax) request."
    },
    "ajaxPrefilter": {
      "!type": "fn(dataTypes?: string, handler: fn(options: ?, originalOptions: ?, req: +XMLHttpRequest))",
      "!url": "http://api.jquery.com/jquery.ajaxPrefilter/",
      "!doc": "Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax()."
    },
    "ajaxSetup": {
      "!type": "fn(options: ?)",
      "!url": "http://api.jquery.com/jquery.ajaxSetup/",
      "!doc": "Set default values for future Ajax requests. Its use is not recommended."
    },
    "ajaxTransport": {
      "!type": "fn(dataType: string, handler: fn(options: ?, originalOptions: ?, req: +XMLHttpRequest))",
      "!url": "http://api.jquery.com/jquery.ajaxTransport/",
      "!doc": "Creates an object that handles the actual transmission of Ajax data."
    },
    "Callbacks": {
      "!type": "fn(flags: string) -> +jQuery.Callbacks",
      "!url": "http://api.jquery.com/jquery.Callbacks/",
      "!doc": "A multi-purpose callbacks list object that provides a powerful way to manage callback lists.",
      "prototype": {
        "add":{
          "!type": "fn(callbacks: ?) -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.add/",
          "!doc": "Add a callback or a collection of callbacks to a callback list."
        },
        "disable":{
          "!type": "fn() -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.disable/",
          "!doc": "Disable a callback list from doing anything more."
        },
        "disabled":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/callbacks.disabled/",
          "!doc": "Determine if the callbacks list has been disabled."
        },
        "empty":{
          "!type": "fn() -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.empty/",
          "!doc": "Remove all of the callbacks from a list."
        },
        "fire":{
          "!type": "fn(arguments: ?) -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.fire/",
          "!doc": "Call all of the callbacks with the given arguments"
        },
        "fired":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/callbacks.fired/",
          "!doc": "Determine if the callbacks have already been called at least once."
        },
        "fireWith":{
          "!type": "fn(context?: ?, args?: ?) -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.fireWith/",
          "!doc": "Call all callbacks in a list with the given context and arguments."
        },
        "has":{
          "!type": "fn(callback: fn()) -> bool",
          "!url": "http://api.jquery.com/callbacks.has/",
          "!doc": "Determine whether a supplied callback is in a list."
        },
        "lock":{
          "!type": "fn() -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.lock/",
          "!doc": "Lock a callback list in its current state."
        },
        "locked":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/callbacks.locked/",
          "!doc": "Determine if the callbacks list has been locked."
        },
        "remove":{
          "!type": "fn(callbacks: ?) -> +jQuery.Callbacks",
          "!url": "http://api.jquery.com/callbacks.remove/",
          "!doc": "Remove a callback or a collection of callbacks from a callback list."
        }
      }
    },
    "contains": {
      "!type": "fn(container: +Element, contained: +Element) -> bool",
      "!url": "http://api.jquery.com/jquery.contains/",
      "!doc": "Check to see if a DOM element is a descendant of another DOM element."
    },
    "cssHooks": {
      "!type": "?",
      "!url": "http://api.jquery.com/cssHooks/",
      "!doc": "Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties."
    },
    "data": {
      "!type": "fn(element: +Element, key: string, value: ?) -> !2",
      "!url": "http://api.jquery.com/jquery.data/",
      "!doc": "Store arbitrary data associated with the specified element and/or return the value that was set."
    },
    "Event": {
      "!type": "fn(type: ?, props?: ?) -> +jQuery.Event",
      "!url": "http://api.jquery.com/category/events/event-object/",
      "!doc": "The jQuery.Event constructor is exposed and can be used when calling trigger. The new operator is optional.",
      "prototype": {
        "currentTarget":{
          "!type": "+Element",
          "!url": "http://api.jquery.com/event.currentTarget/",
          "!doc": "The current DOM element within the event bubbling phase."
        },
        "data":{
          "!type": "?",
          "!url": "http://api.jquery.com/event.data/",
          "!doc": "An optional object of data passed to an event method when the current executing handler is bound."
        },
        "delegateTarget":{
          "!type": "+Element",
          "!url": "http://api.jquery.com/event.delegateTarget/",
          "!doc": "The element where the currently-called jQuery event handler was attached."
        },
        "isDefaultPrevented":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/event.isDefaultPrevented/",
          "!doc": "Returns whether event.preventDefault() was ever called on this event object."
        },
        "isImmediatePropagationStopped":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/event.isImmediatePropagationStopped/",
          "!doc": "Returns whether event.stopImmediatePropagation() was ever called on this event object."
        },
        "isPropagationStopped":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/event.isPropagationStopped/",
          "!doc": "Returns whether event.stopPropagation() was ever called on this event object."
        },
        "metaKey":{
          "!type": "bool",
          "!url": "http://api.jquery.com/event.metaKey/",
          "!doc": "Indicates whether the META key was pressed when the event fired."
        },
        "namespace":{
          "!type": "string",
          "!url": "http://api.jquery.com/event.namespace/",
          "!doc": "The namespace specified when the event was triggered."
        },
        "pageX":{
          "!type": "number",
          "!url": "http://api.jquery.com/event.pageX/",
          "!doc": "The mouse position relative to the left edge of the document."
        },
        "pageY":{
          "!type": "number",
          "!url": "http://api.jquery.com/event.pageY/",
          "!doc": "The mouse position relative to the top edge of the document."
        },
        "preventDefault":{
          "!type": "fn()",
          "!url": "http://api.jquery.com/event.preventDefault/",
          "!doc": "If this method is called, the default action of the event will not be triggered."
        },
        "relatedTarget":{
          "!type": "+Element",
          "!url": "http://api.jquery.com/event.relatedTarget/",
          "!doc": "The other DOM element involved in the event, if any."
        },
        "result":{
          "!type": "?",
          "!url": "http://api.jquery.com/event.result/",
          "!doc": "The last value returned by an event handler that was triggered by this event, unless the value was undefined."
        },
        "stopImmediatePropagation":{
          "!type": "fn()",
          "!url": "http://api.jquery.com/event.stopImmediatePropagation/",
          "!doc": "Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree."
        },
        "stopPropagation":{
          "!type": "fn()",
          "!url": "http://api.jquery.com/event.stopPropagation/",
          "!doc": "Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event."
        },
        "target":{
          "!type": "+Element",
          "!url": "http://api.jquery.com/event.target/",
          "!doc": "The DOM element that initiated the event."
        },
        "timeStamp":{
          "!type": "number",
          "!url": "http://api.jquery.com/event.timeStamp/",
          "!doc": "The difference in milliseconds between the time the browser created the event and January 1, 1970."
        },
        "type":{
          "!type": "string",
          "!url": "http://api.jquery.com/event.type/",
          "!doc": "Describes the nature of the event."
        },
        "which":{
          "!type": "number",
          "!url": "http://api.jquery.com/event.which/",
          "!doc": "For key or mouse events, this property indicates the specific key or button that was pressed."
        }
      }
    },
    "Deferred": {
      "!type": "fn(beforeStart?: fn(deferred: +jQuery.Deferred)) -> +jQuery.Deferred",
      "!url": "http://api.jquery.com/jQuery.Deferred/",
      "!doc": "A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.",
      "prototype": {
        "always":{
          "!type": "fn(callback: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.always/",
          "!doc": "Add handlers to be called when the Deferred object is either resolved or rejected."
        },
        "done":{
          "!type": "fn(callback: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.done/",
          "!doc": "Add handlers to be called when the Deferred object is resolved."
        },
        "fail":{
          "!type": "fn(callback: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.fail/",
          "!doc": "Add handlers to be called when the Deferred object is rejected."
        },
        "isRejected":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/deferred.isRejected/",
          "!doc": "Determine whether a Deferred object has been rejected."
        },
        "isResolved":{
          "!type": "fn() -> bool",
          "!url": "http://api.jquery.com/deferred.isResolved/",
          "!doc": "Determine whether a Deferred object has been resolved."
        },
        "notify":{
          "!type": "fn(args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.notify/",
          "!doc": "Call the progressCallbacks on a Deferred object with the given args."
        },
        "notifyWith":{
          "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.notifyWith/",
          "!doc": "Call the progressCallbacks on a Deferred object with the given context and args."
        },
        "pipe":{
          "!type": "fn(doneFilter?: fn(), failFilter?: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.pipe/",
          "!doc": "Utility method to filter and/or chain Deferreds."
        },
        "progress":{
          "!type": "fn(callback: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.progress/",
          "!doc": "Add handlers to be called when the Deferred object generates progress notifications."
        },
        "promise":{
          "!type": "fn(target: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.promise/",
          "!doc": "Return a Deferred's Promise object."
        },
        "reject":{
          "!type": "fn(args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.reject/",
          "!doc": "Reject a Deferred object and call any failCallbacks with the given args."
        },
        "rejectWith":{
          "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.rejectWith/",
          "!doc": "Reject a Deferred object and call any failCallbacks with the given context and args."
        },
        "resolve":{
          "!type": "fn(args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.resolve/",
          "!doc": "Resolve a Deferred object and call any doneCallbacks with the given args."
        },
        "resolveWith":{
          "!type": "fn(context?: ?, args?: ?) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.resolveWith/",
          "!doc": "Resolve a Deferred object and call any doneCallbacks with the given context and args."
        },
        "state":{
          "!type": "fn() -> string",
          "!url": "http://api.jquery.com/deferred.state/",
          "!doc": "Determine the current state of a Deferred object."
        },
        "then":{
          "!type": "fn(doneFilter: fn(), failFilter?: fn(), progressFilter?: fn()) -> +jQuery.Deferred",
          "!url": "http://api.jquery.com/deferred.then/",
          "!doc": "Add handlers to be called when the Deferred object is resolved, rejected, or still in progress."
        }
      }
    },
    "Promise": "jQuery.Deferred",
    "dequeue": {
        "!type": "fn(queue?: string) -> jQuery.fn",
        "!url": "http://api.jquery.com/jQuery.dequeue/",
        "!doc": "Execute the next function on the queue for the matched elements."
    },
    "each": {
      "!type": "fn(collection: ?, callback: fn(i: number, elt: ?)) -> !0",
      "!effects": ["call !1 number !0.<i>"],
      "!url": "http://api.jquery.com/jQuery.each/",
      "!doc": "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties."
    },
    "error": "fn(message: string)",
    "extend": {
      "!type": "fn(target: ?, source: ?) -> !0",
      "!effects": ["copy !1 !0"]
    },
    "fx": {
      "!type": "fn(elem: +Element, options: ?, prop: string, end?: number, easing?: bool)",
      "interval":{
        "!type": "number",
        "!url": "http://api.jquery.com/jquery.fx.interval",
        "!doc": "The rate (in milliseconds) at which animations fire."
      },
      "off":{
        "!type": "bool",
        "!url": "http://api.jquery.com/jquery.fx.off",
        "!doc": "Globally disable all animations."
      },
      "speeds": {
        "slow": "number",
        "fast": "number",
        "_default": "number"
      },
      "stop": "fn()",
      "tick": "fn()",
      "start": "fn()"
    },
    "get":{
      "!type": "fn(url: string, data?: ?, success: fn(data: string, textStatus: string, req: +XMLHttpRequest), dataType?: string) -> +XMLHttpRequest",
      "!url": "http://api.jquery.com/jquery.get/",
      "!doc": "Load data from the server using a HTTP GET request."
    },
    "getJSON": {
      "!type": "fn(url: string, data?: ?, success: fn(data: ?, textStatus: string, req: +XMLHttpRequest)) -> +XMLHttpRequest",
      "!url": "http://api.jquery.com/jquery.getJSON/",
      "!doc": "Load JSON-encoded data from the server using a GET HTTP request."
    },
    "getScript": {
      "!type": "fn(url: string, success?: fn(script: string, textStatus: string, req: +XMLHttpRequest)) -> +XMLHttpRequest",
      "!url": "http://api.jquery.com/jquery.getScript/",
      "!doc": "Load a JavaScript file from the server using a GET HTTP request, then execute it."
    },
    "globalEval": {
      "!type": "fn(code: string)",
      "!url": "http://api.jquery.com/jquery.globalEval/",
      "!doc": "Execute some JavaScript code globally."
    },
    "grep": {
      "!type": "fn(array: [?], filter: fn(elt: ?, i: number), invert?: bool) -> !0",
      "!effects": ["call !1 !0.<i> number"],
      "!url":"http://api.jquery.com/jquery.grep/",
      "!doc":"Finds the elements of an array which satisfy a filter function. The original array is not affected."
    },
    "hasData": {
      "!type": "fn(element: +Element) -> bool",
      "!url": "http://api.jquery.com/jquery.hasData/",
      "!doc": "Determine whether an element has any jQuery data associated with it."
    },
    "holdReady": {
      "!type": "fn(hold: bool)",
      "!url": "http://api.jquery.com/jquery.holdReady/",
      "!doc": "Holds or releases the execution of jQuery's ready event."
    },
    "inArray": {
      "!type": "fn(value: ?, array: [?], from?: number) -> number",
      "!url": "http://api.jquery.com/jquery.inArray/",
      "!doc": "Search for a specified value within an array and return its index (or -1 if not found)."
    },
    "isArray": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isArray/",
      "!doc": "Determine whether the argument is an array."
    },
    "isEmptyObject": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isEmptyObject/",
      "!doc": "Check to see if an object is empty (contains no enumerable properties)."
    },
    "isFunction": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isFunction/",
      "!doc": "Determine if the argument passed is a Javascript function object."
    },
    "isNumeric": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isNumeric/",
      "!doc": "Determines whether its argument is a number."
    },
    "isPlainObject": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isPlainObject/",
      "!doc": "Check to see if an object is a plain object (created using '{}' or 'new Object')."
    },
    "isWindow": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isWindow/",
      "!doc": "Determine whether the argument is a window."
    },
    "isXMLDoc": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isXMLDoc/",
      "!doc": "Check to see if a DOM node is within an XML document (or is an XML document)."
    },
    "isFunction": {
      "!type": "fn(obj: ?) -> bool",
      "!url": "http://api.jquery.com/jquery.isFunction/",
      "!doc": ""
    },
    "makeArray": {
      "!type": "fn(obj: ?) -> [!0.<i>]",
      "!url": "http://api.jquery.com/jquery.makeArray/",
      "!doc": "Convert an array-like object into a true JavaScript array."
    },
    "map": {
      "!type": "fn(array: [?], callback: fn(element: ?, i: number) -> ?) -> [!1.!ret]",
      "!effects": ["call !1 !0.<i> number"],
      "!url": "http://api.jquery.com/jquery.map/",
      "!doc": "Translate all items in an array or object to new array of items."
    },
    "merge": {
      "!type": "fn(first: [?], second: [?]) -> !0",
      "!url": "http://api.jquery.com/jquery.merge/",
      "!doc": "Merge the contents of two arrays together into the first array."
    },
    "noConflict": {
      "!type": "fn(removeAll?: bool) -> jQuery",
      "!url": "http://api.jquery.com/jquery.noConflict/",
      "!doc": "Relinquish jQuery's control of the $ variable."
    },
    "noop": {
      "!type": "fn()",
      "!url": "http://api.jquery.com/jquery.noop/",
      "!doc": "An empty function."
    },
    "now": {
      "!type": "fn() -> number",
      "!url": "http://api.jquery.com/jquery.now/",
      "!doc": "Return a number representing the current time."
    },
    "param": {
      "!type": "fn(obj: ?) -> string",
      "!url": "http://api.jquery.com/jquery.param/",
      "!doc": "Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request."
    },
    "parseHTML": {
      "!type": "fn(data: string, context?: +Element, keepScripts?: bool) -> [+Element]",
      "!url": "http://api.jquery.com/jquery.parseHTML/",
      "!doc": "Parses a string into an array of DOM nodes."
    },
    "parseJSON": {
      "!type": "fn(json: string) -> ?",
      "!url": "http://api.jquery.com/jquery.parseJSON/",
      "!doc": "Takes a well-formed JSON string and returns the resulting JavaScript object."
    },
    "parseXML": {
      "!type": "fn(xml: string) -> +XMLDocument",
      "!url": "http://api.jquery.com/jquery.parseXML/",
      "!doc": "Parses a string into an XML document."
    },
    "post": {
      "!type": "fn(url: string, data?: ?, success: fn(data: string, textStatus: string, req: +XMLHttpRequest), dataType?: string) -> +XMLHttpRequest",
      "!url": "http://api.jquery.com/jquery.post/",
      "!doc": "Load data from the server using a HTTP POST request."
    },
    "proxy": {
      "!type": "fn(function: fn(), context: ?) -> fn()",
      "!url": "http://api.jquery.com/jquery.proxy/",
      "!doc": "Takes a function and returns a new one that will always have a particular context."
    },
    "queue": {
      "!type": "fn(element: +Element, queue?: string) -> [?]",
      "!url": "http://api.jquery.com/jquery.queue/",
      "!doc": "Show or manipulate the queue of functions to be executed on the matched element."
    },
    "removeData": {
      "!type": "fn(element: +Element, name?: string)",
      "!url": "http://api.jquery.com/jquery.removeData/",
      "!doc": ""
    },
    "sub": {
      "!type": "fn() -> jQuery",
      "!url": "http://api.jquery.com/jquery.sub/",
      "!doc": "Remove a previously-stored piece of data."
    },
    "support": {
      "!url": "http://api.jquery.com/jquery.support/",
      "!doc": "A collection of properties that represent the presence of different browser features or bugs. Primarily intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance.",
      "getSetAttribute": "bool",
      "leadingWhitespace": "bool",
      "tbody": "bool",
      "htmlSerialize": "bool",
      "style": "bool",
      "hrefNormalized": "bool",
      "opacity": "bool",
      "cssFloat": "bool",
      "checkOn": "bool",
      "optSelected": "bool",
      "enctype": "bool",
      "html5Clone": "bool",
      "boxModel": "bool",
      "deleteExpando": "bool",
      "noCloneEvent": "bool",
      "inlineBlockNeedsLayout": "bool",
      "shrinkWrapBlocks": "bool",
      "reliableMarginRight": "bool",
      "boxSizingReliable": "bool",
      "pixelPosition": "bool",
      "noCloneChecked": "bool",
      "optDisabled": "bool",
      "input": "bool",
      "radioValue": "bool",
      "appendChecked": "bool",
      "checkClone": "bool",
      "clearCloneStyle": "bool",
      "reliableHiddenOffsets": "bool",
      "boxSizing": "bool",
      "doesNotIncludeMarginInBodyOffset": "bool",
      "cors": "bool",
      "ajax": "bool"
    },
    "trim": {
      "!type": "fn(str: string) -> string",
      "!url": "http://api.jquery.com/jquery.trim/",
      "!doc": "Remove the whitespace from the beginning and end of a string."
    },
    "type": {
      "!type": "fn(obj: ?) -> string",
      "!url": "http://api.jquery.com/jquery.type/",
      "!doc": "Determine the internal JavaScript [[Class]] of an object."
    },
    "unique": {
      "!type": "fn(array: [?]) -> !0",
      "!url": "http://api.jquery.com/jquery.unique/",
      "!doc": "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."
    },
    "when": {
      "!type": "fn(deferred: +jQuery.Deferred) -> +jQuery.Deferred",
      "!url": "http://api.jquery.com/jquery.when/",
      "!doc": "Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events."
    }
  },
  "$": "jQuery"
}
CodeMirror.tern.addDef(def);
})();
