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
            id:'home2',
            type:'rect',
            rect:['220','138','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'home2',
            symbolName:'home'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '50px'],
            ["style", "width", '110px']
         ],
         "${_home2}": [
            ["style", "top", '0px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "dg7", tween: [ "transform", "${_home2}", "skewX", '-15deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
            { id: "dg8", tween: [ "transform", "${_home2}", "skewX", '0deg', { fromValue: '-15deg'}], position: 1000, duration: 1000 },
            { id: "dg9", tween: [ "transform", "${_home2}", "skewX", '15deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
            { id: "dg10", tween: [ "transform", "${_home2}", "skewX", '0deg', { fromValue: '15deg'}], position: 3000, duration: 1000 },
            { id: "dg6", tween: [ "style", "${_home2}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "dg1", tween: [ "style", "${_home2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "dg2", tween: [ "transform", "${_home2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
            { id: "dg3", tween: [ "transform", "${_home2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1000, duration: 1000 },
            { id: "dg4", tween: [ "transform", "${_home2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2000, duration: 1000 },
            { id: "dg5", tween: [ "transform", "${_home2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 3000, duration: 1000 }         ]
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
      id: 'home3',
      type: 'image',
      rect: ['0px','-3px','100px','53px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/home.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_home3}": [
            ["style", "top", '-3px'],
            ["style", "height", '53px'],
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4515200");
