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
            id:'Symbol_12',
            type:'rect',
            rect:['90.9%','70.9%','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Symbol_12',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_12}": [
            ["style", "top", '66.09%'],
            ["style", "opacity", '0'],
            ["style", "left", '89.33%'],
            ["transform", "rotateZ", '-72deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "style", "${_Symbol_12}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Symbol_12}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Symbol_12}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 50 },
            { id: "eid8", tween: [ "style", "${_Symbol_12}", "left", '99.29%', { fromValue: '89.33%'}], position: 0, duration: 3000 },
            { id: "eid9", tween: [ "style", "${_Symbol_12}", "left", '93.4%', { fromValue: '99.27%'}], position: 3000, duration: 1000 },
            { id: "eid10", tween: [ "style", "${_Symbol_12}", "left", '93%', { fromValue: '93.4%'}], position: 4000, duration: 1000 },
            { id: "eid11", tween: [ "style", "${_Symbol_12}", "left", '99%', { fromValue: '93%'}], position: 5000, duration: 500 },
            { id: "eid12", tween: [ "style", "${_Symbol_12}", "left", '93%', { fromValue: '99%'}], position: 7000, duration: 500 },
            { id: "eid13", tween: [ "style", "${_Symbol_12}", "left", '99%', { fromValue: '93%'}], position: 8000, duration: 500 },
            { id: "eid14", tween: [ "style", "${_Symbol_12}", "left", '86.46%', { fromValue: '99%'}], position: 8500, duration: 500 },
            { id: "eid1", tween: [ "style", "${_Symbol_12}", "top", '35.48%', { fromValue: '66.09%'}], position: 0, duration: 3000 },
            { id: "eid2", tween: [ "style", "${_Symbol_12}", "top", '36.65%', { fromValue: '35.52%'}], position: 3000, duration: 1000 },
            { id: "eid3", tween: [ "style", "${_Symbol_12}", "top", '37%', { fromValue: '36.65%'}], position: 4000, duration: 1000 },
            { id: "eid4", tween: [ "style", "${_Symbol_12}", "top", '87.18%', { fromValue: '37%'}], position: 5000, duration: 2000 },
            { id: "eid15", tween: [ "transform", "${_Symbol_12}", "rotateZ", '-72deg', { fromValue: '-72deg'}], position: 3000, duration: 0 }         ]
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
      id: 'sexdoll2',
      type: 'image',
      rect: ['0px','0px','150px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sexdoll22.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sexdoll2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '150px']
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
})(jQuery, AdobeEdge, "EDGE-15023519");
