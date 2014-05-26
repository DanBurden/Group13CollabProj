/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'home'
   (function(symbolName) {   
   
   })("home");
   //Edge symbol end:'home'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'messages'
   (function(symbolName) {   
   
   })("messages");
   //Edge symbol end:'messages'

   //=========================================================
   
   //Edge symbol: 'manage'
   (function(symbolName) {   
   
   })("manage");
   //Edge symbol end:'manage'

   //=========================================================
   
   //Edge symbol: 'pro'
   (function(symbolName) {   
   
   })("pro");
   //Edge symbol end:'pro'

})(jQuery, AdobeEdge, "EDGE-4515205");