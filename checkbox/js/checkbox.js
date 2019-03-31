"use strict";
function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormCommon =
    /*#__PURE__*/
    function () {
        function FormCommon() {
            _classCallCheck(this, FormCommon);
        }

        _createClass(FormCommon, [{
            key: "$formFormat",
            value: function $formFormat($forms) {
                for (var i = 0; i < $forms.length; i++) {
                    var $form = $forms[i]; // 缓存display属性

                    var display = getComputedStyle($form).display; // 替换不符合要求的tag

                    if (['input', 'select', 'option', 'button'].includes($form.tagName.toLowerCase())) {
                        var div = document.createElement('div'); // 复原display属性

                        if (display === 'inline' || display === 'inline-block') {
                            div.style.display = 'inline-block';
                        } else {
                            div.style.display = display;
                        } // 转移class


                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = $form.classList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var className = _step.value;
                                div.classList.add(className);
                            } // 替换DOM的旧元素

                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        $form.parentElement.replaceChild(div, $form); // 替换数组的旧元素

                        $forms[i] = div;
                    } else {
                        // 不允许display属性为inline
                        if (display === 'inline') {
                            $form.style.display = 'inline-block';
                        } // 清空元素里面的内容


                        $form.innerHTML = '';
                    }
                }
            }
        }]);

        return FormCommon;
    }();


