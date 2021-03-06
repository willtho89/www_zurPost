/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_elixir_stacks_bricksTwo = {};
stacks.com_elixir_stacks_bricksTwo = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);


/**
 * jQuery Grid-A-Licious(tm) v3.01
 *
 * Terms of Use - jQuery Grid-A-Licious(tm)
 * under the MIT (http://www.opensource.org/licenses/mit-license.php) License.
 *
 * Copyright 2008-2012 Andreas Pihlström (Suprb). All rights reserved.
 * (http://suprb.com/apps/gridalicious/)
 *
 */

// Debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
// Copy pasted from http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function(a,b){var c=function(a,b,c){var d;return function(){function h(){if(!c)a.apply(f,g);d=null}var f=this,g=arguments;if(d)clearTimeout(d);else if(c)a.apply(f,g);d=setTimeout(h,b||150)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}})(jQuery,"smartresize");(function(a){a.Gal=function(b,c){this.element=a(c);this._init(b)};a.Gal.settings={selector:".item",width:225,gutter:20,animate:false,animationOptions:{speed:200,duration:300,effect:"fadeInOnAppear",queue:true,complete:function(){}}};a.Gal.prototype={_init:function(b){var c=this;this.name=this._setName(5);this.gridArr=[];this.gridArrAppend=[];this.gridArrPrepend=[];this.setArr=false;this.setGrid=false;this.setOptions;this.cols=0;this.itemCount=0;this.prependCount=0;this.isPrepending=false;this.appendCount=0;this.resetCount=true;this.ifCallback=true;this.box=this.element;this.options=a.extend(true,{},a.Gal.settings,b);this.gridArr=a.makeArray(this.box.find(this.options.selector));this.isResizing=false;this.w=0;this.boxArr=[];this._setCols();this._renderGrid("append");a(this.box).addClass("gridalicious");a(window).smartresize(function(){c.resize()})},_setName:function(a,b){b=b?b:"";return a?this._setName(--a,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*60))+b):b},_setCols:function(){this.cols=Math.floor(this.box.width()/this.options.width);diff=(this.box.width()-this.cols*this.options.width-this.options.gutter)/this.cols;w=(this.options.width+diff)/this.box.width()*100;this.w=w;for(var b=0;b<this.cols;b++){var c=a("<div></div>").addClass("galcolumn").attr("id","item"+b+this.name).css({width:w+"%",paddingLeft:this.options.gutter,paddingBottom:this.options.gutter,"float":"left","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","-o-box-sizing":"border-box","box-sizing":"border-box"});this.box.append(c)}this.box.find(a("#clear"+this.name)).remove();var d=a("<div></div>").css({clear:"both",height:"0",width:"0",display:"block"}).attr("id","clear"+this.name);this.box.append(d)},_renderGrid:function(b,c,d,e){var f=[];var g=[];var h=[];var i=0;var j=this.prependCount;var k=this.appendCount;var l=this.options.gutter;var m=this.cols;var n=this.name;var o=0;var p=a(".galcolumn").width();if(c){g=c;if(b=="append"){k+=d;i=this.appendCount}if(b=="prepend"){this.isPrepending=true;i=Math.round(d%m);if(i<=0)i=m}if(b=="renderAfterPrepend"){k+=d;i=d}}else{g=this.gridArr;k=a(this.gridArr).size()}a.each(g,function(c,d){var e=a(d);var g="100%";if(e.hasClass("not-responsive")){g="auto"}e.css({marginBottom:l,zoom:"1",filter:"alpha(opacity=0)",opacity:"0"}).find("object, embed, iframe").css({width:g,height:"auto",display:"block","margin-left":"auto","margin-right":"auto"});if(b=="prepend"){i--;a("#item"+i+n).prepend(e);f.push(e);if(i==0)i=m}else{a("#item"+i+n).append(e);f.push(e);i++;if(i>=m)i=0;if(k>=m)k=k-m}});this.appendCount=k;this.itemCount=i;if(b=="append"||b=="prepend"){if(b=="prepend"){this._updateAfterPrepend(this.gridArr,g)}this._renderItem(f);this.isPrepending=false}else{this._renderItem(this.gridArr)}},_collectItems:function(){var b=[];a(this.box).find(this.options.selector).each(function(c){b.push(a(this))});return b},_renderItem:function(b){var c=this.options.animationOptions.speed;var d=this.options.animationOptions.effect;var e=this.options.animationOptions.duration;var f=this.options.animationOptions.queue;var g=this.options.animate;var h=this.options.animationOptions.complete;var i=0;var j=0;if(g===true&&!this.isResizing){if(f===true&&d=="fadeInOnAppear"){if(this.isPrepending)b.reverse();a.each(b,function(d,f){setTimeout(function(){a(f).animate({opacity:"1.0"},e);j++;if(j==b.length){h.call(undefined,b)}},i*c);i++})}else if(f===false&&d=="fadeInOnAppear"){if(this.isPrepending)b.reverse();a.each(b,function(c,d){a(d).animate({opacity:"1.0"},e);j++;if(j==b.length){if(this.ifCallback){h.call(undefined,b)}}})}if(f===true&&!d){a.each(b,function(c,d){a(d).css({opacity:"1",filter:"alpha(opacity=1)"});j++;if(j==b.length){if(this.ifCallback){h.call(undefined,b)}}})}}else{a.each(b,function(b,c){a(c).css({opacity:"1",filter:"alpha(opacity=1)"})});if(this.ifCallback){h.call(b)}}},_updateAfterPrepend:function(b,c){var d=this.gridArr;a.each(c,function(a,b){d.unshift(b)});this.gridArr=d},resize:function(){this.box.find(a(".galcolumn")).remove();this._setCols();this.ifCallback=false;this.isResizing=true;this._renderGrid("append");this.ifCallback=true;this.isResizing=false},append:function(b){var c=this.gridArr;var d=this.gridArrPrepend;a.each(b,function(a,b){c.push(b);d.push(b)});this._renderGrid("append",b,a(b).size())},prepend:function(b){this.ifCallback=false;this._renderGrid("prepend",b,a(b).size());this.ifCallback=true}};a.fn.gridalicious=function(b,c){if(typeof b==="string"){this.each(function(){var d=a.data(this,"gridalicious");d[b].apply(d,[c])})}else{this.each(function(){a.data(this,"gridalicious",new a.Gal(b,this))})}return this}})(jQuery)

