webpackJsonp([34],{8:function(n,t,a){"use strict";a(15),a(14)},14:function(n,t){},15:function(n,t){},18:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var e=a(24),o=s(e),p=a(23),l=s(p);t["default"]=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=(0,l["default"])(n);!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(u){e=!0,o=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},20:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return Object.keys(n).forEach(function(t){return n[t]=t}),n}function o(n,t){var a={};return t.forEach(function(t){a[t]=n[t]}),a}function p(n){var t=n.touches,a=n.changedTouches,s=t&&t.length>0,e=a&&a.length>0;return!s&&e?a[0]:s?t[0]:n}function l(){return Date.now()-O>=D}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),u=s(c),i=a(12),r=s(i),E=a(2),R=s(E),d=e({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null}),k={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},h={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},_={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},f=e({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),S={NOT_RESPONDER:{DELAY:d.ERROR,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.ERROR,RESPONDER_TERMINATED:d.ERROR,ENTER_PRESS_RECT:d.ERROR,LEAVE_PRESS_RECT:d.ERROR,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:d.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:d.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:d.ERROR,RESPONDER_GRANT:d.ERROR,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:d.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:d.ERROR},error:{DELAY:d.NOT_RESPONDER,RESPONDER_GRANT:d.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:d.NOT_RESPONDER,RESPONDER_TERMINATED:d.NOT_RESPONDER,ENTER_PRESS_RECT:d.NOT_RESPONDER,LEAVE_PRESS_RECT:d.NOT_RESPONDER,LONG_PRESS_DETECTED:d.NOT_RESPONDER}},N=130,m=20,g=500,T=g-N,P=10,O=0,D=200,v=u["default"].createClass({displayName:"Touchable",getDefaultProps:function(){return{disabled:!1,delayPressIn:N,delayLongPress:T,delayPressOut:100,pressRetentionOffset:{left:m,right:m,top:m,bottom:m},hitSlop:void 0,longPressCancelsPress:!0}},getInitialState:function(){return{active:!1}},componentWillMount:function(){this.touchable={touchState:void 0}},componentDidMount:function(){this.root=R["default"].findDOMNode(this)},componentDidUpdate:function(){this.root=R["default"].findDOMNode(this)},componentWillUnmount:function(){this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},callChildEvent:function(n,t){var a=this.props.children.props[n];a&&a(t)},onTouchStart:function(n){this.callChildEvent("onTouchStart",n),this.lockMouse=!0,this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableHandleResponderGrant(n.nativeEvent)},onTouchMove:function(n){this.callChildEvent("onTouchMove",n),this.touchableHandleResponderMove(n.nativeEvent)},onTouchEnd:function(n){var t=this;this.callChildEvent("onTouchEnd",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderRelease(n.nativeEvent)},onTouchCancel:function(n){var t=this;this.callChildEvent("onTouchCancel",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderTerminate(n.nativeEvent)},onMouseDown:function(n){this.callChildEvent("onMouseDown",n),this.lockMouse||(this.touchableHandleResponderGrant(n.nativeEvent),document.addEventListener("mousemove",this.touchableHandleResponderMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onMouseUp:function(n){document.removeEventListener("mousemove",this.touchableHandleResponderMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.touchableHandleResponderRelease(n)},_remeasureMetricsOnInit:function(n){var t=this.root,a=p(n),s=t.getBoundingClientRect();this.touchable={touchState:this.touchable.touchState,startMouse:{pageX:a.pageX,pageY:a.pageY},positionOnGrant:{left:s.left+window.pageXOffset,top:s.top+window.pageYOffset,width:s.width,height:s.height,clientLeft:s.left,clientTop:s.top}}},touchableHandleResponderGrant:function(n){var t=this;if(this.touchable.touchState=d.NOT_RESPONDER,this.pressOutDelayTimeout&&(clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null),l()){this._remeasureMetricsOnInit(n),this._receiveSignal(f.RESPONDER_GRANT,n);var a=this.props.delayPressIn;a?this.touchableDelayTimeout=setTimeout(function(){t._handleDelay(n)},a):this._handleDelay(n);var s=this.props.delayLongPress;this.longPressDelayTimeout=setTimeout(function(){t._handleLongDelay(n)},s+a)}},checkScroll:function(n){var t=this.touchable.positionOnGrant,a=this.root.getBoundingClientRect();if(a.left!==t.clientLeft||a.top!==t.clientTop)return this._receiveSignal(f.RESPONDER_TERMINATED,n),!1},touchableHandleResponderRelease:function(n){if(!l())return void this._receiveSignal(f.RESPONDER_TERMINATED,n);var t=p(n);return Math.abs(t.pageX-this.touchable.startMouse.pageX)>30||Math.abs(t.pageY-this.touchable.startMouse.pageY)>30?void this._receiveSignal(f.RESPONDER_TERMINATED,n):void(this.checkScroll(n)!==!1&&this._receiveSignal(f.RESPONDER_RELEASE,n))},touchableHandleResponderTerminate:function(n){this._receiveSignal(f.RESPONDER_TERMINATED,n)},checkTouchWithinActive:function(n){var t=this.touchable.positionOnGrant,a=this.props,s=a.pressRetentionOffset,e=a.hitSlop,o=s.left,l=s.top,c=s.right,u=s.bottom;e&&(o+=e.left,l+=e.top,c+=e.right,u+=e.bottom);var i=p(n),r=i&&i.pageX,E=i&&i.pageY;return r>t.left-o&&E>t.top-l&&r<t.left+t.width+c&&E<t.top+t.height+u},touchableHandleResponderMove:function(n){if(this.touchable.dimensionsOnActivate&&this.touchable.touchState!==d.NOT_RESPONDER&&this.touchable.touchState!==d.RESPONDER_INACTIVE_PRESS_IN){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;if(this.pressInLocation){var e=this._getDistanceBetweenPoints(a,s,this.pressInLocation.pageX,this.pressInLocation.pageY);e>P&&this._cancelLongPressDelayTimeout()}if(this.checkTouchWithinActive(n)){this._receiveSignal(f.ENTER_PRESS_RECT,n);var o=this.touchable.touchState;o===d.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(f.LEAVE_PRESS_RECT,n)}},touchableHandleActivePressIn:function(n){this.setActive(!0),this.props.onPressIn&&this.props.onPressIn(n)},touchableHandleActivePressOut:function(n){this.setActive(!1),this.props.onPressOut&&this.props.onPressOut(n)},touchableHandlePress:function(n){this.props.onPress&&this.props.onPress(n),O=Date.now()},touchableHandleLongPress:function(n){this.props.onLongPress&&this.props.onLongPress(n)},setActive:function(n){(this.props.activeClassName||this.props.activeStyle)&&this.setState({active:n})},_remeasureMetricsOnActivation:function(){this.touchable.dimensionsOnActivate=this.touchable.positionOnGrant},_handleDelay:function(n){this.touchableDelayTimeout=null,this._receiveSignal(f.DELAY,n)},_handleLongDelay:function(n){this.longPressDelayTimeout=null;var t=this.touchable.touchState;t!==d.RESPONDER_ACTIVE_PRESS_IN&&t!==d.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+t+"` to `"+d.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(f.LONG_PRESS_DETECTED,n)},_receiveSignal:function(n,t){var a=this.touchable.touchState,s=S[a]&&S[a][n];s&&s!==d.ERROR&&a!==s&&(this._performSideEffectsForTransition(a,s,n,t),this.touchable.touchState=s)},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&(clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null)},_isHighlight:function(n){return n===d.RESPONDER_ACTIVE_PRESS_IN||n===d.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(n){var t=p(n),a=t&&t.pageX,s=t&&t.pageY;this.pressInLocation={pageX:a,pageY:s}},_getDistanceBetweenPoints:function(n,t,a,s){var e=n-a,o=t-s;return Math.sqrt(e*e+o*o)},_performSideEffectsForTransition:function(n,t,a,s){var e=this._isHighlight(n),o=this._isHighlight(t),p=a===f.RESPONDER_TERMINATED||a===f.RESPONDER_RELEASE;if(p&&this._cancelLongPressDelayTimeout(),!k[n]&&k[t]&&this._remeasureMetricsOnActivation(),h[n]&&a===f.LONG_PRESS_DETECTED&&this.touchableHandleLongPress(s),o&&!e?this._startHighlight(s):!o&&e&&this._endHighlight(s),h[n]&&a===f.RESPONDER_RELEASE){var l=!!this.props.onLongPress,c=_[n]&&(!l||!this.props.longPressCancelsPress),u=!_[n]||c;u&&(o||e||(this._startHighlight(s),this._endHighlight(s)),this.touchableHandlePress(s))}this.touchableDelayTimeout&&(clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null)},_startHighlight:function(n){this._savePressInLocation(n),this.touchableHandleActivePressIn(n)},_endHighlight:function(n){var t=this;this.props.delayPressOut?this.pressOutDelayTimeout=setTimeout(function(){t.touchableHandleActivePressOut(n)},this.props.delayPressOut):this.touchableHandleActivePressOut(n)},render:function(){var n=this.props,t=n.children,a=n.disabled,s=n.activeStyle,e=n.activeClassName,p=a?void 0:o(this,["onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","onMouseDown"]),l=u["default"].Children.only(t);if(this.state.active){var c=l.props,i=c.style,E=c.className;return s&&(i=(0,r["default"])({},i,s)),e&&(E?E+=" "+e:E=e),u["default"].cloneElement(l,(0,r["default"])({className:E,style:i},p))}return u["default"].cloneElement(l,p)}});t["default"]=v,n.exports=t["default"]},23:function(n,t,a){n.exports={"default":a(25),__esModule:!0}},24:function(n,t,a){n.exports={"default":a(26),__esModule:!0}},25:function(n,t,a){a(21),a(17),n.exports=a(27)},26:function(n,t,a){a(21),a(17),n.exports=a(28)},27:function(n,t,a){var s=a(32),e=a(36);n.exports=a(16).getIterator=function(n){var t=e(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},28:function(n,t,a){var s=a(43),e=a(22)("iterator"),o=a(33);n.exports=a(16).isIterable=function(n){var t=Object(n);return void 0!==t[e]||"@@iterator"in t||o.hasOwnProperty(s(t))}},31:function(n,t,a){"use strict";a(8),a(39)},34:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(38),k=s(d),h=a(3),_=s(h),f=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.children,e=t.className,p=t.style,l=t.renderHeader,c=t.renderFooter,u=(0,_["default"])((n={},(0,o["default"])(n,a,!0),(0,o["default"])(n,e,e),n));return R["default"].createElement("div",{className:u,style:p},l?R["default"].createElement("div",{className:a+"-header"},l()):null,s?R["default"].createElement("div",{className:a+"-body"},s):null,c?R["default"].createElement("div",{className:a+"-footer"},c()):null)},t}(R["default"].Component);t["default"]=f,f.Item=k["default"],f.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},38:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var e=a(9),o=s(e),p=a(7),l=s(p),c=a(18),u=s(c),i=a(4),r=s(i),E=a(6),R=s(E),d=a(5),k=s(d),h=a(1),_=s(h),f=a(3),S=s(f),N=a(19),m=s(N),g=a(20),T=s(g),P=t.Brief=function(n){function t(){return(0,r["default"])(this,t),(0,R["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){return _["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},t}(_["default"].Component),O=function(n){function t(){return(0,r["default"])(this,t),(0,R["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n,t,a,s=(0,m["default"])(this.props,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow"]),e=(0,u["default"])(s,2),p=e[0],c=p.prefixCls,i=p.className,r=p.activeStyle,E=p.error,R=p.align,d=p.wrap,k=p.disabled,h=p.children,f=p.multipleLine,N=p.thumb,g=p.extra,P=p.arrow,O=e[1],D=(n={},(0,l["default"])(n,i,i),(0,l["default"])(n,c+"-item",!0),(0,l["default"])(n,c+"-item-disabled",k),(0,l["default"])(n,c+"-item-error",E),(0,l["default"])(n,c+"-item-top","top"===R),(0,l["default"])(n,c+"-item-middle","middle"===R),(0,l["default"])(n,c+"-item-bottom","bottom"===R),n),v=(0,S["default"])((t={},(0,l["default"])(t,c+"-line",!0),(0,l["default"])(t,c+"-line-multiple",f),(0,l["default"])(t,c+"-line-wrap",d),t)),I=(0,S["default"])((a={},(0,l["default"])(a,c+"-arrow",!0),(0,l["default"])(a,c+"-arrow-horizontal","horizontal"===P),(0,l["default"])(a,c+"-arrow-vertical","down"===P||"up"===P),(0,l["default"])(a,c+"-arrow-vertical-up","up"===P),a)),b=_["default"].createElement("div",(0,o["default"])({},O,{className:(0,S["default"])(D)}),N?_["default"].createElement("div",{className:c+"-thumb"},"string"==typeof N?_["default"].createElement("img",{src:N}):N):null,_["default"].createElement("div",{className:v},h?_["default"].createElement("div",{className:c+"-content"},h):null,g?_["default"].createElement("div",{className:c+"-extra"},g):null,P?_["default"].createElement("div",{className:I}):null));return _["default"].createElement(T["default"],{disabled:k||!O.onClick,activeStyle:r,activeClassName:c+"-item-active"},b)},t}(_["default"].Component);O.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1},O.Brief=P,t["default"]=O},39:function(n,t){},317:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var e=a(7),o=s(e),p=a(4),l=s(p),c=a(6),u=s(c),i=a(5),r=s(i),E=a(1),R=s(E),d=a(3),k=s(d),h=function(n){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t,a=this.props,s=a.text,e=a.prefixCls,p=a.overflowCount,l=a.className,c=a.style,u=a.children,i=this.props.dot,r=this.props.size,E=this.props.corner;s=s>p?p+"+":s,i&&(s="");var d=!(s&&"0"!==s||i),h=(0,k["default"])((n={},(0,o["default"])(n,e+"-dot",i),(0,o["default"])(n,e+"-dot-large",i&&"large"===r),(0,o["default"])(n,e+"-text",!i&&!E),(0,o["default"])(n,e+"-corner",E),(0,o["default"])(n,e+"-corner-large",E&&"large"===r),n)),_=(0,k["default"])((t={},(0,o["default"])(t,l,!!l),(0,o["default"])(t,e,!0),(0,o["default"])(t,e+"-not-a-wrapper",!u),(0,o["default"])(t,e+"-corner-wrapper",E),(0,o["default"])(t,e+"-corner-wrapper-large",E&&"large"===r),t));return R["default"].createElement("span",{className:_,title:s},u,!d&&R["default"].createElement("sup",{className:h,style:c},s))},t}(R["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=t["default"]},318:function(n,t,a){"use strict";a(8),a(395)},395:function(n,t){},661:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(31),a(34)),o=s(e),p=(a(318),a(317)),l=s(p),c=a(1),u=s(c),i=a(2);s(i);n.exports={content:[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003"]],meta:{order:4,title:"\u7efc\u5408\u793a\u4f8b",filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5c0f\u5706\u70b9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n    <span class="token operator">></span>\n      \u53f3\u4fa7\u5185\u5bb9\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u6587\u672c\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      \u96c6\u5408\uff1a\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5238<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>NEW<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#21b68a\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n        padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n        borderRadius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span>\n        border<span class="token punctuation">:</span> <span class="token string">\'1px solid #f19736\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u8d85\u51fa<span class="token number">99</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return u["default"].createElement(o["default"],{renderHeader:function(){return""}},u["default"].createElement(o["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},u["default"].createElement(l["default"],{dot:!0},u["default"].createElement("span",{style:{width:"0.52rem",height:"0.52rem",background:"#ddd",display:"inline-block"}})),u["default"].createElement("span",{style:{marginLeft:12}},"\u5c0f\u5706\u70b9")),u["default"].createElement(o["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:u["default"].createElement(l["default"],{text:77}),arrow:"horizontal"},"\u53f3\u4fa7\u5185\u5bb9"),u["default"].createElement(o["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",
arrow:"horizontal"},"\u6587\u672c\u5185\u5bb9",u["default"].createElement(l["default"],{text:"new",style:{marginLeft:12}})),u["default"].createElement(o["default"].Item,null,"\u96c6\u5408\uff1a",u["default"].createElement(l["default"],{text:4,style:{marginLeft:12}}),u["default"].createElement(l["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#f19736",borderRadius:2}}),u["default"].createElement(l["default"],{text:"NEW",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#21b68a",borderRadius:2}}),u["default"].createElement(l["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})),u["default"].createElement(o["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u8d85\u51fa99",u["default"].createElement(l["default"],{text:100,style:{marginLeft:12}})))}}},856:function(n,t,a){n.exports={basic:a(661)}}});