function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Checkbox =
    /*#__PURE__*/
    function (_FormCommon) {
        _inherits(Checkbox, _FormCommon);

        function Checkbox() {
            var _this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$classes = _ref.classes,
                classes = _ref$classes === void 0 ? 'checkbox' : _ref$classes,
                indeterminateIndex = _ref.indeterminateIndex,
                _ref$data = _ref.data,
                data = _ref$data === void 0 ? [] : _ref$data,
                _ref$callback = _ref.callback,
                callback = _ref$callback === void 0 ? function () { } : _ref$callback;

            _classCallCheck(this, Checkbox);

            // 继承父类的this对象
            _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this));
            _this.$mounts = _toConsumableArray(document.querySelectorAll(".".concat(classes))); // 全选全不选checkbox的索引

            _this.indeterminateIndex = indeterminateIndex;
            _this.data = data;
            _this.callback = callback; // checkbox数组

            _this.$checkboxs = []; // checkbox个数

            _this.count = _this.$mounts.length;

            _this.init();

            return _this;
        }

        _createClass(Checkbox, [{
            key: "init",
            value: function init() {
                // 检查参数
                this.verifyOptions(); // 检查标签是否符合要求

                this.$formFormat(this.$mounts); // 渲染元素

                this.render(); // 塑造数据

                this.shapeData(); // 渲染样式

                this.renderStyle(); // checkbox事件

                if (this.$indeterminate) {
                    this.$indeterminateEvent();
                    this.$determinateEvent();
                } else {
                    this.$checkboxEvent();
                }
            }
        }, {
            key: "render",
            value: function render() {
                for (var i = 0, count = this.count; i < count; i++) {
                    var $mount = this.$mounts[i];
                    $mount.innerHTML = '<div class="qing qing-checkbox"></div>';
                    var $checkbox = $mount.firstElementChild; // 取出全选全不选checkbox

                    if (this.indeterminateIndex === i) {
                        this.$indeterminate = $checkbox; // 数量减一个

                        this.count--;
                        delete this.indeterminateIndex;
                        continue;
                    }

                    this.$checkboxs.push($checkbox);
                }

                delete this.$mounts;
            }
        }, {
            key: "shapeData",
            value: function shapeData() {
                // 锁定data的长度
                this.data.length = this.count;

                for (var i = 0; i < this.count; i++) {
                    if (Object.prototype.toString.call(this.data[i]) !== '[object Object]') {
                        this.data[i] = {
                            checked: false,
                            disabled: false
                        };
                    } else {
                        var item = this.data[i];

                        if (item.checked === undefined) {
                            item.checked = false;
                        }

                        if (item.disabled === undefined) {
                            item.disabled = false;
                        }
                    }
                }
            }
        }, {
            key: "renderStyle",
            value: function renderStyle() {
                for (var i = 0; i < this.count; i++) {
                    var item = this.data[i];
                    var CL = this.$checkboxs[i].classList;

                    if (item.checked !== CL.contains('checked')) {
                        CL.toggle('checked');
                    }

                    if (item.disabled !== CL.contains('disabled')) {
                        CL.toggle('disabled');
                    }
                }
            }
        }, {
            key: "$checkboxEvent",
            value: function $checkboxEvent() {
                var _this2 = this;

                var self = this;

                var _loop = function _loop(i) {
                    var $checkbox = _this2.$checkboxs[i];
                    var CL = $checkbox.classList;
                    $checkbox.addEventListener('click', function (event) {
                        event.stopPropagation(); // 禁用的checkbox不触发事件

                        if (self.data[i].disabled === true) {
                            return;
                        }

                        self.$checkboxAction(CL, i);
                    });
                };

                for (var i = 0; i < this.count; i++) {
                    _loop(i);
                }
            }
        }, {
            key: "$indeterminateEvent",
            value: function $indeterminateEvent() {
                var self = this;
                var indeCL = this.$indeterminate.classList;
                this.$indeterminate.addEventListener('click', function (event) {
                    event.stopPropagation(); // 全选或者全不选

                    if (indeCL.contains('checked')) {
                        for (var i = 0; i < self.count; i++) {
                            // 禁用的checkbox不触发事件
                            if (self.data[i].disabled === true) {
                                continue;
                            }

                            var deCL = self.$checkboxs[i].classList;
                            deCL.contains('checked') ? deCL.remove('checked') : ''; // 数据变更

                            self.data[i].checked = false;
                        }
                    } else {
                        for (var _i = 0; _i < self.count; _i++) {
                            // 禁用的checkbox不触发事件
                            if (self.data[_i].disabled === true) {
                                continue;
                            }

                            var _deCL = self.$checkboxs[_i].classList;
                            !_deCL.contains('checked') ? _deCL.add('checked') : ''; // 数据变更

                            self.data[_i].checked = true;
                        }
                    } // 自己的action


                    indeCL.contains('somechecked') ? indeCL.remove('somechecked') : '';
                    indeCL.toggle('checked'); // 全选全不选时，回调的第二个参数是'indeterminate'

                    self.callback(self.data, 'indeterminate');
                });
            }
        }, {
            key: "$determinateEvent",
            value: function $determinateEvent() {
                var _this3 = this;

                var self = this;
                var indeCL = self.$indeterminate.classList;

                var _loop2 = function _loop2(i) {
                    var $determinate = _this3.$checkboxs[i];
                    var deCL = $determinate.classList;
                    $determinate.addEventListener('click', function (event) {
                        event.stopPropagation(); // 禁用的checkbox不触发事件

                        if (self.data[i].disabled === true) {
                            return;
                        }

                        var checked = !deCL.contains('checked');
                        var noneFlag = true;
                        var allFlag = true;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = self.$checkboxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var $item = _step.value;

                                if ($item === this) {
                                    continue;
                                }

                                if ($item.classList.contains('checked')) {
                                    noneFlag ? noneFlag = false : '';
                                } else {
                                    allFlag ? allFlag = false : '';
                                }

                                if (!noneFlag && !allFlag) {
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        if (checked && allFlag) {
                            indeCL.contains('somechecked') ? indeCL.remove('somechecked') : '';
                            !indeCL.contains('checked') ? indeCL.add('checked') : '';
                        } else if (!checked && noneFlag) {
                            indeCL.contains('checked') ? indeCL.remove('checked') : '';
                            indeCL.contains('somechecked') ? indeCL.remove('somechecked') : '';
                        } else {
                            indeCL.contains('checked') ? indeCL.remove('checked') : '';
                            !indeCL.contains('somechecked') ? indeCL.add('somechecked') : '';
                        } // 自己的action


                        self.$checkboxAction(deCL, i);
                    });
                };

                for (var i = 0; i < this.count; i++) {
                    _loop2(i);
                }
            }
        }, {
            key: "$checkboxAction",
            value: function $checkboxAction(CL, i) {
                if (CL.contains('checked')) {
                    CL.remove('checked');
                    this.data[i].checked = false; // 回调

                    this.callback(this.data, i);
                } else {
                    CL.add('checked');
                    this.data[i].checked = true; // 回调

                    this.callback(this.data, i);
                }
            }
        }, {
            key: "updateData",
            value: function updateData(data) {
                this.data = data;
                this.shapeData();
                this.renderStyle();
            }
        }, {
            key: "verifyOptions",
            value: function verifyOptions() {
                // $mounts
                if (!this.$mounts) {
                    throw new Error('[Qing error]: 多选框组件无法找到挂载点');
                } // indeterminateIndex


                if (this.indeterminateIndex !== undefined) {
                    if (typeof this.indeterminateIndex !== 'number') {
                        delete this.indeterminateIndex;
                        console.warn('[Qing warn]: 多选框组件的indeterminateIndex必须是数字');
                    } else if (this.indeterminateIndex >= this.count || this.indeterminateIndex < 0) {
                        this.indeterminateIndex = 0;
                        console.warn('[Qing warn]: 多选框组件的indeterminateIndex必须在多选框个数之内');
                    } else if (!Number.isInteger(this.indeterminateIndex)) {
                        this.indeterminateIndex = 0;
                        console.warn('[Qing warn]: 多选框组件的indeterminateIndex必须是整数');
                    }
                } // data


                if (Object.prototype.toString.call(this.data) !== '[object Array]') {
                    this.data = [];
                    console.warn('[Qing warn]: 多选框组件的data必须是数组');
                } // callback


                if (typeof this.callback !== 'function') {
                    this.callback = function () { };

                    console.warn('[Qing warn]: 多选框组件的callback必须是函数');
                }
            }
        }]);

        return Checkbox;
    }(FormCommon);