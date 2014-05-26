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
            id:'pro2',
            type:'rect',
            rect:['105','24','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'pro2',
            symbolName:'pro'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ],
         "${_pro2}": [
            ["style", "top", '14px'],
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
            { id: "eid83", tween: [ "transform", "${_pro2}", "skewX", '-15deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid84", tween: [ "transform", "${_pro2}", "skewX", '0deg', { fromValue: '-15deg'}], position: 500, duration: 500 },
            { id: "eid85", tween: [ "transform", "${_pro2}", "skewX", '15deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid86", tween: [ "transform", "${_pro2}", "skewX", '0deg', { fromValue: '15deg'}], position: 1500, duration: 500 },
            { id: "eid88", tween: [ "transform", "${_pro2}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid89", tween: [ "transform", "${_pro2}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500 },
            { id: "eid90", tween: [ "transform", "${_pro2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1000, duration: 500 },
            { id: "eid91", tween: [ "transform", "${_pro2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500 },
            { id: "eid96", tween: [ "style", "${_pro2}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_pro2}", "top", '14px', { fromValue: '14px'}], position: 0, duration: 0 }         ]
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
      id: 'manage_accounts',
      type: 'image',
      rect: ['0px','0px','265px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/manage%20accounts.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_manage_accounts}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
},
"pro": {
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
      id: 'PRO',
      type: 'image',
      rect: ['0px','2px','70px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/PRO.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PRO}": [
            ["style", "height", '48px'],
            ["style", "top", '2px'],
            ["style", "left", '0px'],
            ["style", "width", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '70px']
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
})(jQuery, AdobeEdge, "EDGE-4515205");
