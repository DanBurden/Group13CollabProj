
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_manage}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'home'
(function(symbolName){})("home");
//Edge symbol end:'home'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'messages'
(function(symbolName){})("messages");
//Edge symbol end:'messages'

//=========================================================

//Edge symbol: 'manage'
(function(symbolName){})("manage");
//Edge symbol end:'manage'
})(jQuery,AdobeEdge,"EDGE-4515201");