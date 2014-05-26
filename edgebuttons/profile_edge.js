/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Symbol_1',
            type:'rect',
            rect:['5','-55','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '60px'],
            ["style", "width", '120px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '2px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '3px'],
            ["transform", "skewX", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "transform", "${_Symbol_1}", "skewX", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid18", tween: [ "transform", "${_Symbol_1}", "skewX", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid19", tween: [ "transform", "${_Symbol_1}", "skewX", '15deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid20", tween: [ "transform", "${_Symbol_1}", "skewX", '0deg', { fromValue: '15deg'}], position: 1500, duration: 500 },
            { id: "eid36", tween: [ "style", "${_Symbol_1}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Symbol_1}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_Symbol_1}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid23", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
            { id: "eid24", tween: [ "transform", "${_Symbol_1}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid25", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500 }         ]
      }
   }
},
"home": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'home',
      type: 'image',
      rect: ['0px','0px','100px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/home.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_home}": [
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'profile3',
      type: 'image',
      rect: ['0px','3px','114px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/profile3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_profile3}": [
            ["style", "top", '3px'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "width", '114px']
         ],
         "${symbolSelector}": [
            ["style", "height", '55px'],
            ["style", "width", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4515201");
