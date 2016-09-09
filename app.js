
function createMadness(containerId, canvasId, particleAmount, speed) {
	var mouseOver = false;
	var madnessContainer = document.getElementById(containerId);
	var that = this;

	var uaDetails = getUaDetails();
	var sizeModifier = 4;
	if (uaDetails.mobile == "i" || uaDetails.mobile === "a") {
		sizeModifier = 10;
	}

	var particles = [];
	for( var i = 0; i < particleAmount; i++ ) {
		particles.push( { 
			x:Math.random()*madnessContainer.offsetWidth, 
			y:Math.random()*madnessContainer.offsetHeight, 
			vx:(Math.random()*2)-1, 
			vy:(Math.random()*2-1),
			history: [],
			size: Math.random()*sizeModifier,
			color: "#000000"
		} );
	}

	var mouse = { x: 0, y: 0 };

	var canvas = document.getElementById(canvasId);

	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		Initialize(speed);
	}

	function Initialize(speed) {
		canvas.addEventListener('mousemove', MouseMove, false);
		canvas.addEventListener ("mouseout", MouseOut, false);
		canvas.addEventListener("mouseover", MouseOver, false);
		window.addEventListener('resize', ResizeCanvas, false);
		that.intervals = that.intervals || {};
		that.intervals[containerId] = setInterval( TimeUpdate, speed );
		
		context.beginPath();
		
		ResizeCanvas();
	}

	function TimeUpdate(e) {
		
		context.clearRect(0, 0, madnessContainer.offsetWidth, madnessContainer.offsetHeight);
		
		for( var i = 0; i < particles.length; i++ ) {
			particles[i].x += particles[i].vx;
			particles[i].y += particles[i].vy;
			
			if( particles[i].x > madnessContainer.offsetWidth ) {
				particles[i].vx = -1-Math.random();
			}
			else if ( particles[i].x < 0 ) {
				particles[i].vx = 1+Math.random();
			}
			else {
				particles[i].vx *= 1 + (Math.random()*0.005);
			}
			
			if( particles[i].y > madnessContainer.offsetHeight ) {
				particles[i].vy = -1-Math.random();
			}
			else if ( particles[i].y < 0 ) {
				particles[i].vy = 1+Math.random();
			}
			else {
				particles[i].vy *= 1 + (Math.random()*0.005);
			}
			
			particles[i].history.push({	x: particles[i].x, y: particles[i].y });
			if( particles[i].history.length > 45 ) {
				particles[i].history.shift();
			}
			
			var madnessFactor = 1;
			if (mouseOver) {
				madnessFactor = DistanceBetween( mouse, particles[i] );
				madnessFactor = Math.max( Math.min( 15 - ( madnessFactor / 10 ), 10 ), 1 );
				
				/**
				if (madnessFactor > 9) { 
					var randomColor = getRandomColor();
					context.fillStyle = randomColor;

				} else {
					context.fillStyle = particles[i].color;
				}
				**/
				context.fillStyle = particles[i].color;
			}

			if (!mouseOver) {
				context.fillStyle = particles[i].color;
			}
			
			//context.fillStyle = particles[i].color;
			context.beginPath();
			context.arc(particles[i].x,particles[i].y,particles[i].size,0,Math.PI*2,true);
			context.closePath();
			context.fill();
			
		}
	}

	function MouseMove(e) {
		mouse.x = e.layerX;
		mouse.y = e.layerY;
		
		//context.fillRect(e.layerX, e.layerY, 5, 5);
		//Draw( e.layerX, e.layerY );
	}

	function MouseOut(e) {
		mouseOver = false;
		if (window.innerWidth >= 1000) {
			clearInterval(that.intervals[containerId]);
			that.intervals[containerId] = setInterval(TimeUpdate,speed)
		}
	}

	function MouseOver(e) {
		mouseOver = true;
		if (window.innerWidth >= 1000) {
			clearInterval(that.intervals[containerId]);
			that.intervals[containerId] = setInterval(TimeUpdate,speed/4)
		}
	}

	function ResizeCanvas(e) {
		canvas.width = madnessContainer.offsetWidth;
		canvas.height = madnessContainer.offsetHeight;
	}

	function DistanceBetween(p1,p2) {
		var dx = p2.x-p1.x;
		var dy = p2.y-p1.y;
		return Math.sqrt(dx*dx + dy*dy);
	}

	function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	uaDetails = getUaDetails();
	if (uaDetails.mobile == "i" || uaDetails.mobile === "a") {
		setTimeout(function(){
			var lama = document.getElementById('lama');
			lama.style.bottom = "-5%";
		    lama.style.width = "100%";
		   	lama.style.left = "0";

		   	var madnessContainer = document.getElementById(containerId);
		   	madnessContainer.style.width = "450px";
			madnessContainer.style.height = "250px";
			madnessContainer.style.bottom = "35%";
			madnessContainer.style.left = "420px";
		},2500);
	}

	function getUaDetails() {
		var ua = navigator.userAgent;
		console.log(navigator.userAgent)
		var results = {}; 
		results.browser = /Edge\/\d+/.test(ua) ? 'ed' : /MSIE 9/.test(ua) ? 'ie9' : /MSIE 10/.test(ua) ? 'ie10' : /MSIE 11/.test(ua) ? 'ie11' : /MSIE\s\d/.test(ua) ? 'ie?' : /rv\:11/.test(ua) ? 'ie11' : /Firefox\W\d/.test(ua) ? 'ff' : /Chrom(e|ium)\W\d|CriOS\W\d/.test(ua) ? 'gc' : /\bSafari\W\d/.test(ua) ? 'sa' : /\bOpera\W\d/.test(ua) ? 'op' : /\bOPR\W\d/i.test(ua) ? 'op' : typeof MSPointerEvent !== 'undefined' ? 'ie?' : '',
		results.os = /Windows NT 10/.test(ua) ? "win10" : /Windows NT 6\.0/.test(ua) ? "winvista" : /Windows NT 6\.1/.test(ua) ? "win7" : /Windows NT 6\.\d/.test(ua) ? "win8" : /Windows NT 5\.1/.test(ua) ? "winxp" : /Windows NT [1-5]\./.test(ua) ? "winnt" : /Mac/.test(ua) ? "mac" : /Linux/.test(ua) ? "linux" : /X11/.test(ua) ? "nix" : "",
		results.touch = 'ontouchstart' in document.documentElement,
		results.mobile = /IEMobile|Windows Phone|Lumia/i.test(ua) ? 'w' : /iPhone|iP[oa]d/.test(ua) ? 'i' : /Android/.test(ua) ? 'a' : /BlackBerry|PlayBook|BB10/.test(ua) ? 'b' : /Mobile Safari/.test(ua) ? 's' : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua) ? 1 : 0,
		results.tablet = /Tablet|iPad/i.test(ua);
		return results;
	}
}

createMadness('madnessBrainContainer', 'madnessBrain', 50, 20);
createMadness('madnessEyeContainer', 'madnessEye', 10, 30);

var e = document.getElementById('contact-email');
e.onmouseover = function() {
  document.getElementById('contact-email-popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('contact-email-popup').style.display = 'none';
}