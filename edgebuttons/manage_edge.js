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
            id:'manage',
            type:'rect',
            rect:['0','55','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'manage',
            symbolName:'manage'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '150px'],
            ["style", "width", '280px']
         ],
         "${_manage}": [
            ["style", "top", '21px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '7px'],
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
            { id: "eid81", tween: [ "style", "${_manage}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_manage}", "skewX", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid75", tween: [ "transform", "${_manage}", "skewX", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid76", tween: [ "transform", "${_manage}", "skewX", '15deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid77", tween: [ "transform", "${_manage}", "skewX", '0deg', { fromValue: '15deg'}], position: 1500, duration: 500 },
            { id: "eid69", tween: [ "transform", "${_manage}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid70", tween: [ "transform", "${_manage}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "transform", "${_manage}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid72", tween: [ "transform", "${_manage}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500 },
            { id: "eid80", tween: [ "style", "${_manage}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 }         ]
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
      id: 'messages',
      type: 'image',
      rect: ['0px','0px','147px','53px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/messages.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_messages}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
},
"manage": {
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
      id: 'manage_accounts2',
      type: 'image',
      rect: ['58px','-3px','150px','121px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/manage%20accounts.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_manage_accounts2}": [
            ["style", "top", '-3px'],
            ["style", "height", '121px'],
            ["style", "left", '58px'],
            ["style", "width", '150px']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '265px']
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
})(jQuery, AdobeEdge, "EDGE-4515204");
