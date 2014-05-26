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
            id:'messages2',
            type:'rect',
            rect:['3','4','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'messages2',
            symbolName:'messages'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '60px'],
            ["style", "width", '160px']
         ],
         "${_messages2}": [
            ["style", "top", '2px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '3px'],
            ["transform", "rotateZ", '0deg']
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
            { id: "eid38", tween: [ "style", "${_messages2}", "top", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_messages2}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_messages2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid45", tween: [ "transform", "${_messages2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
            { id: "eid46", tween: [ "transform", "${_messages2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid47", tween: [ "transform", "${_messages2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500 },
            { id: "eid39", tween: [ "transform", "${_messages2}", "skewX", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid40", tween: [ "transform", "${_messages2}", "skewX", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid41", tween: [ "transform", "${_messages2}", "skewX", '15deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid42", tween: [ "transform", "${_messages2}", "skewX", '0deg', { fromValue: '15deg'}], position: 1500, duration: 500 }         ]
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
      id: 'profile',
      type: 'image',
      rect: ['0px','0px','114px','55px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/profile.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_profile}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
},
"messages": {
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
      id: 'messages3',
      type: 'image',
      rect: ['0px','3px','147px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/messages.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_messages3}": [
            ["style", "top", '3px'],
            ["style", "height", '48px'],
            ["style", "left", '0px'],
            ["style", "width", '147px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '147px']
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
})(jQuery, AdobeEdge, "EDGE-4515202");
