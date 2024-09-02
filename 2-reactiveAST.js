// trickaweek "WeeksOnStreak"
var $WeeksOnStreak = "weeks-on-streak";
let $,
    _;
 
/*/////
  this version of script is informed with
  the flat AST array output requirement
  
  its one misconception is that DOM tree nodes
  can be identified with query selector syntax

  thus hereby is missing an intermediate result,
                    the entries-type array tree 
 */////

class reactiveElement extends Element {
  //  this constructor is the render method
  constructor (container, props) {
    //// AST is the final flat array
    this.AST = (container.AST)
             ?  container.AST
             :  container.getPropPaths();
    //// it's attached to container, okay?
    
    //// optimization toward changing props
    if ("props" in container) {
    var  propsOmit = [];
    Object.entries(container.props)
          .forEach(([key, val]) =>
          (typeof val === "boolean"
        || typeof val === "string"
        || typeof val === "number")
           &&     val === props[key]
           &&             propsOmit.push(key));
          ////
           if (!propsOmit.length)
                propsOmit = null;
    }
    
    ///  getting ahead to start looping AST
    var  node, onionKey, propVar;
    for (node of this.AST) {
    tag=(child.constructor.name);
     id=(child.getAttribute("id"));
    cls=(child.classList[0]);
     if (node.constructor.name === "Array") {}
    }
  }
}

 ///////////////////////////////////////////////
// placeholder for a class extending super class
class WeeksOnStreak extends reactiveElement {
  constructor (container, props) {
         super(container, props);
  }
}

WeeksOnStreak($ = querySelector(
                 $WeeksOnStreak));

// script version implies querySelector idents 
function onion (strings, ...args) {
  var q="", tag, id, cls, attr, v, _q="";
  
  if  (1 <= args.length  )  {
  if  (args[args.length-1] instanceof Object)
  for ([attr,v] in Object.entries(args.pop())) {
   if (v === true) _q += '['+attr+']';
             else  _q += '['+attr+'="'+v+'"]';
  }
  else 
  if  (args[args.length-1] instanceof Array)
  for (attr in args.pop().values()) {
   if (attr instanceof String
   &&  attr.length) _q += '['+attr+']';
  }}
  
  if  (strings[0]) {
  q += strings[0]; [id, cls] = args;
  }    else   [tag, id, cls] = args;
  
  if (tag instanceof String
  && (tag = tag.trim()).length) q += tag;
  
  if (id  instanceof String
  && (id = id.trim()).length)   q += '#'+id;
  
  if (cls instanceof String
  && (cls = cls.trim()).length) q += '.'+cls;
  
  return (q + _q);
}

 //////////////////////////////////
