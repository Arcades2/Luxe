TweenMax.from('#header-content', 5, {opacity: 0});

var controller = new ScrollMagic.Controller();

var photos = document.querySelectorAll('.photos');

photos.forEach(function(el) {
	var scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook: 0.9,
		duration: 800,
		tweenChanges: true,
	});

	controller.addScene(scene);

	var timeline = new TimelineMax();

	var tween1 = TweenMax.set(el, {visibility: 'visible'});
	var tween2 = TweenMax.from(el, 5, {y: 150});

	timeline
		.add(tween1)
		.add(tween2);

	scene.setTween(timeline);
});

var descs = document.querySelectorAll('.desc');

descs.forEach(function(el) {
	var scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook: 0.8,
		duration: 100,
		tweenChanges: true,
	});

	controller.addScene(scene);

	var timeline = new TimelineMax();

	var tween1 = TweenMax.to(el, 2, {opacity: 1});

	timeline
		.add(tween1);

	scene.setTween(timeline);
});

var middleScene = new ScrollMagic.Scene({
	triggerElement: '#background',
	triggerHook: 0.8, 
	duration: 500,
	tweenChanges: true,
});

controller.addScene(middleScene);

var middleTimeline = new TimelineMax();

var tween1 = TweenMax.to('#background', 5, {y: 50, x: 100});
var tween2 = TweenMax.to('#middle', 5, {y: -20, x: -45});
var tween3 = TweenMax.to('#foreground', 5, {y: 40, x: 50});

middleTimeline
	.add(tween1, 0)
	.add(tween2, 0)
	.add(tween3, 0);

middleScene.setTween(middleTimeline);