return stack;})(stacks.com_elixir_stacks_bricksTwo);
stacks.stacks_in_6_page9 = {};
stacks.stacks_in_6_page9 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(function() {


$(document).ready(function() {
	$('#stacks_in_6_page9 .bricks-item').parentsUntil('.stacks_top').css({'overflow' : 'visible'});
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	  $(".stacks_top").css("overflow", "visible");
	}

	
		$('#stacks_in_6_page9 .bricks_wrapper').hide();
		$('#stacks_in_6_page9 .bricks_loader').fadeIn(400);
	
});


// Wait until page loads to initialize Bricks elements
$(window).load(function() {

	
		$('#stacks_in_6_page9 .bricks_loader').remove();
		$('#stacks_in_6_page9 .bricks_wrapper').fadeIn(800);
	

	$("#stacks_in_6_page9 .bricks_wrapper").gridalicious({
		selector: '.bricks-item',
		width: 300,
		gutter: 30,
		animate: false
	});


		

		if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){

		  $('#stacks_in_6_page9 .bricks-item').css({'opacity':'0'}).each(function(count) {

				$(this).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
				  if (isInView) {
				    // element is now visible in the viewport
				    if (visiblePartY == 'top') {
				      // top part of element is visible
				      $(this).addClass('elxr_bricks_fadeInUp');
				    } else if (visiblePartY == 'bottom') {
				      // bottom part of element is visible
				    } else {
				    	// Whole thing is visible
				      $(this).addClass('elxr_bricks_fadeInUp');
				    }
				  } else {
				  		// Completely out of viewport
				  }
				});
			});

		}

		
});


});
return stack;})(stacks.stacks_in_6_page9);