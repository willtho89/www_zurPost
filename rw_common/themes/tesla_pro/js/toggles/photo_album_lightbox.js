
elixir.photoAlbumLightbox={};elixir.photoAlbumLightbox=(function(){var jQuery=elixir.jQuery;var $=jQuery;var $elixir=jQuery.noConflict();function photoAlbumLightboxFunction(){$('.thumbnail-frame').each(function(){var thumbnailCaption=$('.thumbnail-caption',this).text();$('a',this).attr({'href':$('a img',this).attr('src').replace(/thumb/i,'full'),'title':thumbnailCaption,});});$('.thumbnail-frame').magnificPopup({delegate:'a',type:'image',titleSrc:'title',gallery:{enabled:true,navigateByImgClick:false,preload:[0,2]},closeOnContentClick:true,mainClass:'mfp-with-zoom',zoom:{enabled:true,duration:300,easing:'ease-in-out',opener:function(openerElement){return openerElement.is('img')?openerElement:openerElement.find('img');}}});if($('.thumbnail-wrap .thumbnail-caption').length>0){$('.thumbnail-wrap').css({'margin-bottom':'80px'});}}
$(document).ready(function(){photoAlbumLightboxFunction();});})(elixir.photoAlbumLightbox);