/*!
 * kort 0.1
 * http://lab.hakim.se/kort
 * MIT licensed
 *
 * Copyright (C) 2011 Hakim El Hattab (http://hakim.se, @hakimel)
 */
 /* ������������֮�� www.lanrenzhijia.com */
var Kort = (function(){

	var OFFSET_MARGIN = 2;

	// var supports3DTransforms =  'WebkitPerspective' in document.getElementsByClassName('kort')[0].style ||
	// 							'MozPerspective' in document.getElementsByClassName('kort')[0].style ||
	// 							'msPerspective' in document.getElementsByClassName('kort')[0].style ||
	// 							'OPerspective' in document.getElementsByClassName('kort')[0].style ||
	// 							'perspective' in document.getElementsByClassName('kort')[0].style;

	/**
	 * Binds events for all elements with the class 'kort'.
	 */
	function bind() {

		// Properties that are read from the DOM when the user hovers
		// and then cached to avoid needless DOM interaction
		var elementLeft = 0,
			elementWidth = 0,
			elementChildren = [];

		// Gotta have 3D transform support
		if( true ) {
			//调用数组的每个元素，并将元素传递给回调函数
			[].slice.call( document.querySelectorAll( '.kort' ) ).forEach( function( element, i ) {

				// Make sure we don't bind to the same element twice
				//判断当前是否有kort-activated类
				if( element.classList.contains( 'kort-activated' ) === false ) {
					element.classList.add( 'kort-activated' );
					//鼠标移入
					function onMouseOver( event ) {
						updateState();
						addMargin();
					}
					//鼠标移动
					function onMouseMove( event ) {
						update( event.clientX );
					}
					//鼠标移出
					function onMouseOut( event ) {
						removeMargin();
					}

					function updateState() {
						elementLeft = element.offsetLeft;
						elementWidth = element.offsetWidth;
						elementChildren = [].slice.call( element.children );
					}

					//
					function update( x ) {
						// Find the present element based on the x position
						var present = Math.floor( ( x - elementLeft ) / elementWidth * elementChildren.length );

						// Cap to 0 - number_of_elements
						present = Math.max( Math.min( present, elementChildren.length - 1 ), 0 );

						elementChildren.forEach( function( child, i ) {

							if( i === present ) {
								child.classList.add( 'present' );
							}
							else {
								child.classList.remove( 'present' );
							}

						} );
					}

					//添加做边margin
					function addMargin() {
						elementChildren.forEach( function( child, i ) {
							child.style.marginLeft = ( i * OFFSET_MARGIN ) + 'px';
						} );
					}

					//移除左边margin
					function removeMargin() {
						elementChildren.forEach( function( child, i ) {
							child.style.marginLeft = 0;

						} );
					}

					//添加鼠标移入,移动,移出事件
					element.addEventListener( 'mouseover', onMouseOver, false );
					element.addEventListener( 'mouseout', onMouseOut, false );
					element.addEventListener( 'mousemove', onMouseMove, false );

				}

			} );

		}

	}

	// Bind elments that are currently in the DOM
	bind();

	return {
		bind: bind
	};

})();
