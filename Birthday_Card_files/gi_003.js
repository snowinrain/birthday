function detectWidth(){return window.screen.width||window.innerWidth||window.document.documentElement.clientWidth||Math.min(window.innerWidth,window.document.documentElement.clientWidth)||window.innerWidth||window.document.documentElement.clientWidth||window.document.getElementsByTagName("body")[0].clientWidth}function isMobileScreenSize(){return detectWidth()<=767}function pushGoogleTag(n){typeof googletag!="undefined"&&googletag.cmd.push(function(){googletag.display(n)})}function doGoogleTagDisplay(n){if(typeof adUnits!="undefined")for(var t=adUnits.length-1;t>=0;t--)if(adUnits[t].code==n)return pushGoogleTag(n),!0;return!1}function initAdServer(){pbjs.initAdserverSet||(function(){var n=document.createElement("script"),i,t;n.async=!0;n.type="text/javascript";i="https:"===document.location.protocol;n.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}(),pbjs.initAdserverSet=!0)}function pushAdUnits(){var n=window.location.pathname,r=n.search(/invitations|cards|invitaciones|tarjetas|announcements|anuncios/i)===1,t=n.search(/preview|previsualizar/i)===1,s=n.search(/design/i)===1,u=n==="/"||n.search(/es/)===1,f=n.search(/sobres|envelopes\/[1-9]*$/i)===1,i=n.search(/sobres|envelopes\/[^0-9]+$/i)===1,e=n.search(/search/i)===1,o=n.search(/members\/favorites/i)===1;detectWidth()>=1360&&(i&&adUnits.push({network:dfpNetwork,adunit:"Envelope_Middle_New_Vertical",size:[[120,600],[160,600]],code:"div-gpt-ad-Envelope_Middle_New_Vertical"}),t&&adUnits.push({network:dfpNetwork,adunit:"Cards_Left_Card_Responsive",size:[[120,600],[160,600]],code:"div-gpt-ad-Cards_Left_Card_Responsive"}));isMobileScreenSize()?(r&&(adUnits.push({network:dfpNetwork,adunit:"Categories_Mobile_300x250",size:[[300,250]],code:"div-gpt-ad-Categories_Mobile_300x250"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid_Mobile",size:[[300,250]],code:"div-gpt-ad-Categories_Inside_Grid_Mobile"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid_Mobile_2",size:[[300,250]],code:"div-gpt-ad-Categories_Inside_Grid_Mobile_2"})),i&&(adUnits.push({network:dfpNetwork,adunit:"Envelope_Bottom_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Envelope_Bottom_Mobile"}),adUnits.push({network:dfpNetwork,adunit:"Envelop_Top_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Envelop_Top_Mobile"})),f&&(adUnits.push({network:dfpNetwork,adunit:"Envelope_Below_Heading_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Envelope_Below_Heading_Mobile"}),adUnits.push({network:dfpNetwork,adunit:"Envelope_Middle_New_Horizontal_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Envelope_Middle_New_Horizontal_Mobile"}),adUnits.push({network:dfpNetwork,adunit:"Envelope_Page_Bottom_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Envelope_Page_Bottom_Mobile"})),u&&adUnits.push({network:dfpNetwork,adunit:"Homepage_Mobile_300x250",size:[[300,250]],code:"div-gpt-ad-Homepage_Mobile_300x250"}),t&&adUnits.push({network:dfpNetwork,adunit:"Preview_Mobile_300x250",size:[[300,250]],code:"div-gpt-ad-Preview_Mobile_300x250"}),e&&(adUnits.push({network:dfpNetwork,adunit:"Search_Results_Top_Mobile",size:[[320,100],[320,50]],code:"div-gpt-ad-Search_Results_Top_Mobile"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid_Mobile",size:[[300,250]],code:"div-gpt-ad-Categories_Inside_Grid_Mobile"})),o&&adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid_Mobile",size:[[300,250]],code:"div-gpt-ad-Categories_Inside_Grid_Mobile"})):(r&&(adUnits.push({network:dfpNetwork,adunit:"Categories_Below_Filter",size:[[120,600],[160,600]],code:"div-gpt-ad-Categories_Below_Filter"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Below_Grid",size:mapSizeCategoriesBelowGrid,code:"div-gpt-ad-Categories_Below_Grid"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Below_Header",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Categories_Below_Header"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid",size:mapSizeMRU,code:"div-gpt-ad-Categories_Inside_Grid"})),s&&adUnits.push({network:dfpNetwork,adunit:"Designer_Top",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Designer_Top"}),i&&(adUnits.push({network:dfpNetwork,adunit:"Envelope_Bottom",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Envelope_Bottom"}),adUnits.push({network:dfpNetwork,adunit:"Envelope_Top_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Envelope_Top_Desktop"})),f&&(adUnits.push({network:dfpNetwork,adunit:"Envelope_Below_Heading_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Envelope_Below_Heading_Desktop"}),adUnits.push({network:dfpNetwork,adunit:"Envelope_Middle_New_Horizontal",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Envelope_Middle_New_Horizontal"}),adUnits.push({network:dfpNetwork,adunit:"Envelope_Page_Bottom_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Envelope_Page_Bottom_Desktop"})),u&&(adUnits.push({network:dfpNetwork,adunit:"Homepage_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Homepage_Desktop"}),adUnits.push({network:dfpNetwork,adunit:"Homepage_Bottom_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Homepage_Bottom_Desktop"})),t&&adUnits.push({network:dfpNetwork,adunit:"Preview_Top",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Preview_Top"}),e&&(adUnits.push({network:dfpNetwork,adunit:"Search_Results_Top_Desktop",size:mapSizeLRdesktopOnly,code:"div-gpt-ad-Search_Results_Top_Desktop"}),adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid",size:mapSizeMRU,code:"div-gpt-ad-Categories_Inside_Grid"})),o&&adUnits.push({network:dfpNetwork,adunit:"Categories_Inside_Grid",size:mapSizeMRU,code:"div-gpt-ad-Categories_Inside_Grid"}))}var adsStart=(new Date).getTime(),userSegmentsCookie=!1,userSegmentsCookieJson,pbjs,adUnits,dfpNetwork;try{userSegmentsCookieJson=function(n){var i="; "+document.cookie,t=i.split("; "+n+"=");if(t.length===2)return t.pop().split(";").shift()}("userSegments");userSegmentsCookie=JSON.parse(userSegmentsCookieJson)}catch(ex){console.log(ex)}var TIMEOUT=2e3,EXCHANGE_RATE=3.6,googletag=googletag||{};googletag.cmd=googletag.cmd||[];pbjs=pbjs||{};pbjs.que=pbjs.que||[];adUnits=adUnits||[];pbjs.timeout=setTimeout(initAdServer,TIMEOUT);pbjs.timeStart=adsStart;var mapSizeMRU=[[300,250],[336,280]],mapSizeLR=[[728,90]],mapSizeLRdesktopOnly=[[728,90]],mapSizeLRandMRUdesktopOnly=[[728,90],[300,250],[336,280]],mapSizeCategoriesBelowGrid=[[728,90]],mapSizeECardsBottom=[[728,90]];detectWidth()>=970&&(mapSizeLR=[[728,90],[970,90]],mapSizeLRdesktopOnly=[[728,90],[970,90]],mapSizeLRandMRUdesktopOnly=[[728,90],[970,90],[970,250],[300,250],[336,280]],mapSizeCategoriesBelowGrid=[[728,90],[970,90]],mapSizeECardsBottom=[[728,90],[970,90],[970,250]]);isMobileScreenSize()&&(mapSizeMRU=[[300,250]],mapSizeLR=[[320,50],[320,100]],mapSizeECardsBottom=[[320,50],[300,250]]);dfpNetwork="71633605";pushAdUnits();userSegmentsCookie&&userSegmentsCookie.mobile_ad&&googletag.cmd.push(function(){googletag.pubads().setTargeting("layoutTest",userSegmentsCookie.mobile_ad.toString())});googletag.cmd.push(function(){if(adUnits)for(var n=0,t=adUnits.length;n<t;n++)googletag.defineSlot("/"+adUnits[n].network+"/"+adUnits[n].adunit,adUnits[n].size,adUnits[n].code).addService(googletag.pubads())});googletag.cmd.push(function(){pbjs.que.push(function(){pbjs.setTargetingForGPTAsync()});googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs();googletag.enableServices()})