
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"Logout{ width: 90%; text-align: center; margin: 40px auto; }\n.",[1],"UserName{ font-size: 22px; margin-bottom: 50px; display: block; }\n",],undefined,{path:"./pages/my/my.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/my.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      