// query container for prop paths
Element.prototype.getPropPaths = function () {
  var reactiveAST=[], tplPath;
  
 const rxAttr = new RegExp(
 + "(?:" +  "(\\s*\\/?\\>)"
 +  "|"  +  "\\s"
         +  "([^\\s>])"  + "="
 + "(?:" +  "({[^{}]+})" + /// js/expr support?
 +  "|"  +  `(?<b>["'])` + "(.*\\$?{.+}.*)"
                         + "\\k<b>"
 +  "))",
    'g'
 );
 const rxProp
   =  /\$?(\{.+)\})/g;
 const rxTextSpace
   =  /^\s*[\s]$/m;
   
  ///////////////////////////////////////////
 ////  reactive template is exported to AST
  if  (this.tagName === "TEMPLATE")
      {
       reactiveAST.push([this, []]);
       tplPath = new Array();
       loop( child.content );
       tplPath = undefined;
      }
      else loop(this);
      
 function loop (element) {
    var  child, tag, id, cls, xml, bfr;
    var  match, hasProp, prev_i=0, prev=null;
    var  text,  prop,
     $;
    /// ... $ => <reactive-comp name>
    
    for (child of element.childNodes) {
    tag=(child.tagName);
     id=(child.getAttribute("id"));
    cls=(child.classList[0]);
    xml=(child.outerHTML);
         hasProp = false;
    
     //////////////////////////////////////////
    //// reactive template is exported to AST
     if (tag === "TEMPLATE")
        {
         reactiveAST.push([child, []]);
         tplPath = new Array();
         loop( child.content );
         tplPath = undefined;
         continue;
        }
      
     //////////////////////////////////////////
    //// text node possibly contains tpl tags
     if (tag === "TEXT")
        {
     if (child.nodeValue.match(rxTextSpace))
         continue;
         
         prev = child;
  while (match = rxProp.exec(
         child[ `nodeValue` ])) {
         hasProp = true;
        
     ////  string in between variables
      if  (prev_i === match.index)
           text=(null);
      else text=(document.createTextNode(
                 child.nodeValue.substring(
                         prev_i, match.index)));
          
     ////  reactive: prop variable || component
      if  (match[1][0]
      ==   match[1][0].toUpperCase())
           prop=(document.createElement(
                         "reactive-comp"));
           else
           prop=(document.createElement(
                         "reactive-prop"));
          
           prop.setAttribute("name", match[1]);
            
       // tplPath is array of querySelector type
      //  ... to use when cloning templates
      if (!tplPath)
           reactiveAST.push(prop);
      else reactiveAST.push(
      [ ...tplPath,
           
           onion`${prop.tagName}${
                 {"name": match[1]}
           }`,
            
           prop,
      ]);
      
      if  (text)
           prev.after(text, prop);
      else prev.after(prop);
      
           prev   =   prop;
          (prev_i = rxProp.lastIndex);
 /// end of while (match=rxProp.exec())
  }

 if  (hasProp
 &&   child.nodeValue.length-1 != prev_i)
text=(document.createTextNode(
      child.nodeValue.substring( prev_i))),
      prev.after(text);
                 
      continue;
 ///  end of text (tag === "TEXT")
  }

//// loop all other elements for tpl tags
 if (child.children.length)
    {
 if (tplPath)
     tplPath.push(onion`${tag}${id}${cls}`),
     loop( child ),
     tplPath.pop();
     
     else
     loop( child );
    }
    
 /////  loop non-syntax element for rxAttr
 while (match = rxAttr.exec(xml)) {
    if (                   (match[1])) break
      hasProp = true;
       prev   = null;
       prev_i = 0;
 while (                   (match[3]
    && ( bfr  = rxProp.exec(match[3])))
    || ( bfr  = rxProp.exec(match[5]))) {
       
  ////  string in between variables
  text=(bfr.index !== prev_i)
      ? bfr.substring(prev_i, bfr.index)
      : (null);

  ////  prop variables in attribute (& text)
   if  (reactiveAST[reactiveAST.length-1]
       .attr   !=   match[2])
  ////  this path above is shaky at this point
  ////  note that .setAttribute stays when cloned
       {
        prop=(document.createElement(
                      "reactive-attr"));
        
        prop[`name`] =  match[2];
        prop[`prop`]
     = (text)
     ? [text, match[3]  ||  match[5]]
     : [      match[3]  ||  match[5]];

   if (!tplPath)
        reactiveAST.push(prop);
   else reactiveAST.push(
   [ ...tplPath,
       
         onion`${prop.tagName}${
              {"name": match[2]}
        }`,
        
        prop,
        //// do we need to assign prop to AST?
  ]);
  }
  else prop[`prop`]
    =  prop[`prop`].concat(
      (text)
    ? [text, match[3]  ||  match[5]]
    : [      match[3]  ||  match[5]]);
      
       prev_i = rxProp.lastIndex;
  }}}}
  //// end of function loop
 }

 // nested in a utility function for trie path
 function trie (astNode, path, obj) {
   var  key,
   bfr;
     
   for (key of path) {
    if (
      !(bfr = astNode[astNode.length-1]))
        astNode.push([key, []]),
        /////// thinking up it's structure

        astNode = astNode[1];
        /////// thinking where to place it
   }

    ///
   /* what else is there,
    need to keep it clean */// running rabbit
 }

   
  ////////////////////////////////////////
 // loose chapter to structure flat AST
 function flatASTNode () {
   var  tag,
    i,  node, array = reactiveAST.entries(),
   bfr, prev, next,   match, a_remainder,
        attr, prop,   onion, b_remainder,
        curPath=[],   AST;
  
   while (!(node  = next)
     &&  [i,node] = array.next().value) {
     tag=(node.constructor.name);
      if (tag === "HTMLTemplateElement")
         {
     AST=[node, []];
    prev=(node);
      do {
    next=(array.next().value);
   match=(twoPaths(prev.onion,
                   next.onion));
      if (match[0]
      &&  next.constructor.name === "Array")
        
       } while (prev=(next),
          next=(array.next().value))
     
   }}
   return reactiveAST;
   
   function twoPaths (a, b) {
     var i, tplPath, bfr, array=b.values(),
           match=[], a_remainder=[],
                     b_remainder=[];
     
     for (tplPath of a.values()) {
      if (bfr  =  array.next().value)  {
      if (bfr === tplPath) {
          match.push(bfr);
          continue;
      }   else
          b_remainder.push(bfr);
      }   a_remainder.push(tplPath)  }
      
     if  (bfr)
     for (bfr of array) {
          b_remainder.push(bfr)
     }
     
     return [match.length && match,
       a_remainder.length && a_remainder,
       b_remainder.length && b_remainder];
   }
   
   function mergePaths () {
    ////// need to write a new version to see
   }
}

// clone templates per prop from abstract tree
// bfr=template.children[0].cloneNode(true)
// ... we're using cached getPropPaths(bfr)
function updateComponentProps (AST, props) {
     var elem, node, propNamd
     var onionKey;
     
              recurse(( AST ));
     function recurse (nodes) {
          for (node of (AST)) {
     onionKey=(node.getAttribute("onion-key"));
       
       switch (node.constructor.name) {
        case  "HTMLTemplateElement":
        case  "Text":
              return;
       
        for (propName in props) {
       ///// is this the way??

       ///// the prop object shape is unclear
       ///// newer version is to fix this fact
        }
       }

       while (
       (elem=(elem.nextElementSibling))
             .getAttribute("onion-key")
                   ===      onionKey  ) {
        /*/////
            final AST is decided as inline array

            hereby comparing onion keys
                    for same container
         */

         if (purgingElement) /// meet dummy text
             elem.remove();
       }
     }
     }
 }
