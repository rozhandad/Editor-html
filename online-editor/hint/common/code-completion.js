(function () {
    var CodeCompletion, Suggestions, key;
	
    Suggestions = (function () {
        function Suggestions(completer) {
            var _this = this;
            this.element = $("#cm-suggestions");
            if (!this.element.length) {
                this.create()
            }
            this.element.delegate("option", "click", function (event) {
                _this.element[0].selectedIndex = event.target.index;
                return completer.insert()
            });
            $(document).unbind('click.completions').bind('click.completions', function (event, target) {
                return _this.hide()
            })
        }
        Suggestions.prototype.create = function () {			
            this.element = $("<select id='cm-suggestions'></select>");
            return $("body").append(this.element)
        };
        Suggestions.prototype.fill = function (suggestions) {
            var action, element, label, options, suggestion, value;
            options = (function () {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = suggestions.length; _i < _len; _i++) {
                    suggestion = suggestions[_i];
                    label = suggestion.label || suggestion.value || suggestion;
                    value = suggestion.value || suggestion;
                    action = suggestion.action || "";
                    _results.push("<option data-action='" + action + "' value='" + value + "'>" + label + "</option>")
                }
                return _results
            })();
            element = this.element.html(options.join(""))[0];
            element.selectedIndex = 0;
            return element.size = Math.min(Math.max(2, options.length), 8)
        };
        Suggestions.prototype.selected = function () {
            return this.element.val()
        };
        Suggestions.prototype.action = function () {
            var index;
            index = this.element[0].selectedIndex;
            return this.element.find("option").slice(index, index + 1).data("action")
        };
        Suggestions.prototype.selectPrevious = function () {
            var el;
            el = this.element[0];
            return el.selectedIndex = el.selectedIndex < 1 ? el.length - 1 : el.selectedIndex - 1
        };
        Suggestions.prototype.selectNext = function () {
            return this.element[0].selectedIndex = (this.element[0].selectedIndex + 1) % this.element[0].length
        };
        Suggestions.prototype.showAt = function (position) {
            var height, pos;
            pos = {
                left: position.left,
                top: position.top
            };
            this.element.css(pos);
            this.visible = true;
            this.element.show();
            height = this.element.outerHeight();
            if (position.y + height > $(window).height()) {
                return this.element.css({
                    top: position.y - this.element.outerHeight() - 25
                })
            }
        };
        Suggestions.prototype.hide = function () {
            this.visible = false;
            return this.element.hide()
        };
        Suggestions.prototype._select = function (direction) {};
        return Suggestions
    })();
    key = function (e) {
        return CodeMirror.keyNames[e.keyCode]
    };
	
	
    CodeCompletion = (function () {
        function CodeCompletion(editor, mode) {
            this.editor = editor;
            this.mode = mode;
            this.widget = new Suggestions(this)
        }
        CodeCompletion.prototype.suggest = function () {
				var cursor = this.editor.getCursor();
    			var pos =  this.editor.cursorCoords(cursor); 
			
            if (this.editor.somethingSelected()) {
                return this.widget.hide()
            }
            if (!(this.mode && this.mode.hasHints(this.editor))) {
                return this.widget.hide()
            }
            this.hints = this.getHints();
            if (this.hints) {
                this.widget.fill(this.hints.list);
                return this.widget.showAt(pos)
            } else {
                return this.widget.hide()
            }
        };
        CodeCompletion.prototype.getHints = function () {
            var hints;
            hints = this.mode && this.mode.getHints(this.editor);
            if (!(hints && hints.list && hints.list.length)) {
                return null
            }
            if (hints.list.length === 1 && hints.to.ch - hints.from.ch === hints.list[0].length) {
                return null
            }
            return hints
        };
        CodeCompletion.prototype.insert = function () {
            var action;
            if (!this.widget.visible) {
                return
            }
            if (action = this.widget.action()) {
                this.mode && this.mode[action](this.editor, this.widget.selected())
            } else {
                this.editor.replaceRange(this.widget.selected(), this.hints.from, this.hints.to)
            }
            return this.editor.focus()
        };
        CodeCompletion.prototype.autoQuote = function (event, ch, open, close) {
            var cursor, nextChar, selection, token;
            open || (open = ch);
            close || (close = open);
            cursor = this.editor.getCursor();
            if (this.editor.somethingSelected()) {
                event.stop();
                selection = this.editor.getSelection();
                if (selection.indexOf(open) === 0 && selection.match(new RegExp("\\" + close + "$"))) {
                    this.editor.replaceSelection(selection.substr(1, selection.length - 2))
                } else {
                    this.editor.replaceSelection([open, this.editor.getSelection(), close].join(""))
                }
                return
            }
            nextChar = this.editor.getRange(cursor, {
                line: cursor.line,
                ch: cursor.ch + 1
            });
            if (ch === close && nextChar === close) {
                event.stop();
                this.editor.setCursor(cursor.line, cursor.ch + 1)
            }
            if (!nextChar.match(/^\s?$/)) {
                return
            }
            token = this.editor.getTokenAt(cursor);
            if (token.string.match(new RegExp(".+\\" + close + "$"))) {
                event.stop();
                return this.editor.setCursor(cursor.line, cursor.ch + 1)
            } else if (token.string.indexOf(close) === -1) {
                this.editor.replaceRange(close, cursor);
                return this.editor.setCursor(cursor)
            }
        };
        CodeCompletion.prototype.ignoreBracketIfClosed = function (event, ch) {
            var cursor, nextChar;
            if (this.editor.somethingSelected()) {
                return
            }
            cursor = this.editor.getCursor();
            nextChar = this.editor.getRange(cursor, {
                line: cursor.line,
                ch: cursor.ch + 1
            });
            if (nextChar === ch) {
                event.stop();
                return this.editor.setCursor(cursor.line, cursor.ch + 1)
            }
        };
        CodeCompletion.prototype.keydown = function (e) {
            var k;
            k = key(e);
            switch (k) {
            case "Up":
                if (this.widget.visible) {
                    this.widget.selectPrevious();
                    return true
                }
                break;
            case "Down":
                if (this.widget.visible) {
                    this.widget.selectNext();
                    return true
                }
                break;
            case "Enter":
            case "Tab":
                if (this.widget.visible) {
                    this.insert();
                    this.suggest();
                    e.stop();
                    return true
                } else if (k === "Enter") {
                    if (this.mode && this.mode.newline) {
                        return this.mode.newline(this.editor, e)
                    }
                }
                break;
            case "Esc":
                if (this.widget.visible) {
                    this.widget.hide();
                    return true
                }
            }
        };
        CodeCompletion.prototype.keypress = function (e) {
            switch (e.charCode) {
            case 34:
                return this.autoQuote(e, '"');
            case 39:
                if (this.editor.somethingSelected()) {
                    return this.autoQuote(e, "'")
                } else {
                    return this.ignoreBracketIfClosed(e, "'")
                }
                break;
            case 8216:
                return this.autoQuote(e, "â€˜", "â€˜", "â€™");
            case 8217:
                return this.ignoreBracketIfClosed(e, "â€™");
            case 8220:
                return this.autoQuote(e, "â€œ", "â€œ", "â€");
            case 8221:
                return this.ignoreBracketIfClosed(e, "â€");
            case 40:
                return this.autoQuote(e, "(", "(", ")");
            case 41:
                return this.ignoreBracketIfClosed(e, ")");
            case 91:
                return this.autoQuote(e, "[", "[", "]");
            case 93:
                return this.ignoreBracketIfClosed(e, "]");
            case 123:
                return this.autoQuote(e, "{", "{", "}");
            case 125:
                return this.ignoreBracketIfClosed(e, "}");
            default:
                if (this.editor.somethingSelected()) {
                    return
                }
                if (this.mode && this.mode.autoInsertions) {
                    return this.mode.autoInsertions(this.editor, e)
                }
            }
        };
        CodeCompletion.prototype.keyup = function (e) {
            var k;
            k = key(e);
            if (k === "Enter") {
                return
            }
            if (k === "End" || k === "Home" && this.widget.visible) {
                return this.widget.hide()
            }
            if (k === "Left" || k === "Right") {
                return this.widget.hide()
            }
            if (k !== "Space" && k !== "Backspace" && e.keyCode < 48) {
                return
            }
            return this.suggest(this.editor)
        };
        CodeCompletion.prototype.handleKeyEvent = function (editor, e) {
            return this[e.type] && this[e.type](e)
        };
        return CodeCompletion
    })();
    window.CodeCompletion = CodeCompletion
}).call(this);