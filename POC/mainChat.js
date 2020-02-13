﻿var snapinChatGlobalIssueType, snapinChatGlobalServiceTag, snapinChatGlobalProductName = null, snapInCurrentPage = null, trackevent = true;
var coveoHeader = "", isCoveoSearchEnabled = false, isPCFCall = false;

(function () {
    var initESW;
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);

    if (!document.getElementById('snapinStyle')) {
        var css = '.embeddedServiceSidebarHeader,.embeddedServiceSidebarMinimizedDefaultUI{background-color:#00447C!important;border:1px!important}.embeddedServiceSidebarFormField .uiInput .uiLabel-left{padding-top:0!important;margin-top:11px;color:#444!important;font-weight:300!important}.embeddedServiceSidebarForm.formContent{background:#f1f1f1!important}.embeddedServiceHelpButton .helpButton .uiButton{background-color:#005290!important;font-family:"Salesforce Sans",sans-serif}.embeddedServiceHelpButton .helpButton .uiButton:focus{outline:#005290 solid 1px}.embeddedServiceSidebarForm .uiButton,.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important}.embeddedServiceSidebarFormField .slds-style-inputtext{border-radius:0!important;border:none!important}.embeddedServiceSidebarForm.buttonWrapper{background:linear-gradient(to bottom,rgba(247,247,247,0) 0,rgba(247,247,247,1) calc(100% - 77px),rgba(247,247,247,1) 100%)}.embeddedServiceSidebarButton.uiButton--inverse{background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.embeddedServiceSidebarButton.uiButton--inverse:not(:disabled):focus{box-shadow:0 0 3px 0 #ddd!important}.embeddedServiceSidebarDialogState .dialogButton{border-radius:0!important}.embeddedServiceSidebarDialogState .dialogButton:not(:disabled):focus{text-decoration:none!important}.embeddedServiceSidebarFormField .slds-style-inputtext,.embeddedServiceSidebarFormField .slds-style-select{color:#444!important}.embeddedServiceSidebarForm .fieldList{margin:12px 12px 0 0!important}.embeddedServiceLiveAgentStateChatHeaderOption .optionName{color:#fff!important;text-decoration:none!important}.embeddedServiceSidebarHeader .headerText{margin-bottom:0!important}.embeddedServiceSidebarMinimizedDefaultUI .minimizedImage{display:none!important}.embeddedServiceLiveAgentStateChatHeader.reconnecting.alert{background-color:#cb2b19!important;padding-top:46px!important}.embeddedServiceSidebarForm.buttonWrapper{background-color:#f1f1f1!important}.cusPreChat-modalContainer,.cusPreChat-shortHeader{font-weight:400;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus,.cusPreChat-headerItem:focus,.cusPreChat-headerItem:hover{outline:0}.cusPreChat-modalContainer{box-sizing:border-box;line-height:1.5;color:#212529;display:block;position:fixed;z-index:1001;font-family:"Salesforce Sans",sans-serif;top:0;font-size:16px;pointer-events:all;backface-visibility:hidden;text-align:left}.cusPreChat-modalContainer li,.cusPreChat-modalContainer ul{display:block;list-style:none}.cusPreChat-dockableContainer{width:320px;max-height:720px;border-radius:8px 8px 0 0;position:fixed;left:auto;bottom:0;right:20px;margin:0;height:90%;box-shadow:2px 2px 20px rgba(0,0,0,.2);z-index:15;text-align:center;overflow:hidden;max-width:40em;pointer-events:all}.cusPreChat-embeddedServiceSidebarHeader{position:absolute;top:0;width:100%;border-radius:8px 8px 0 0;background-color:#00447C;border:1px;text-align:center;pointer-events:all}.cusPreChat-shortHeader{color:#fff;border-radius:8px 8px 0 0;line-height:3;text-align:center;font-size:.875em;height:44px;clear:both;overflow:hidden;z-index:3;position:relative;transform:translate3d(0,0,0)}.cusPreChat-shortHeaderContent{position:relative;display:flex;height:100%}.cusPreChat-headerItem{color:#fff;font-size:1em;background:0 0;border:none}.cusPreChat-headerItem:focus:before,.cusPreChat-headerItem:hover:before{content:" ";position:absolute;background-color:#fff;opacity:.2;border-radius:4px;box-sizing:border-box;pointer-events:none;top:20%}.cusPreChat-closeButton,.cusPreChat-minimizeButton{transition:color .7s ease;padding:14px;line-height:0}.cusPreChat-minimizeButton:focus:before,.cusPreChat-minimizeButton:hover:before{left:6px;width:30px;height:60%}.cusPreChat-closeButton:focus:before,.cusPreChat-closeButton:hover:before{right:6px;width:30px;height:60%}.cusPreChat-assistiveText{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.cusPreChat-embeddedServiceIcon{display:flex}.cusPreChat-embeddedServiceIcon svg{display:inline-block;box-sizing:border-box;width:1em;height:1em;fill:#fff}.cusPreChat-headerText{display:flex;justify-content:center;align-items:center;flex-grow:1;align-self:stretch;width:calc(100% - 96px);color:#fff;text-decoration:none;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:1em}.cusPreChat-sidebarBody{position:absolute;width:100%;height:100%;top:44px;z-index:0;background-color:#f1f1f1;transform:translate3d(0,0,0);-webkit-overflow-scrolling:touch}.cusPreChat-sidebarLoadingIndicator{position:relative;height:100%;background-color:#fff}.cusPreChat-activeFeature{width:100%;height: 100%}.cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI{overflow:hidden;height:100%;position:absolute}.cusPreChat-formContent{width:320px;height:calc(100% - 98px);overflow-y:auto;position:relative;background-color:#f1f1f1;margin-bottom:81px;border-radius:0 0 8px 8px}.cusPreChat-fieldList{margin:5px 12px 0 0;padding:0}.cusPreChat-embeddedServiceSidebarFormField{display:block;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:40px;list-style:none;padding:0;box-sizing:border-box;margin-left:12px}.cusPreChat-embeddedServiceSidebarFormField.cusPreChat-inputSplitName{width:calc(50% - 12px);display:inline-block;vertical-align:top;margin-left:9px}.cusPreChat-split-field-container{margin-bottom:6px}.cusPreChat-uiInput{text-align:left}.cusPreChat-uiInput .cusPreChat-uiLabel-left{padding:0!important;color:#444!important;font-weight:300!important;position:relative;font-size:.75em;line-height:1.5;margin:11px .75em 2px 1px}.cusPreChat-uiInput .cusPreChat-required{position:absolute;color:#c23934;left:-6px;top:0}.cusPreChat-slds-style-inputtext{display:inline-block;line-height:30px;box-sizing:border-box;box-shadow:none;background-color:#fff;width:100%;height:44px !important;padding:0 12px !important;font-size:.875em;border:none !important;}.cusPreChat-slds-style-inputtext:focus{outline:0;box-shadow:0 0 2px 0 #007db8}.cusPreChat-buttonWrapper{text-align:center;padding:0px 24px 24px;margin:0;width:320px;position:fixed;box-sizing:border-box;bottom:44px; box-shadow: 0px -10px 5px rgba(241, 241, 241,0.7); background: #f1f1f1}.cusPreChat-embeddedServiceSidebarButton{background:#007db8;font-family:"Roboto Regular",sans-serif;border-radius:0!important;position:relative;border:none;text-shadow:none;box-shadow:none;transition:background .4s ease;color:#fff;font-size:1em;font-weight:400;width:100%;margin:0;height:44px;cursor:pointer}.cusPreChat-embeddedServiceSidebarButton:not(:disabled):focus,.cusPreChat-embeddedServiceSidebarButton:not(:disabled):hover{background:#004b6e}.cusPreChat-has-error{margin:0 0 0px;padding:0}.cusPreChat-has-error .cusPreChat-form-element__help{font-size:.75em;color:#c23934}.cusPreChat-embeddedServiceHelpButton{display:block;position:fixed;top:0;left:0;background:0 0;box-shadow:none;overflow:visible;z-index:1000;font-family:sans-serif}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:12px;right:12px;height:46px;-webkit-font-smoothing:subpixel-antialiased}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton{box-sizing:border-box;margin:0;padding:0 12px;height:46px;box-shadow:0 0 12px 0 rgba(0,0,0,.5);border-radius:23px;line-height:1;background:#007db8;font-size:.875em;color:#fff;font-weight:400;text-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-family:"Roboto Regular",sans-serif;width:168px;cursor:pointer;position:relative;border:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-helpButtonEnabled:hover::before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:23px;background-color:#000;opacity:.2;pointer-events:none}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton .cusPreChat-label{color:#fff}.cusPreChat-embeddedServiceHelpButton .cusPreChat-uiButton .cusPreChat-helpButtonLabel{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%;line-height:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media only screen and (min-width:48em){.cusPreChat-embeddedServiceHelpButton{background-color:transparent}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton{position:fixed;bottom:0}.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:focus::before,.cusPreChat-embeddedServiceHelpButton .cusPreChat-helpButton .cusPreChat-uiButton:hover::before{border-radius:8px 8px 0 0}}.cusPreChat-sidebarLoadingIndicator{align-self:stretch;max-height:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding:0 24px}.cusPreChat-loadingBallContainer{display:inline-block}.cusPreChat-loadingBallContainer.cusPreChat-animated .cusPreChat-loadingBall{animation:cusPreChat-ballanimate 2.25s infinite ease-in-out;display:inline-block;width:1em;height:1em;border-radius:2em;font-size:8px;text-align:center;background:#0074bd;margin:3px}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-second{animation-name:cusPreChat-ballanimate-2}.cusPreChat-embeddedServiceLoadingBalls.cusPreChat-animated .cusPreChat-third{animation-name:cusPreChat-ballanimate-3}@keyframes cusPreChat-ballanimate{0%,32%{transform:scale(1)}16%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-2{32%,64%{transform:scale(1)}48%{transform:scale(1.5)}}@keyframes cusPreChat-ballanimate-3{64%,96%{transform:scale(1)}80%{transform:scale(1.5)}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.cusPreChat-buttonWrapper{bottom: 3px;}}body.embeddedServicePreventScrolling {overflow: auto !important;position: inherit !important;}.dockableContainer .endChatContainer .endChatButton.postChatButton{background:#007db8!important;border:none!important}.dockableContainer .endChatContainer .endChatButton.postChatButton span{color:#fff!important}.dockableContainer .endChatContainer .endChatButton.postChatButton:focus,.dockableContainer .endChatContainer .endChatButton.postChatButton:hover{background:#004b6e!important;text-decoration:none}.dockableContainer .endChatContainer .endChatButton.closeChatButton{color:#007db8;background:#f7f7f7!important;border-radius:0!important;border:1px solid #ccc!important}.dockableContainer .endChatContainer .endChatButton.closeChatButton span{color:#007db8}.dockableContainer .endChatContainer .endChatButton.closeChatButton span:hover{color:#007db8;text-decoration:underline}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'snapinStyle';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
    //FY21-0202 DEFECT 7923829 [START]
    /*if (!document.getElementById('snapinAdditionalScriptSrc')) {
        var sfdc_script = document.createElement('script');
        sfdc_script.setAttribute('src','https://service.force.com/embeddedservice/5.0/esw.min.js');
        sfdc_script.id = 'snapinAdditionalScriptSrc';
        sfdc_script.type = 'text/javascript';
        document.head.appendChild(sfdc_script);   
    }*/
    //FY21-0202 DEFECT 7923829 [END]
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();

function hideDomObject(eleSelector, findingEle) {
    try {
        document.querySelector(eleSelector).style.display = 'none';
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function hideOtherDomObject(eleSelector, findingEle, otherDomEle) {
    try {
        document.querySelector(otherDomEle).style.display = 'none';
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function initSnapIn(snapInObject) {
    let snapinAlreadyInitiated = document.getElementById("esw_storage_iframe");
    if (!snapinAlreadyInitiated) {
        if (window.embedded_svc) {
            initOriginalESW(snapInObject.serviceForceURL, snapInObject);

        } else {
            var s = document.createElement('script');
            s.setAttribute('src', snapInObject.snapInJs);
            s.onload = function () {
                initOriginalESW(null, snapInObject);
            };
            document.body.appendChild(s);
        }
    }
}

function triggerSnapin(snapInObject, preChatlableObject) {
    try {
        if (!(sessionStorage.getItem("isChatBotActive") != null && sessionStorage.getItem("isChatBotActive") == "true")) {//Check if chat bot is Active
            if (typeof (isSnapinInitiated) == "function" && isSnapinInitiated()) {
                let orderSnapinObject = sendGlobalSnapinCareObjToJson();
                initiateChatCARE(orderSnapinObject);//orderRetain Chat
            } else if (snapInObject === undefined && history.length > 1 && snapinChatGlobalObjNotEmpty()) {
                snapInObject = sendGlobalSnapinObjToJson();
                if ("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) {
                    eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
                    pageObserverForProp20("body", preChatlableObject);
                    initSnapIn(snapInObject);
                }
            } else if (snapInObject) {
                if (!snapInObject.snapinButtonClicked && !snapinChatGlobalObjNotEmpty()) {//FY20-1102: DEFECT 7534816  Retain chat is not working properly
                    eleExist('.embeddedServiceHelpButton', hideDomObject);
                    //eleExist('.embeddedServiceSidebar', hideDomObject);
                    eleExistWithVariable('.modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI', hideOtherDomObject, '.embeddedServiceSidebar');
                    saveGlobalSnapinObjToSession(snapInObject);
                    //snapinChatInitiatedState(true); //Fix for defect [7030965]
                    //eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick); //DEFECT 7030965 for Bishav comment this
                    if (document.getElementById('cusPreChatSnapinDom'))
                        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
                    initSnapIn(snapInObject);
                } else if (customChatNotCreated()) {
                    snapInObject = sendGlobalSnapinObjToJson();
                    snapInObject.snapinButtonClicked = true;
                    saveGlobalSnapinObjToSession(snapInObject);
                    appendCustPreChatSnapinDom(snapInObject, preChatlableObject)
                }
            }
        }

    } catch (e) {
        console.log("Error in: " + e);
    }
}
function customChatNotCreated() {
    let cusPreChatHelpBtn = document.getElementById('cusPreChat-embeddedServiceHelpButton');
    let snapinExists = document.querySelector(".embeddedServiceSidebar .dockableContainer");
    let chatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
    if (chatStarted)
        return false;
    else if (cusPreChatHelpBtn && window.getComputedStyle(cusPreChatHelpBtn).display != "none" && !snapinExists) {
        prechatSettingForEmc();//STORY 7193456: FY201101
        document.getElementById("cusPreChat-helpButtonEnabled").click();
        return false;
    } else
        return true;
}
function appendCustPreChatSnapinDom(snapInObject, preChatlableObject) {
    if (!document.getElementById('cusPreChatSnapinDom')) {
        //STORY 7193456: FY201101[START]
        if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
            preChatlableObject.serviceTag = preChatlableObject.serialNumber;
        }
        //STORY 7193456: FY201101[END]
        let domEle = '<div id="cusPreChatSnapinDom" class="cusPreChat-modalContainer"> <div class="cusPreChat-dockableContainer"> <div class="cusPreChat-embeddedServiceSidebarHeader"> <div class="cusPreChat-shortHeader"> <div class="cusPreChat-shortHeaderContent"> <button id="cusPreChat-minimize-btn" class="cusPreChat-minimizeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Minimize chat</span> <span class="cusPreChat-minimize cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="contract_alt" viewBox="0 0 100 100"> <path d="M56.923 45.962h29.615c1.924 0 2.5-2.116.962-3.654l-9.423-9.616 17.308-17.5c.96-.96.96-2.692 0-3.654L88.27 4.423c-.962-.77-2.5-.77-3.655.192L67.308 21.923 57.5 12.5c-1.538-1.538-3.654-.962-3.654.962v29.615c0 1.346 1.73 2.885 3.077 2.885zm-13.846 7.884H13.462c-1.924 0-2.5 2.116-.962 3.654l9.423 9.615-17.308 17.5c-.96.962-.96 2.693 0 3.654l7.116 7.115c.962.96 2.5.96 3.655 0l17.5-17.5 9.807 9.423c1.346 1.73 3.462 1.154 3.462-.77V57.115c0-1.346-1.73-3.27-3.077-3.27z"> </path> </svg> </span> </button> <h2 class="cusPreChat-headerText"> <div class="cusPreChat-headerTextContent"> <span id="cusPreChat-headerTextLabel">' + preChatlableObject.chatHeader + '</span> <span id="cusPreChat-headerSubtext"> </span></div></h2> <button id="cusPreChat-close-btn" class="cusPreChat-closeButton cusPreChat-headerItem"> <span class="cusPreChat-assistiveText">Close chat</span> <span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 100 100"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"> </path> </svg> </span> </button> </div></div></div><div class="cusPreChat-sidebarBody"> <div id="cusPreChat-sidebarLoadingIndicator" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"> <div class="cusPreChat-loadingBallContainer cusPreChat-animated cusPreChat-embeddedServiceLoadingBalls"> <span class="cusPreChat-loadingBall cusPreChat-first"> </span> <span class="cusPreChat-loadingBall cusPreChat-second"> </span> <span class="cusPreChat-loadingBall cusPreChat-third"> </span></div></div><div id="cusPreChat-alertMsgContainer" class="cusPreChat-sidebarLoadingIndicator" style="display: none;"><div style="margin: 2.5em 1.75em;">' + preChatlableObject.chatUnavailableMessage + '</div><div><button id="cusPreChat-CloseChat" class="cusPreChat-embeddedServiceSidebarButton" type="button"><span class="cusPreChat-label cusPreChat-bBody">Close Chat</span></button></div></div><div id="cusPreChat-hideWhileLoading" class="cusPreChat-activeFeature cusPreChat-hideWhileLoading"> <div class="cusPreChat-featureBody cusPreChat-embeddedServiceSidebarFeature"> <div class="cusPreChat-stateBody cusPreChat-embeddedServiceSidebarState"> <div class="cusPreChat-prechatUI cusPreChat-embeddedServiceLiveAgentStatePrechatDefaultUI"> <div class="cusPreChat-formContent cusPreChat-embeddedServiceSidebarForm"> <ul class="cusPreChat-fieldList"> <div id="readonlyPreChatContainer" class="cusPreChat-readonlyContainer" style="margin: 0 1.5em 6px 1.5em; text-align: left;position: relative;font-size: .75em;color: #444444;"> <div style="font-size: 1.2em;">Precision M4500</div><div> <b>' + preChatlableObject.serviceTag + ':</b> 123432</div><div> <b>' + preChatlableObject.issueType + ':</b> Keyboard not working</div></div><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel"> <span class="">' + preChatlableObject.firstName + '</span></label> <input id="cusPreChat-FirstName" class="cusPreChat-FirstName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputSplitName cusPreChat-embeddedServiceSidebarFormField"> <span class="cusPreChat-split-field-container"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="LastName"> <span class="">' + preChatlableObject.lastName + '</span> </label> <input id="cusPreChat-LastName" class="cusPreChat-LastName form-control cusPreChat-input" maxlength="121" type="text" aria-describedby="" placeholder="" required="" aria-required="true"></div></span> </li><li class="cusPreChat-inputEmail cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputEmail cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Email"> <span>' + preChatlableObject.emailAddress + '</span></label> <input id="cusPreChat-Email" class="cusPreChat-Email form-control cusPreChat-input" maxlength="80" type="email" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputPhone cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputPhone cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Primary_Phone__c"> <span>' + preChatlableObject.phoneNumber + '</span> </label> <input id="cusPreChat-Phone" class="cusPreChat-Primary_Phone__c form-control cusPreChat-input" maxlength="40" type="tel" aria-describedby="" placeholder="" required="" aria-required="true"></div></li><li class="cusPreChat-inputText cusPreChat-embeddedServiceSidebarFormField"> <div class="cusPreChat-uiInput cusPreChat-uiInputText cusPreChat-uiInput--default cusPreChat-uiInput--input"> <label id="Issue_Description_Cust_Label" class="cusPreChat-uiLabel-left cusPreChat-form-element__label cusPreChat-uiLabel" for="Issue_Description__c"> <span>' + preChatlableObject.issueDescription + '</span> </label> <textarea id="cusPreChat-IssueDescription" class="cusPreChat-Issue_Description__c form-control cusPreChat-input coveo-query" maxlength="' + preChatlableObject.issueDescriptionLength + '" type="text" aria-describedby="" placeholder="" required="" data-coveo-id="txtIssueDetails"></textarea><div id="snappinCharCounter" style="text-align:right;position:relative;font-size:.75em;line-height: 1.5;margin-right: .75em;margin-left: .5em;margin-top: 8px; float: right; color:#767676">0 / ' + preChatlableObject.issueDescriptionLength + ' ' + preChatlableObject.characters + '</div></div></li></ul>  <div id="PrechatCoveo" style="display:none;"></div> <div style="font-size: 12px;color:#767676;text-align: left;margin: 2.5em 1.75em; font-style: italic;color:#444444;">' + preChatlableObject.customerPrivacyDesc + '</div></div><div class="cusPreChat-buttonWrapper cusPreChat-embeddedServiceSidebarForm"> <button id="cusPreChat-startChat" class="cusPreChat-startButton cusPreChat-uiButton--default cusPreChat-uiButton cusPreChat-embeddedServiceSidebarButton" type="button"> <span class="cusPreChat-label cusPreChat-bBody">' + preChatlableObject.startChat + '</span> </button></div></div></div></div></div></div></div></div><div id="cusPreChat-embeddedServiceHelpButton" class="cusPreChat-embeddedServiceHelpButton" style="display: none;"> <div class="cusPreChat-helpButton" style="width: 168px;"> <button id="cusPreChat-helpButtonEnabled" class="cusPreChat-uiButton cusPreChat-helpButtonEnabled" href="javascript:void(0)" > <span class="cusPreChat-embeddedServiceIcon" aria-hidden="true" style="display: inline-block; z-index: 1; float: left"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" width="100%" height="100%" style="height: 18px; width: 18px;"> <path d="M12 1.8C5.9 1.8 1 6.4 1 12c0 1.7.5 3.4 1.3 4.8.1.3.2.6.1.8l-1.4 4c-.2.3.2.6.6.6l3.9-1.6c.3-.1.5 0 .8.1 1.7.9 3.7 1.5 5.8 1.5 6 0 11-4.5 11-10.2C23 6.4 18.1 1.8 12 1.8zm-5.5 12c-1.1 0-1.9-.8-1.9-1.8s.8-1.8 1.9-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm5.5 0c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.9.8 1.9 1.8-.8 1.8-1.9 1.8z"></path> </svg> </span> <div class="cusPreChat-helpButtonLabel" id="cusPreChat-helpButtonSpan" aria-live="polite" aria-atomic="true"> <span class="cusPreChat-assistiveText">Live chat:</span> <span class="cusPreChat-message">' + preChatlableObject.chatHeader + '</span></div></button> </div></div>';
        let body = document.body || document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('beforeend', domEle);
        prePopulateCustPreFormValues(snapInObject);
        checkIfIssueDescIsOptional(snapInObject, preChatlableObject);//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
        custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject);
        custPreChatKeypressFieldValidation(preChatlableObject);
        custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject);
        document.getElementById("cusPreChat-startChat").addEventListener("click", function () { custPrechatInitiateChat(snapInObject, preChatlableObject) });
        document.getElementById("cusPreChat-minimize-btn").addEventListener("click", minimizeCustPrechat);
        document.getElementById("cusPreChat-close-btn").addEventListener("click", function () { closeCustPrechat(preChatlableObject) });
        document.getElementById("cusPreChat-helpButtonEnabled").addEventListener("click", maximizeCustPrechat);
        eleExist('.helpButtonEnabled #helpButtonSpan > .message', chatClick); //DEFECT 7030965 for Bishav comment this

        if (typeof snapInObject.isPCFCall !== "undefined" && snapInObject.isPCFCall) {
            isPCFCall = snapInObject.isPCFCall;
        }

        if (snapInObject.isCoveoSearchEnabled === true) {
            httpCoveoGetAsync(snapInObject.coveoViewUrl + "?isheaderRequired=false", apendToAHoverDiv);
            coveoInit(snapInObject, preChatlableObject);
        }
    } else {
        //BNR
        let snapinExists = document.querySelector(".embeddedServiceSidebar"), custPrechatForm = document.getElementById("cusPreChatSnapinDom");
        if ((!snapinExists || (snapinExists && window.getComputedStyle(snapinExists).display == 'none')) && window.getComputedStyle(custPrechatForm).display == 'none')
            maximizeCustPrechat();
        //document.getElementById("cusPreChatSnapinDom").style.display = 'block';
        //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
        //    agentsOfflinePostChatForm();
        let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && !element.classList.contains("helpButtonEnabled"))
            agentsOfflinePostChatForm();

    }
    prechatSettingForEmc();//STORY 7193456: FY201101
    callDellmetricsTrack("890.220.010");
}

//STORY 7193456: FY201101[START]
function prechatSettingForEmc() {
    makeIdReadWrite("cusPreChat-FirstName");
    makeIdReadWrite("cusPreChat-LastName");
    makeIdReadWrite("cusPreChat-Email");
    makeIdReadWrite("cusPreChat-Phone");
    if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
        makeIdReadOnlyIfHasVal("cusPreChat-FirstName");
        makeIdReadOnlyIfHasVal("cusPreChat-LastName");
        makeIdReadOnlyIfHasVal("cusPreChat-Email");
        makeIdReadOnlyIfHasVal("cusPreChat-Phone");
    }
}
function makeIdReadOnlyIfHasVal(id) {
    if (document.getElementById(id) && document.getElementById(id).value) {
        document.getElementById(id).readOnly = true;
    } else {
        makeIdReadWrite(id)
    }
}
function makeIdReadWrite(id) {
    document.getElementById(id).readOnly = false;
}
//STORY 7193456: FY201101[END]
//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [START]
function checkIfIssueDescIsOptional(snapInObject, preChatlableObject) {
    if ("issueVal" in snapInObject && snapInObject.issueVal != "" && snapInObject.issueVal != null && snapInObject.issueVal != undefined && snapInObject.issueVal != 'None' && document.getElementById("Issue_Description_Cust_Label")) {
        removeDomElementbyId("issueDescIsOptional");
        let optionalLabel = document.createElement('span');
        optionalLabel.id = 'issueDescIsOptional';
        optionalLabel.innerText = preChatlableObject.optional;
        let Issue_Description_Cust_Label = document.getElementById("Issue_Description_Cust_Label");
        Issue_Description_Cust_Label.appendChild(optionalLabel);
        removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
    } else {
        removeDomElementbyId("issueDescIsOptional");
    }
}
//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description [END]
//Coveo Get code[START]
function httpCoveoGetAsync(theUrl, callback) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function apendToAHoverDiv(responseText) {
    // let coveoSearchPleaseHolder = document.getElementById("PrechatCoveo");
    $('#PrechatCoveo').append(responseText);
    // coveoSearchPleaseHolder.insertAdjacentHTML('beforeend', responseText);
}

function coveoInit(snapInObject, preChatlableObject) {
    try {
        if (snapInObject.isCoveoSearchEnabled === true) {
            isCoveoSearchEnabled = true;
            coveoHeader = preChatlableObject.coveoHeader;
            setTimeout(function () {
                $.getScript(snapInObject.coveoJsUrl, function () {
                    $.getScript(snapInObject.coveoDeflectionjs, function () {
                        var productId = ""
                        var isEmcProduct = false;
                        if (snapInObject.emcProductId) {
                            productId = snapInObject.emcProductId;
                            isEmcProduct = true;
                        }
                        else
                            productId = snapInObject.productCode;

                        InitiateCoveoSearch(productId, snapInObject.productName, snapInObject.categoryPath, isEmcProduct, "chat", '', snapInObject.issueVal);
                    });
                });

                $("#cusPreChat-IssueDescription").on("keyup", function () {
                    GetCoveoPopoverResult(snapInObject.coveoSetDelay);
                });

                $("#cusPreChat-IssueDescription").on("click", function () {
                    GetCoveoPopoverResult(snapInObject.coveoSetDelay);
                });

                $('div').on('scroll', function () {
                    if ($('#prechatCoveo').css('display') == 'block') {
                        GetCoveoPopoverResult(0);
                    }
                });

                $(window).on('scroll', function () {
                    if ($('#prechatCoveo').css('display') == 'block') {
                        GetCoveoPopoverResult(0);
                    }
                });

            }, 2000);
        }
    } catch (e) {
        console.log("Error in: " + e);
    }
}

function GetCoveoPopoverResult(timeout) {
    if (timeout === undefined || timeout === '')
        timeout = 1200;

    var textLength = $('#cusPreChat-IssueDescription').val().length;

    if (isPCFCall === true && isCoveoSearchEnabled === true && textLength > 1 && $('#searchcoveoview').hasClass('coveo-hidden') === false && $('#searchcoveoview').find('div.CoveoResult').length !== 0) {
        setTimeout(function () {
            $('#cusPreChat-IssueDescription').popover(
                {
                    html: true,
                    container: 'body',
                    template: '<div class="popover popoverPosition" id="prechatCoveoPopover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>',
                    title: function () {
                        return "<b>" + coveoHeader + "</b><a href='#' class='close' data-dismiss='alert'>&times;</a>"
                    },
                    content: function () {
                        return $('#searchCoveo').html()
                    },
                });
            $(document).off('click', '.popover .close').on("click", ".popover .close", function () {
                $(this).parents(".popover").popover('hide');
                callDellmetricsTrack("890.222.134");
            });
            $('#cusPreChat-IssueDescription').popover("show");
        }, timeout);// delay is required to snyc up with result.           
    }
    else if (isCoveoSearchEnabled === true && textLength > 1 && $('#search').hasClass('coveo-hidden') === false && $('#search').find('div.CoveoResult').length !== 0) {

        setTimeout(function () {
            $('#cusPreChat-IssueDescription').popover(
                {
                    html: true,
                    template: '<div class="popover" id="prechatCoveo"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                    title: function () {
                        return "<b>" + coveoHeader + "</b><button id='popovercloseid' type='button' data-dismiss='popover' class='close' onclick='$(&quot;#cusPreChat-IssueDescription&quot;).popover(&quot;hide&quot;)' return false;>&times;</button>"
                    },
                    content: function () {
                        return $('#searchCoveo').html()
                    },
                    container: 'body',
                    placement: 'left',
                }).data('bs.popover').tip().addClass('popoverPosition');

            $('#cusPreChat-IssueDescription').popover("show");
        }, timeout);// delay is required to snyc up with result.           
    }
    else {
        CoveoPopoverDispose();
    }
}

function CoveoPopoverDispose() {
    if (isCoveoSearchEnabled === true) {
        if (!isPCFCall)
            $('#cusPreChat-IssueDescription').popover('destroy');
        else
            $('#cusPreChat-IssueDescription').popover('dispose');
    }
}

//Coveo Get code[END]
function prePopulateCustPreFormValues(snapInObject) {
    if ("firstName" in snapInObject)
        document.getElementById("cusPreChat-FirstName").value = snapInObject.firstName;
    if ("lastName" in snapInObject)
        document.getElementById("cusPreChat-LastName").value = snapInObject.lastName;
    if ("email" in snapInObject)
        document.getElementById("cusPreChat-Email").value = snapInObject.email;
    if ("phoneNo" in snapInObject)
        document.getElementById("cusPreChat-Phone").value = snapInObject.phoneNo;
    if ("issueDescription" in snapInObject)
        document.getElementById("cusPreChat-IssueDescription").value = snapInObject.issueDescription;
}
function custPreFormShowIssueDetailsCharRemainingOnKeyUp(preChatlableObject) {
    try {
        document.getElementById("cusPreChat-IssueDescription").onkeyup = function () {
            custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
        };
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function custPreFormShowIssueDetailsCharRemaining(preChatlableObject) {
    maxCharLength = preChatlableObject.issueDescriptionLength, innerTextColor = "#767676", currentCharLength = document.getElementById("cusPreChat-IssueDescription").value.length;
    document.getElementById("snappinCharCounter").innerText = currentCharLength + " / " + maxCharLength + " " + preChatlableObject.characters;
    if (currentCharLength === parseInt(maxCharLength)) {
        innerTextColor = "#c23934";
    } else {
        innerTextColor = "#767676";
    }
    document.getElementById("snappinCharCounter").style.color = innerTextColor;
}
function custPreChatKeypressFieldValidation(preChatlableObject) {
    document.getElementById("cusPreChat-Phone").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        for (i = 48; i < 58; i++)
            a.push(i);
        a.push(45);
        a.push(8);
        a.push(9);
        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusPreChat-Phone");
    }
    document.getElementById('cusPreChat-FirstName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusPreChat-FirstName");
    }
    document.getElementById('cusPreChat-LastName').onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusPreChat-LastName");
    }
    document.getElementById("cusPreChat-Email").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (!((k > 63 && k < 91) || (k > 96 && k < 123) || (k > 47 && k < 58) || (k == 45) || (k == 46) || (k == 95) || k == 8 || k == 9))
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusPreChat-Email");
    }
    document.getElementById("cusPreChat-IssueDescription").onkeypress = function (e) {
        var a = [];
        var k = e.which || e.keyCode;
        if (k == 62 || k == 60)
            e.preventDefault();
        else if (document.getElementById("ErrMsg_cusPreChat-IssueDescription")) {
            removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
        }
    }

    document.getElementById("cusPreChat-FirstName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusPreChat-FirstName");
    });
    document.getElementById("cusPreChat-LastName").addEventListener("paste", function (e) {
        checkForSpecialCharAndText(e, "cusPreChat-LastName");
    });
    document.getElementById("cusPreChat-IssueDescription").addEventListener("paste", function (e) {
        var format = /[<>]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-IssueDescription"))
            removeDomElementbyId("ErrMsg_cusPreChat-IssueDescription");
    });
    document.getElementById("cusPreChat-Email").addEventListener("paste", function (e) {
        var format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-Email"))
            removeDomElementbyId("ErrMsg_cusPreChat-Email");
    });
    document.getElementById("cusPreChat-Phone").addEventListener("paste", function (e) {
        if (/^[0-9-]*$/.test(pastedText(e)) == false) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (document.getElementById("ErrMsg_cusPreChat-Phone"))
            removeDomElementbyId("ErrMsg_cusPreChat-Phone");
    });
    function checkForSpecialCharAndText(e, ele) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(pastedText(e)) == true) {
            e.preventDefault();
            alert(preChatlableObject.pasteInvalidTextMsg);
        } else if (ele === "cusPreChat-FirstName" && document.getElementById("ErrMsg_cusPreChat-FirstName"))
            removeDomElementbyId("ErrMsg_cusPreChat-FirstName");
        else if (ele === "cusPreChat-LastName" && document.getElementById("ErrMsg_cusPreChat-LastName"))
            removeDomElementbyId("ErrMsg_cusPreChat-LastName");
    }
    function pastedText(e) {
        if (e.clipboardData && e.clipboardData.getData)
            return e.clipboardData.getData('text/plain');
        else
            return null;
    }

}
function custPreChatShowAdditionalDetailsInUi(snapInObject, preChatlableObject) {
    if (document.getElementById("readonlyPreChatContainer"))
        removeDomElement(document.getElementById("readonlyPreChatContainer"));
    let topFields = document.querySelector(".cusPreChat-sidebarBody .cusPreChat-prechatUI  .cusPreChat-embeddedServiceSidebarForm ul.cusPreChat-fieldList");
    let topFieldValues;
    checkIfIssueDescIsOptional(snapInObject, preChatlableObject);//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
    //STORY 7193456: FY201101[START]
    if ("isEmcProduct" in snapInObject && snapInObject.isEmcProduct) {
        preChatlableObject.serviceTag = preChatlableObject.serialNumber;
    }
    //STORY 7193456: FY201101[END]
    if (snapInObject.productName == null)
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;margin-bottom: 0px;">' + getChatServiceTag(preChatlableObject.serviceTag, snapInObject.serviceTag) + '<div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-coveo-id="IssueDesc" id="preChatIssueDesc" data-chatIssueKey="'+getIssueTypeKey(snapInObject)+'" style="font-size: 12px;">' + snapInObject.issueVal + '</span></div></div>';
    else
        topFieldValues = '<div id="readonlyPreChatContainer" class="readonlyContainer" style="margin: 0 1.5em 6px 1.2em; text-align: left;position: relative;font-size: .75em;color: #444444;"><div style="font-size: 1.2em;">' + snapInObject.productName + '</div>' + getChatServiceTag(preChatlableObject.serviceTag, snapInObject.serviceTag) + '<div><b>' + preChatlableObject.issueType + ':</b> <span class="coveo-query" data-chatIssueKey="'+getIssueTypeKey(snapInObject)+'" data-coveo-id="IssueDesc" id="preChatIssueDesc" style="font-size:12px;">' + snapInObject.issueVal + '</span></div></div>';
    topFields.insertAdjacentHTML("afterbegin", topFieldValues);
}
function custPreFormValidation(preChatlableObject) {

    let acceptForm,
        firstNameDOM = document.getElementById("cusPreChat-FirstName"),
        lastNameDOM = document.getElementById("cusPreChat-LastName"),
        emailDOM = document.getElementById("cusPreChat-Email"),
        phoneDOM = document.getElementById("cusPreChat-Phone"),
        IssueDescDOM = document.getElementById("cusPreChat-IssueDescription");

    if (document.getElementById("ErrMsg_cusPreChat-Email")) {
        let element = document.getElementById("ErrMsg_cusPreChat-Email");
        element.parentNode.removeChild(element);
    }
    if (!emailDOM.value)
        acceptForm = cusPreChatEleIsEmpty(emailDOM, preChatlableObject.emailRequiredValidation);
    else
        acceptForm = cusPreChatInvalidEmail(emailDOM, preChatlableObject);

    if (document.getElementById("ErrMsg_cusPreChat-FirstName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(firstNameDOM, "FirstName", format, true)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!firstNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(firstNameDOM, preChatlableObject.firstNameValidation);

    if (document.getElementById("ErrMsg_cusPreChat-LastName")) {
        var format = /[0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(lastNameDOM, "LastName", format, true)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!lastNameDOM.value)
        acceptForm = cusPreChatEleIsEmpty(lastNameDOM, preChatlableObject.lastNameValidation);

    if (document.getElementById("ErrMsg_cusPreChat-Phone")) {
        var format = /^[0-9-]*$/; //FY20-1102 DEFECT 7534877
        if (checkErrMsgValidation(phoneDOM, "Phone", format, false)) //FY20-1102 DEFECT 7534877
            acceptForm = false;
    } else if (!phoneDOM.value)
        acceptForm = cusPreChatEleIsEmpty(phoneDOM, preChatlableObject.phoneRequiredValidation);

    if (document.getElementById("ErrMsg_cusPreChat-IssueDescription")) {
        acceptForm = false;
    } else if (!IssueDescDOM.value && !document.getElementById("issueDescIsOptional"))//STORY 6779542: Contact Us: Snapin prechat Form -Problem Description
        acceptForm = cusPreChatEleIsEmpty(IssueDescDOM, preChatlableObject.issueDescriptionValidation);

    if (acceptForm === undefined) acceptForm = true;
    return acceptForm;
}
//FY21-0202 DEFECT 7980969 [START]
function getChatServiceTag(label, val){
    if(val && val != null)
        return '<div><b>' + label + ':</b><span  id="cusPreChat-serviceTag"> ' + val + '</span></div>';
    else
        return '';
    }
//FY21-0202 DEFECT 7980969 [END]

//FY20-1102 DEFECT 7534877 [START]		
function checkErrMsgValidation(fieldEle, fieldName, format, formatResult) {
    if ((fieldEle.value && format.test(fieldEle.value) == formatResult) || (!fieldEle.value)) {
        return true;
    } else {
        var idValue = "ErrMsg_cusPreChat-" + fieldName;
        var element = document.getElementById(idValue);
        element.parentNode.removeChild(element);
        return false;
    }
}
//FY20-1102 DEFECT 7534877 [END]
function cusPreChatEleIsEmpty(domElement, requiredValue) {
    cusPreChatErrorMsgPlaceholder(domElement, requiredValue);
    return false;
}
function cusPreChatInvalidEmail(domElement, preChatlableObject) {
    if (!cusPreChatvalidateEmail(domElement.value) || cusPreChatBlockListEmailValidation(domElement.value, preChatlableObject.blocklistEmails)) {
        cusPreChatErrorMsgPlaceholder(domElement, preChatlableObject.emailValidation);
        return false;
    }
}
function cusPreChatvalidateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function cusPreChatBlockListEmailValidation(email, blockList) {
    var blockListArray = blockList.split('|');
    var email = email.toUpperCase();
    for (i = 0; i < blockListArray.length; i++) {
        var blockedEmailString = blockListArray[i];
        blockedEmailString = blockedEmailString.toUpperCase();
        if (email === blockedEmailString)
            return true;
    }
    return false;
}
function cusPreChatErrorMsgPlaceholder(domElement, message) {
    try {
        let referenceNode = domElement.parentNode;
        let el = document.createElement("ul");
        el.innerHTML = '<li class="cusPreChat-form-element__help">' + message + '</li>';
        el.id = 'ErrMsg_' + domElement.id;
        el.className = "cusPreChat-has-error cusPreChat-uiInput";
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    } catch (e) {
        console.log(e);
    }

}
function removeDomElementbyId(id) {
    if (document.getElementById(id)) {
        let element = document.getElementById(id);
        element.parentNode.removeChild(element);
    }
}
function minimizeCustPrechat() {
    document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'block';
    document.getElementById("cusPreChatSnapinDom").style.display = 'none';

    CoveoPopoverDispose();
}
function closeCustPrechat(preChatlableObject) {
    //minimizeCustPrechat();
    document.getElementById("cusPreChatSnapinDom").style.display = 'none';
    let errorMsgs = document.querySelectorAll(".cusPreChat-has-error");
    errorMsgs.forEach(function (errorMsg) {
        removeDomElement(errorMsg)
    });
    removecustFormValues();
    custPreFormShowIssueDetailsCharRemaining(preChatlableObject);

    CoveoPopoverDispose();
}
function maximizeCustPrechat() {
    //BNR
    let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
    if ((element && !element.classList.contains("helpButtonEnabled")) || !element) {
        //if ((document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton') && document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled") || (!document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton'))) {
        agentsOfflinePostChatForm();
    } else {
        document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusPreChatSnapinDom").style.display = 'block';
        document.getElementById("cusPreChat-minimize-btn").style.display = 'block';
        document.getElementById("cusPreChat-close-btn").style.display = 'block';
    }
    if (document.querySelector(".embeddedServiceHelpButton"))
        document.querySelector(".embeddedServiceHelpButton").style.display = 'none';
}
function addCustFormDetailsTo(snapInObject) {
    snapInObject.c_firstName = document.getElementById("cusPreChat-FirstName").value;
    snapInObject.c_lastName = document.getElementById("cusPreChat-LastName").value;
    snapInObject.c_email = document.getElementById("cusPreChat-Email").value;
    snapInObject.c_phoneNo = document.getElementById("cusPreChat-Phone").value;
    snapInObject.c_issueDescription = document.getElementById('cusPreChat-IssueDescription').value;
    if (document.getElementById('cusPreChat-serviceTag'))
        snapInObject.c_serviceTag = document.getElementById('cusPreChat-serviceTag').innerText;
    else
        snapInObject.c_serviceTag = "";
    snapInObject.c_issueType = getTechSupportSubject(snapInObject);
    if (document.getElementById('preChatIssueDesc'))
        snapInObject.c_issueKey = document.getElementById('preChatIssueDesc').getAttribute("data-chatIssueKey");
    else
        snapInObject.c_issueKey = "";

    return snapInObject;
}
function removecustFormValues() {
    inputFields = document.querySelectorAll(".cusPreChat-input");
    inputFields.forEach(function (inputField) {
        if (inputField.value)
            inputField.value = "";
    });
    prePopulateCustPreFormValues(snapInObject);
}
/*function snapinChatGlobalObjNotEmpty() {
    snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
    if (snapInObjectGlobal != null)
        return true;
    else
        return false;
}*/

///Dont retain chat if false DEFECT 6944128 [Searching for another solution]
function snapinChatGlobalObjNotEmpty() {
    snapInObjectGlobal = sendGlobalSnapinObjToJson();
    if (snapInObjectGlobal != null && ("snapinChatInitiated" in snapInObjectGlobal) && snapInObjectGlobal.snapinChatInitiated)
        return true;
    else {
        if (snapInObjectGlobal != null)
            sessionStorage.removeItem("snapInObjectSession");
        return false;
    }
}
function saveGlobalSnapinObjToSession(snapInObject) {
    if (snapInObject) {
        snapInObjectGlobal = JSON.stringify(snapInObject);
        sessionStorage.setItem("snapInObjectSession", snapInObjectGlobal);
    }
}
function sendGlobalSnapinObjToJson() {
    snapInObjectGlobal = sessionStorage.getItem("snapInObjectSession");
    snapInObject = JSON.parse(snapInObjectGlobal);
    return snapInObject;
}
function loadingSnapinQueue() {
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'flex';
    document.getElementById("cusPreChat-hideWhileLoading").style.display = 'none';
    document.getElementById("cusPreChat-minimize-btn").style.display = 'none';
    document.getElementById("cusPreChat-close-btn").style.display = 'none';
    //snapinChatInitiatedState(true); //Fir for defect 7030965
    removeLoaderIn10();
}

function snapinQueueLoaded() {
    if (document.querySelector(".embeddedServiceSidebar") && document.getElementById("cusPreChatSnapinDom")) {
        document.querySelector(".embeddedServiceSidebar").style.display = 'block';
        document.getElementById("cusPreChatSnapinDom").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChat-minimize-btn").style.display = 'block';
        document.getElementById("cusPreChat-close-btn").style.display = 'block';
    }
}
function agentsOfflinePostChatForm() {
    //BNR
    snapinChatInitiatedState(false);
    document.getElementById("cusPreChatSnapinDom").style.display = 'block';
    document.getElementById("cusPreChat-sidebarLoadingIndicator").style.display = 'none';
    document.getElementById("cusPreChat-alertMsgContainer").style.display = 'flex';
    document.getElementById("cusPreChat-hideWhileLoading").style.display = 'none';
    document.getElementById("cusPreChat-minimize-btn").style.display = 'none';
    document.getElementById("cusPreChat-close-btn").style.display = 'none';
    document.getElementById("cusPreChat-CloseChat").addEventListener("click", function () {
        document.getElementById("cusPreChat-embeddedServiceHelpButton").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-alertMsgContainer").style.display = 'none';
        document.getElementById("cusPreChat-hideWhileLoading").style.display = 'block';
        document.getElementById("cusPreChatSnapinDom").style.display = 'none';
    });
}
function removeLoaderIn10() {
    //BNR
    setTimeout(function () {
        //let cusPreChatSnapinDom = document.getElementById("cusPreChatSnapinDom");
        let cusPreChatSnapinDom = document.getElementById("cusPreChat-sidebarLoadingIndicator");
        if (cusPreChatSnapinDom && window.getComputedStyle(cusPreChatSnapinDom).display != 'none') {
            document.getElementById("cusPreChatSnapinDom").style.display = 'none';
            if (document.querySelector(".embeddedServiceHelpButton"))
                document.querySelector(".embeddedServiceHelpButton").style.display = 'block';
        }
        //BNR
        let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && !element.classList.contains("helpButtonEnabled"))
            //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className != "uiButton helpButtonEnabled")
            snapinChatInitiatedState(false);
        hideResumeSnapinLoader();
    }, 30000);
}
function snapinChatInitiatedState(booleanValue) {
    //BNR
    snapInObject = sendGlobalSnapinObjToJson();
    if (snapInObject) {
        snapInObject.snapinChatInitiated = booleanValue;
        saveGlobalSnapinObjToSession(snapInObject);
    }
}
function custPrechatInitiateChat(snapInObject, preChatlableObject) {
    if (custPreFormValidation(preChatlableObject)) {
        callDellmetricsTrack("890.220.002"); //FY20-1101 STORY 7128491
        snapInObject = addCustFormDetailsTo(snapInObject);
        saveGlobalSnapinObjToSession(snapInObject);
        pageObserverForProp20("body", preChatlableObject);
        loadingSnapinQueue();
        removecustFormValues();
        custPreFormShowIssueDetailsCharRemaining(preChatlableObject);
        snapInObject = sendGlobalSnapinObjToJson();
        if(checkSnapinQueueStatus(snapInObject) == 1){//FY20-1102 Avilability and Business Hr Chack
            if (("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) || ("snapinButtonClicked" in snapInObject && snapInObject.snapinButtonClicked))
                eleExistWithVariable('.helpButtonEnabled #helpButtonSpan > .message', chatClick);
            eleExistWithVariable('.embeddedServiceSidebar .startButton', chatStarted, snapInObject);
        }else //FY20-1102 Avilability and Business Hr Chack
            agentsOfflinePostChatForm(); //FY20-1102 Avilability and Business Hr Chack
    }

    CoveoPopoverDispose();
}

//FY20-1102 Avilability and Business Hr Chack [START]
function checkSnapinQueueStatus(snapInObject) {	
    var returnValue;	
    function httpGetAgentAvailability(theUrl) {	
        try {	
            var xmlHttp = new XMLHttpRequest();	
            xmlHttp.onreadystatechange = function () {	
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)	
                    returnValue = xmlHttp.responseText;	
            }	
            xmlHttp.open("GET", theUrl, false); // true for asynchronous 	
            xmlHttp.send(null);	
        } catch (e) {	
            console.log("Error in: " + e);	
        }	
    }	
    if (snapInObject.checkQueueStatusInBizHoursUrl && snapInObject.hoursOfOperation && snapInObject.timeZone && (snapInObject.checkQueueStatusInBizHoursUrl != "" || snapInObject.checkQueueStatusInBizHoursUrl != null || snapInObject.checkQueueStatusInBizHoursUrl != undifined) && (snapInObject.hoursOfOperation != "" || snapInObject.hoursOfOperation != null || snapInObject.hoursOfOperation != undifined) && (snapInObject.timeZone != "" || snapInObject.timeZone != null || snapInObject.timeZone != undifined)) {	
        httpGetAgentAvailability(snapInObject.checkQueueStatusInBizHoursUrl + "?chatHours=" + escape(snapInObject.hoursOfOperation) + "&timeZone=" + escape(snapInObject.timeZone) + "&buttonId=" + snapInObject.buttonId);	
        return returnValue;	
    } else	
        return 1;	
} 
//FY20-1102 Avilability and Business Hr Chack [END]
function initOriginalESW(gslbBaseURL, snapInObject) {
    snapInClickListners();
    snapinChatGlobalServiceTag = snapInObject.serviceTag;
    snapinChatGlobalIssueType = snapInObject.issueVal;
    snapinChatGlobalProductName = snapInObject.productName;
    embedded_svc.settings.displayHelpButton = true;
    embedded_svc.settings.defaultMinimizedText = 'Chat Now';

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';
    //STORY 6929894[START]
    if ("routingModel" in snapInObject && snapInObject.routingModel && snapInObject.routingModel.toLowerCase() === "skillbased") {
        embedded_svc.settings.fallbackRouting = snapInObject.skillIds;
    }
    //STORY 6929894[END]
    if ("language" in snapInObject)
        translatedLabels = translation(snapInObject.language);
    else
        translatedLabels = translation("en");
    embedded_svc.settings.language = translatedLabels.language;

    //STORY 7193324: FY201101[START]
    let assetFieldName = "Name";
    if (snapInObject.isEmcProduct) {
        assetFieldName = "External_ID__c";
        embedded_svc.settings.extraPrechatFormDetails = [{
            "label": translatedLabels.firstName,
            "transcriptFields": ["FirstName__c"]
        }, {
            "label": translatedLabels.lastName,
            "transcriptFields": ["LastName__c"]
        }, {
            "label": translatedLabels.primPhone,
            "transcriptFields": ["ContactNumber__c"]
        }, {
            "label": translatedLabels.emailAdd,
            "transcriptFields": ["Email__c"]
        }, {
            "label": "Subject",
            "value": snapInObject.chatSeverity + " " + snapInObject.issueVal,
            "transcriptFields": ["Issue__c"]
        }, {
            "label": "Service Tag",
            "value": snapInObject.cpid,
            "transcriptFields": ["Service_Tag__c"]
        }, {
            "label": translatedLabels.issueDesc,
            "transcriptFields": ["Description__c"]
        }, /*{// New filed
            "label": "EMC Flag",
            "value": snapInObject.isEmcProduct,
            "transcriptFields": ["EMC_Flag__c"]
        },*/ 
        {// New filed
            "label": "Chat Source",
			"value": 'EMC',
			"transcriptFields": ["Chat_Source__c"]
        },{	// New filed
            "label": "Serial Number",
            "value": snapInObject.serviceTag,
            "transcriptFields": ["Serial_Number__c"]
        }
        ];
    } else
        //STORY 7193324: FY201101[END]
        embedded_svc.settings.extraPrechatFormDetails = [{
            "label": translatedLabels.firstName,
            "transcriptFields": ["FirstName__c"]
        }, {
            "label": translatedLabels.lastName,
            "transcriptFields": ["LastName__c"]
        }, {
            "label": translatedLabels.primPhone,
            "transcriptFields": ["ContactNumber__c"]
        }, {
            "label": translatedLabels.emailAdd,
            "transcriptFields": ["Email__c"]
        }, {// New filed
            "label": "Chat Source",
			//"value": getTechSupportChatSource(snapInObject),//FY21-0202 Story STORY #7689121
			"transcriptFields": ["Chat_Source__c"]
        },{	// New filed
            "label": "Subject",
            //"value": getTechSupportSubject(snapInObject),//snapInObject.issueVal,//FY21-0202 Story STORY #7689121
            "transcriptFields": ["Issue__c"]
        },
        //Story #6614459: Skill Based: Resume Chat Option [START]
        {
            "label": "Issue Key",
           // "value": getIssueTypeKey(snapInObject),
            "transcriptFields": ["Issue_Key__c"]
        },
        //Story #6614459: Skill Based: Resume Chat Option [END]
        {
            "label": "Service Tag",
            //"value": snapInObject.serviceTag,
            "transcriptFields": ["Service_Tag__c"]
        }, {
            "label": translatedLabels.issueDesc,
            "transcriptFields": ["Description__c"]
        }
        ];
    embedded_svc.settings.extraPrechatInfo = [{
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": "LastName",
            "isExactMatch": true,
            "label": translatedLabels.lastName
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "FirstName",
            "isExactMatch": true,
            "label": translatedLabels.firstName
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "Email",
            "isExactMatch": true,
            "label": translatedLabels.emailAdd
        }, {
            "doCreate": false,
            "doFind": true,
            "fieldName": "Primary_Phone__c",
            "isExactMatch": true,
            "label": translatedLabels.primPhone
        }
        ],
        "entityName": "Contact",
        "saveToTranscript": ""
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": assetFieldName,//STORY 7193324: FY201101
            "isExactMatch": true,
            "label": "Service Tag"
        }
        ],
        "entityName": "Asset",
        "saveToTranscript": "Asset__c"
    }, {
        "entityFieldMaps": [{
            "doCreate": false,
            "doFind": true,
            "fieldName": "Issue_Description__c",
            "isExactMatch": true,
            "label": translatedLabels.issueDesc
        }
        ],
        "entityName": "Case"
    }
    ];

    var firstNameVal = null,
        lastNameVal = null,
        emailAddVal = null,
        issueDescription = null,
        primePhoneVal = null,
        serviceTag = null;

    if ("c_firstName" in snapInObject)
        firstNameVal = snapInObject.c_firstName;
    else
        firstNameVal = "FirstName";
    if ("c_lastName" in snapInObject)
        lastNameVal = snapInObject.c_lastName;
    else
        lastNameVal = "LastName";
    if ("c_email" in snapInObject)
        emailAddVal = snapInObject.c_email;
    else
        emailAddVal = "email@dell.com";
    if ("c_phoneNo" in snapInObject)
        primePhoneVal = snapInObject.c_phoneNo;
    else
        primePhoneVal = "123";
    if ("c_issueDescription" in snapInObject)
        issueDescription = snapInObject.c_issueDescription;
    else
        issueDescription = "issueDescription";
    if (document.getElementById('cusPreChat-serviceTag'))
        serviceTag = document.getElementById('cusPreChat-serviceTag').innerText;
    else
        serviceTag = "";

    embedded_svc.settings.prepopulatedPrechatFields = {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        Email: emailAddVal,
        Primary_Phone__c: primePhoneVal,
        Issue_Description__c: issueDescription,
        Service_Tag__c: serviceTag
    };
    embedded_svc.addEventHandler("onConnectionError", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onIdleTimeoutOccurred", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onChatEndedByChasitor", function (data) {
        snapinChatInitiatedState(false);
    });

    embedded_svc.addEventHandler("onChatEndedByAgent", function (data) {
        snapinChatInitiatedState(false);
    });
    embedded_svc.addEventHandler("onChasitorMessage", function (data) {
        snapinChatInitiatedState(true);//Fix for defect 7030965
    });
    //FY21-0202 Fix for defect 7917426 [START]
    /*embedded_svc.addEventHandler("onChatRequestSuccess", function(data) {
            $("body").on('DOMNodeRemoved', function(e) {
                if(e.target.className){
                    className = e.target.className.split(" ");
                    if(className[0] === "modalContainer")
                        sessionStorage.removeItem("snapInObjectSession");
                }	
            });
    });*/
    //FY21-0202 Fix for defect 7917426 [END]
    embedded_svc.addEventHandler("onAgentMessage", function (data) {
        snapinChatInitiatedState(true);
    });

    embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
        baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
        deploymentId: snapInObject.deploymentId,
        buttonId: snapInObject.buttonId,
        baseLiveAgentURL: snapInObject.baseLiveAgentURL,
        eswLiveAgentDevName: snapInObject.LiveAgentDevName,
        isOfflineSupportEnabled: false
    });
};
/*
function togglePrechatAndSnapin(targetNode) {
    if (document.getElementById("cusPreChatSnapinDom")) {
        if (targetNode === "snapInhelpBtnDisabled") {
            document.getElementById("cusPreChatSnapinDom").style.display = "none";
        } else if (targetNode === "snapInhelpBtnEnabled") {
            preChatCanvas = document.getElementById("cusPreChatSnapinDom");
            if (window.getComputedStyle(preChatCanvas).display === 'block') {
                if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message"))
                    document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").click();
            } else {
                snapinChatInitiatedState(false);
                //minimizeCustPrechat();
                
            }
        }
    } else if (snapinChatGlobalObjNotEmpty()) {
        snapinChatInitiatedState(false);
        if (!document.getElementById("cusPreChatSnapinDom")) {
            document.querySelector(".embeddedServiceHelpButton").style.display = 'none';
        }
    }
}
*/
//FY21-0202 Story STORY #7689121 [START]
function getTechSupportSubject(snapInObject){
    //FY21-0202 Story Defectfix for Defect # 7977210 [START]
    /*if(("serviceTag" in snapInObject && snapInObject.serviceTag) || ("issueVal" in snapInObject && snapInObject.issueVal))
        return snapInObject.issueVal;
    else if("productFamily" in snapInObject)
        return snapInObject.productFamily;*/
    if("productFamily" in snapInObject && snapInObject.productFamily === "security_dell_data" && "productName" in snapInObject)
        return "Dell Data Security";
    else if("issueVal" in snapInObject && snapInObject.issueVal)
        return snapInObject.issueVal;
    //FY21-0202 Story Defectfix for Defect # 7977210 [END]
}
function getTechSupportChatSource(snapInObject){
    if(("serviceTag" in snapInObject && snapInObject.serviceTag))
        return "Tech";
    else
        return "Product";
}
//FY21-0202 Story STORY #7689121 [END]

//Story #6614459: Skill Based: Resume Chat Option [START]
function getIssueTypeKey(snapInObject) {
    if ("issueType" in snapInObject && snapInObject.issueType) {
        return snapInObject.issueType;
    } else {
        return "";
    }
}
//Story #6614459: Skill Based: Resume Chat Option [END]
function triggerResumeSnapin(snapInObject) {
    try {
        if (snapinChatGlobalObjNotEmpty()) {
            showResumeSnapinLoader();
            let eleSelector = document.querySelector('.helpButtonEnabled #helpButtonSpan > .message');
            if (eleSelector.innerText === 'Chat Now')
                eleSelector.click();
        } else {
            pageObserverForProp20("body");
            snapInObject.snapinResumeChatInitiated = false;
            saveGlobalSnapinObjToSession(snapInObject);
            showResumeSnapinLoader();
            var initESW = function (gslbBaseURL) {
                snapinChatGlobalIssueType = snapInObject.issueVal;
                snapinChatGlobalServiceTag = snapInObject.serviceTag;
                if ("productName" in snapInObject)
                    snapinChatGlobalProductName = snapInObject.productName;
                eleExist('.helpButtonEnabled #helpButtonSpan > .message', resumeChatClick);
                embedded_svc.settings.displayHelpButton = true;
                //STORY 6929894[START]
                if ("routingModel" in snapInObject && snapInObject.routingModel && snapInObject.routingModel.toLowerCase() === "skillbased")
                    embedded_svc.settings.fallbackRouting = snapInObject.skillIds;
                //STORY 6929894[END]
                if ("language" in snapInObject)
                    translatedLabels = translation(snapInObject.language);
                else
                    translatedLabels = translation("en");
                embedded_svc.settings.language = translatedLabels.language;
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                //embedded_svc.settings.storageDomain = snapInObject.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                embedded_svc.settings.extraPrechatFormDetails = [{
                    "label": "Delta Sr",
                    "value": snapInObject.srNumber,
                    "transcriptFields": ["Delta_SR__c"]
                }, {
                    "label": translatedLabels.firstName,
                    "name": "FirstName",
                    "value": snapInObject.firstName,
                    "displayToAgent": true
                }, {
                    "label": translatedLabels.lastName,
                    "value": snapInObject.lastName,
                    "displayToAgent": true
                }
                ];
                embedded_svc.settings.extraPrechatInfo = [{
                    "entityFieldMaps": [{
                        "doCreate": true,
                        "doFind": true,
                        "fieldName": "Delta_SR__c",
                        "isExactMatch": true,
                        "label": "Delta Sr"
                    }
                    ],
                    "entityName": "Case"
                }
                ];

                embedded_svc.init(snapInObject.snapInInitURL, snapInObject.snapInLAURL, gslbBaseURL, snapInObject.organizationId, snapInObject.componentName, {
                    baseLiveAgentContentURL: snapInObject.baseLiveAgentContentURL,
                    deploymentId: snapInObject.deploymentId,
                    buttonId: snapInObject.buttonId,
                    baseLiveAgentURL: snapInObject.baseLiveAgentURL,
                    eswLiveAgentDevName: snapInObject.LiveAgentDevName,
                    isOfflineSupportEnabled: false
                });
            };
            if (!window.embedded_svc) {
                var s = document.createElement('script');
                s.setAttribute('src', snapInObject.snapInJs);
                s.onload = function () {
                    initESW(null, snapInObject.srNumber);
                };
                document.body.appendChild(s);
            } else {
                initESW(snapInObject.serviceForceURL, snapInObject.srNumber);
            }
        }
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function showResumeSnapinLoader() {
    snapInObject = sendGlobalSnapinObjToJson();
    if (!snapInObject.snapinResumeChatInitiated) {
        saveGlobalSnapinObjToSession(snapInObject);
        if (!document.getElementById('cusResumeSnapIn-loader')) {
            let domEle = '<div id="cusResumeSnapIn-loader" class="cusPreChat-embeddedServiceHelpButton"><div class="cusPreChat-helpButton" style="width: 168px;"><div class="cusPreChat-uiButton" style="cursor: default;"><div class="cusPreChat-helpButtonLabel"><span class="cusPreChat-message">Loading</span></div></div></div></div>';
            let body = document.body || document.getElementsByTagName('body')[0];
            body.insertAdjacentHTML('beforeend', domEle);
        } else {
            document.getElementById('cusResumeSnapIn-loader').style.display = 'block';
        }

    }
}
function hideResumeSnapinLoader() {
    if (document.getElementById('cusResumeSnapIn-loader')) {
        document.getElementById('cusResumeSnapIn-loader').style.display = 'none';
        snapInObject = sendGlobalSnapinObjToJson();
        snapInObject.snapinResumeChatInitiated = true;
        saveGlobalSnapinObjToSession(snapInObject);
    }
}
function chatClick(eleSelector, findingEle) {
    try {
        snapInObject = sendGlobalSnapinObjToJson();
        //BNR
        if (("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated && document.querySelector(eleSelector).innerText === 'Chat Now') || (document.querySelector(eleSelector).innerText === 'Chat Now')) {
            // console.log("BNRclicked-3");
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function resumeChatClick(eleSelector, findingEle) {
    try {
        if (document.querySelector(eleSelector).innerText === 'Chat Now') {
            document.querySelector(eleSelector).click();
        }
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function chatStarted(eleSelector, findingEle, snapInObject) {
    try {
        //BNR
        let element = document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton');
        if (element && element.classList.contains("helpButtonEnabled"))
            //if (document.querySelector('.embeddedServiceHelpButton .helpButton .uiButton').className === "uiButton helpButtonEnabled")
            changePrechatValues(snapInObject, clickSnapinChatBtn);
        else {
            agentsOfflinePostChatForm();
            clearInterval(findingEle);
        }
        function clickSnapinChatBtn() {
            snapInObject = sendGlobalSnapinObjToJson();
            //if ("snapinChatInitiated" in snapInObject && snapInObject.snapinChatInitiated) {
            document.querySelector(eleSelector).click();
            clearInterval(findingEle);
            /*}else
                console.log("working");
            */
        }
        function changePrechatValues(snapInObject, callback) {
            let state = embedded_svc.sidebarInstanceMap[Object.keys(embedded_svc.sidebarInstanceMap)[0]].getActiveState();
            let prechatFields = state.get("v.prechatFields");
            //BNR Language POC [START]
            prechatFields.forEach(function (prechatField) {
                if (prechatField.name === "FirstName") {
                    prechatField.value = snapInObject.c_firstName
                } else if (prechatField.name === "LastName") {
                    prechatField.value = snapInObject.c_lastName
                } else if (prechatField.name === "Email") {
                    prechatField.value = snapInObject.c_email
                } else if (prechatField.name === "Primary_Phone__c") {
                    phone = snapInObject.c_phoneNo;
                    prechatField.value = phone.replace(/[&\/\\#!@,+$~%.'":*?<>{}^a-zA-Z]/g, ''); //DEFECT 6745488
                } else if (prechatField.name === "Issue_Description__c") {
                    prechatField.value = snapInObject.c_issueDescription
                }  else if (prechatField.name === "Service_Tag__c") {
                    prechatField.value = snapInObject.c_serviceTag
                }  else if (prechatField.name === "Issue_Key__c") {
                    prechatField.value = snapInObject.c_issueKey
                }  else if (prechatField.name === "Issue__c") {
                    prechatField.value = snapInObject.c_issueType
                } else if (prechatField.name === "Chat_Source__c"){
                    prechatField.value = getTechSupportChatSource(snapInObject);
                }
            });

            //BNR Language POC [END]
            state.set("v.prechatFields", prechatFields);
            callback();
        }
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function translation(lang) {
    let language = lang.replace("_", "-");
    language = language.toLowerCase();
    this.primPhone = "Primary Phone Number";
    this.issueDesc = "Issue Description";
    if (language == "de") {
        this.firstName = "Vorname";
        this.lastName = "Nachname";
        this.emailAdd = "E-Mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.language = "de";
    } else if (language == "ja") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "メール";
        this.primPhone = "主に使う電話番号";
        this.issueDesc = "問題の説明";
        this.language = "ja";
    } else if (language == "ko") {
        this.firstName = "이름";
        this.lastName = "성";
        this.emailAdd = "이메일";
        this.primPhone = "기본 전화 번호";
        this.issueDesc = "문제 설명";
        this.language = "ko";
    } else if (language == "es") {
        this.firstName = "Nombre";
        this.lastName = "Apellidos";
        this.emailAdd = "Correo electrónico";
        this.primPhone = "Número de teléfono primario";
        this.issueDesc = "descripcion del problema";
        this.language = "es";
    } else if (language == "zh" || language == "cn" || language == "zh-cn") {
        this.firstName = "名";
        this.lastName = "姓";
        this.emailAdd = "电子邮件";
        this.primPhone = "最常用的电话号码";
        this.issueDesc = "问题说明";
        this.language = "zh-CN";
    } else if (language == "zh-tw") {
        this.firstName = "名字";
        this.lastName = "姓氏";
        this.emailAdd = "電子郵件";
        this.language = "zh-TW";
    } else if (language == "pt" || language == "pt-pt") {
        this.firstName = "Nome próprio";
        this.lastName = "Apelido";
        this.emailAdd = "Email";
        this.language = "pt-pt";
    } else if (language == "pt-br") {
        this.firstName = "Nome";
        this.lastName = "Sobrenome";
        this.emailAdd = "Email";
        this.primPhone = "Número de Telefone Principal";
        this.issueDesc = "descrição do problema";
        this.language = "pt-br";
    } else if (language == "nl" || language == "nl-nl") {
        this.firstName = "Voornaam", this.lastName = "Achternaam",
        this.emailAdd = "E-mail";
        this.primPhone = "Primair telefoonnummer";
        this.issueDesc = "Probleem Beschrijving";
        this.language = "nl-NL";
    } else if (language == "fr") {
        this.firstName = "Prénom";
        this.lastName = "Nom";
        this.emailAdd = "Adresse e-mail";
        this.language = "fr";
    } else if (language == "da") {
        this.firstName = "Fornavn";
        this.lastName = "Efternavn";
        this.emailAdd = "Mail";
        this.language = "da";
    } else if (language == "fi") {
        this.firstName = "Etunimi";
        this.lastName = "Sukunimi";
        this.emailAdd = "Sähköposti";
        this.language = "fi";
    } else if (language == "it") {
        this.firstName = "Nome";
        this.lastName = "Cognome";
        this.emailAdd = "Email";
        this.language = "it";
    } else if (language == "no") {
        this.firstName = "Fornavn";
        this.lastName = "Etternavn";
        this.emailAdd = "E-post";
        this.language = "no";
    } else if (language == "ru") {
        this.firstName = "Имя";
        this.lastName = "Фамилия";
        this.emailAdd = "Эл. почта";
        this.language = "ru";
    } else if (language == "sv") {
        this.firstName = "Förnamn";
        this.lastName = "Efternamn";
        this.emailAdd = "E-post";
        this.language = "sv";
    } else if (language == "th") {
        this.firstName = "ชื่อจริง";
        this.lastName = "นามสกุล";
        this.emailAdd = "อีเมล";
        this.language = "th";
    } else if (language == "pl") {
        this.firstName = "Imię";
        this.lastName = "Nazwisko";
        this.emailAdd = "E-mail";
        this.language = "pl";
    } else if (language == "sk") {
        this.firstName = "Meno";
        this.lastName = "Priezvisko";
        this.emailAdd = "E-mail";
        this.language = "sk";
    } else {
        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.emailAdd = "Email Address";
        this.language = "en";
    }
    console.log("Language = " + this.language);
    return this;
}

var closestByTagName = function (el, closedElement) {
    try {
        var elParent = el;
        if (elParent) {
            var tagedVal = elParent.tagName;
            if (tagedVal)
                while (tagedVal.toLowerCase() != closedElement) {
                    elParent = elParent.parentNode;
                    if (elParent)
                        tagedVal = elParent.tagName;
                    if (!tagedVal) {
                        return el;
                    }
                }
        }

        return elParent;

    } catch (e) {
        console.log(e);
    }
}
function snapInClickListners() {
    window.addEventListener("click", function (event) {
        if (document.querySelector(".embeddedServiceSidebar") || document.querySelector(".embeddedServiceHelpButton")) {
            var clickedElement = event.target || event.srcElement;
            if (closestByTagName(clickedElement, 'button') != null) {
                switch (closestByTagName(clickedElement, 'button').className) {
                    case "dialogButton dialog-button-0 uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.003", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "dialogButton dialog-button-1 uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.004", "ClickedOn '" + clickedElement.innerText + "' button");
                        break;
                    case "waitingCancelChat uiButton--inverse uiButton embeddedServiceSidebarButton":
                        callDellmetricsTrack("890.220.005", "ClickedOn Cancel Chat button while waiting in queue");
                        break;
                    case "closeButton headerItem":
                        callDellmetricsTrack("890.220.006", "ClickedOn Close (x) button");
                        break;
                    case "minimizeButton headerItem":
                        callDellmetricsTrack("890.220.007", "ClickedOn Minimize button");
                        break;
                    case "sidebarHeader minimizedContainer helpButton embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "ClickedOn Maximize button");
                        break;
                    case "sidebarHeader minimizedContainer embeddedServiceSidebarMinimizedDefaultUI":
                        callDellmetricsTrack("890.220.008", "ClickedOn Maximize button");
                        break;
                    case "uiButton helpButtonEnabled":
                    case "uiButton no-hover helpButtonEnabled":
                        if (document.querySelector(".helpButtonEnabled #helpButtonSpan > .message").innerText == "Chat Now") {
                            snapInCurrentPage = null;
                            if (document.getElementById("cusPreChatSnapinDom") && document.getElementById("cusPreChatSnapinDom").display === "none") //FY20-1101 STORY 7128491
                                callDellmetricsTrack("890.220.001", "StartsChat for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);

                        } else if (document.getElementById("cusPreChatSnapinDom") && document.getElementById("cusPreChatSnapinDom").display === "none") //FY20-1101 STORY 7128491
                            callDellmetricsTrack("890.220.001", "AgentOffline for " + snapinChatGlobalServiceTag + "|" + snapinChatGlobalIssueType + "|" + snapinChatGlobalProductName);
                        break;
                    default:
                        if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {
                            callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);
                        }
                        break;
                }
            } else if (closestByTagName(clickedElement, 'a').className == "chatOption embeddedServiceLiveAgentStateChatHeaderOption") {

                callDellmetricsTrack("890.220.009", "ClickedOn " + closestByTagName(clickedElement, 'a').text);

            }
        }
    });
}


function callDellmetricsTrack(propValue, message) {
    if (showsAgentOflineMsg(propValue, message)) {
        document.querySelector(".dialog-button-0.embeddedServiceSidebarButton").style.display = 'none';
    }
    if (typeof (dellmetricsTrack) == "function") {
        if (dellmetricsTrack) {
            if (trackevent) {
                if (message)
                    dellmetricsTrack(propValue, message);
                else
                    dellmetricsTrack(propValue);
            } else {
                trackevent = true;
            }

        }
    }
}

function showsAgentOflineMsg(propValue, message) {
    if (propValue == "890.220.016" &&
        (   
            //FY:21-0202 Fix for language related issues[START]
            message.includes("申し訳ありません。チャットすることができません。 しばらくしてからもう一度お試しください。") ||
            message.includes("죄송합니다. 현재 귀하와 채팅할 수 없습니다. 나중에 다시 시도해주십시오.") ||
            message.includes("Lo sentimos, no se puede abrir una sesión de chat. Vuelva más tarde o inténtelo de nuevo.") ||
            message.includes("抱歉，我们无法和您聊天。 请稍后回来或重试。") ||
            message.includes("Lamentamos não poder conversar com você. Volte mais tarde ou tente novamente.") ||
            message.includes("Es tut uns Leid, aber momentan können wir nicht mit Ihnen chatten. Versuchen Sie es später noch einmal.") ||
            message.includes("Sorry that we are not able to chat with you. Come back later or try again.") ||
            message.includes("Im Moment kann nicht gechattet werden. Versuchen Sie es später erneut.") ||
			message.includes("ただいまチャットできません。 後でもう一度お試しください。") ||
            message.includes("지금은 채팅을 할 수 없습니다. 나중에 다시 시도하십시오.") ||
            message.includes("No podemos chatear en estos momentos. Inténtelo de nuevo más tarde.") ||
            message.includes("我们现在无法聊天。 请稍后重试。") ||
			message.includes("我們目前無法聊天。 請稍後再試一次。") ||
            message.includes("Não podemos conversar neste momento. Tente novamente mais tarde.") ||
            message.includes("Não podemos conversar agora. Tente novamente mais tarde.") ||
			message.includes("We kunnen momenteel niet chatten. Probeer het later opnieuw.") ||
			message.includes("Nous ne pouvons pas discuter pour le moment. Veuillez réessayer ultérieurement.") ||
			message.includes("Vi kan ikke chatte lige nu. Prøv igen senere.") ||
			message.includes("Emme voi chatata juuri nyt. Yritä myöhemmin uudelleen.") ||
			message.includes("Non possiamo chattare al momento Riprova più tardi.") ||
			message.includes("Vi kan ikke chatte akkurat nå. Prøv på nytt senere.") ||
			message.includes("В настоящее время чат недоступен. Повторите попытку позже.") ||
			message.includes("Vi kan inte chatta just nu. Försök igen senare.") ||
			message.includes("เราไม่สามารถสนทนาได้ในตอนนี้ ลองอีกครั้งในภายหลัง") ||
			message.includes("Nie możemy w tej chwili rozmawiać na czacie Spróbuj ponownie później.") ||
			message.includes("Momenálne nemôžeme četovať. Skúste to znova.") ||
			message.includes("Não podemos conversar agora. Tente novamente mais tarde.") ||
            message.includes("We can't chat right now. Try again later.")
            //FY:21-0202 Fix for language related issues[END]
        )
    ) {
        return true;
    } else {
        return false;
    }
}

function pageObserverForProp20(eleSelector, preChatlableObject) {
    try {
        snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
        snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
        snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
        snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
        snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
        snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
        snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
        if (snapInPrechatForm)
            snapInCurrentPage = "snapInPrechatForm";
        else if (snapInWaiting)
            snapInCurrentPage = "snapInWaiting";
        else if (snapInChatStarted)
            snapInCurrentPage = "snapInChatStarted";
        else if (snapInChatEnded)
            snapInCurrentPage = "snapInChatEnded";
        else if (snapInConfirmationDialoug)
            snapInCurrentPage = "snapInConfirmationDialoug";
        else if (snapInhelpBtnDisabled) {
            removeLoaderIn10();
            snapInCurrentPage = "snapInhelpBtnDisabled";
        } else if (snapInhelpBtnEnabled)
            snapInhelpBtnEnabled = "snapInhelpBtnEnabled";
        else
            snapInCurrentPage = null;
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var attributeChangeCallback = function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes.length > 0) {
                    snapInPrechatForm = document.querySelector(".modalContainer  .dockableContainer .sidebarBody .activeFeature .featureBody .embeddedServiceSidebarState .prechatUI");
                    snapInWaiting = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer");
                    snapInChatStarted = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .chasitorControls .chasitorText");
                    snapInChatEnded = document.querySelector(".dockableContainer .activeFeature .embeddedServiceLiveAgentStateChat .endChatContainer");//Fix for defect 7030965
                    snapInConfirmationDialoug = document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer");
                    snapInhelpBtnDisabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonDisabled");
                    snapInhelpBtnEnabled = document.querySelector(".embeddedServiceHelpButton .helpButton .helpButtonEnabled");
                    snapInEmbeddedServiceHelpBtn = document.querySelector(".embeddedServiceHelpButton");
                    if (snapInPrechatForm && snapInCurrentPage != "snapInPrechatForm") {
                        snapInCurrentPage = "snapInPrechatForm";
                        //BNR: DEFECT 6915122[START]
                        document.querySelector(".modalContainer.embeddedServiceSidebar").style.display = "none";
                        snapinChatInitiatedState(false);
                        //BNR: DEFECT 6915122[END]
                    } else if (snapInWaiting && snapInCurrentPage != "snapInWaiting") {
                        snapInCurrentPage = "snapInWaiting";
                        callDellmetricsTrack("890.220.011");
                        snapinQueueLoaded();
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(false);
                    } else if (snapInChatStarted && snapInCurrentPage != "snapInChatStarted") {
                        snapInCurrentPage = "snapInChatStarted";
                        snapinQueueLoaded();
                        callDellmetricsTrack("890.220.013");
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(true);
                        addChatPrivacyInfo(preChatlableObject);//BNR0202 - preChatlableObject pulled from top
                        
                    } else if (snapInChatEnded && snapInCurrentPage != "snapInChatEnded") {//Fix for defect 7030965
                        snapInCurrentPage = "snapInChatEnded";
                        snapinQueueLoaded();
                        hideResumeSnapinLoader();
                        snapinChatInitiatedState(false);
                    } else if (snapInConfirmationDialoug && snapInCurrentPage != "snapInConfirmationDialoug") {
                        snapInCurrentPage = "snapInConfirmationDialoug";
                        snapinQueueLoaded();
                        callDellmetricsTrack("890.220.016", document.querySelector(".dockableContainer .activeFeature .stateBody .dialogState .dialogTextContainer").innerText);
                        //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [START] 
                        let closeBtn = document.querySelector(".modalContainer .dockableContainer .embeddedServiceSidebarHeader .closeButton.headerItem");
                        closeBtn.addEventListener("click", function () {
                            if (!snapInConfirmationDialoug) {
                                snapinChatInitiatedState(false);
                            }
                        });
                        //Fix for on click of (x) button from End Chat confirmation Page: FYI we have created a SFDC case 23872982 [END] 

                        hideResumeSnapinLoader();
                    } else if (snapInEmbeddedServiceHelpBtn && window.getComputedStyle(snapInEmbeddedServiceHelpBtn).display === 'block') {

                        if (snapInhelpBtnDisabled && window.getComputedStyle(snapInhelpBtnDisabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnDisabled") {
                            snapInCurrentPage = "snapInhelpBtnDisabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnDisabled.style.display = "none";
                            removeLoaderIn10();
                        } else if (snapInhelpBtnEnabled && window.getComputedStyle(snapInhelpBtnEnabled).display === 'flex' && snapInCurrentPage != "snapInhelpBtnEnabled") {
                            if (snapInCurrentPage === "snapInhelpBtnDisabled")
                                document.getElementById("cusPreChatSnapinDom").style.display = "block";
                            snapInCurrentPage = "snapInhelpBtnEnabled";
                            //togglePrechatAndSnapin(snapInCurrentPage);
                            snapInhelpBtnEnabled.style.display = "none";
                        } else {
                            console.log("Snap-In: Not Loaded");
                        }
                    }
                }
            });
        }
        var observer = new MutationObserver(attributeChangeCallback);
        var domElement = document.querySelector(eleSelector);
        observer.observe(domElement, {
            childList: true,
            subtree: true
        });
    } catch (e) { console.log('Error in Observer - ' + e) }
}
//BNR0202 [START]
function addChatPrivacyInfo(preChatlableObject){
                            setTimeout(function(){
                                var snapinChatPopUpMsgDom = document.getElementById("snapinChatPopUpMsg");
                                var snapinChasnapinCHatEnded  = document.querySelector(".dockableContainer .chatMessage.ended");
                                if (!snapinChatPopUpMsgDom){
                                    var snapinPopInputMsg;
                                    if(preChatlableObject && "chatPrivacyInfo" in preChatlableObject && preChatlableObject.snapinChatPopUpMsgDom)
                                        snapinPopInputMsg = preChatlableObject.snapinChatPopUpMsgDom;
                                    else
                                        snapinPopInputMsg = "Please do not share any payment or sensitive information in this chat window.";
                                    var newItem = document.createElement("DIV");
                                    newItem.id = 'snapinChatPopUpMsg';
                                    var embeddedSLAChatInput = document.querySelector(".dockableContainer .embeddedServiceLiveAgentStateChatInputFooter");
                                    //embeddedSLAChatInput.insertBefore(newItem, embeddedSLAChatInput.childNodes[0]);
                                    embeddedSLAChatInput.parentNode.insertBefore(newItem, embeddedSLAChatInput);
                                    innerVal ='<span style="float: left;margin: 11px;fill:#0A6EBE;"><svg x="0px" y="0px" width="20px" height="20px" viewBox="0 0 416.979 416.979" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/></g></svg></span><span class="cusPreChat-x-small cusPreChat-embeddedServiceIcon" id="btnCloseSnapinPopMsg" style="float:right;padding:5px;cursor:pointer;"> <svg focusable="false" aria-hidden="true" data-key="close" viewBox="0 0 120 120" style="fill:#333"> <path d="M65.577 53.73l27.5-27.71c1.27-1.27 1.27-3.174 0-4.445l-4.23-4.44c-1.272-1.27-3.175-1.27-4.445 0L56.694 44.847c-.847.845-2.115.845-2.96 0L26.018 16.922c-1.27-1.27-3.174-1.27-4.445 0l-4.44 4.442c-1.27 1.27-1.27 3.174 0 4.444l27.71 27.71c.846.846.846 2.116 0 2.962L16.923 84.403c-1.27 1.27-1.27 3.174 0 4.444l4.442 4.442c1.27 1.268 3.174 1.268 4.444 0l27.71-27.713c.846-.847 2.116-.847 2.962 0L84.19 93.29c1.27 1.268 3.174 1.268 4.445 0l4.44-4.445c1.27-1.268 1.27-3.17 0-4.44l-27.5-27.712c-.847-.847-.847-2.115 0-2.96z"></path></svg></span><p style="text-align:left;padding:7px;margin:0;font-size:13px;background:#DFF1FE;border-top:1px solid #0A6EBE;border-bottom:1px solid #0A6EBE;color:#333;">'+snapinPopInputMsg+'</p>';
                                    document.getElementById("snapinChatPopUpMsg").innerHTML=innerVal;
    
                                    var btnCloseSnapinPopMsg = document.getElementById("btnCloseSnapinPopMsg");
                                            btnCloseSnapinPopMsg.addEventListener("click", function () {
                                            document.getElementById("snapinChatPopUpMsg").style.display = "none";
                                        });
                                }else if (snapinChasnapinCHatEnded){
                                    snapinChatPopUpMsgDom.style.display = "none";
                                }
                            }, 50);
}
//BNR0202 [END]
function waitChatCounter(eleSelector, findingEle, counterValue) {
    try {
        if (typeof (dellmetricsTrack) == "function") {
            if (dellmetricsTrack) {
                if (counterValue != document.querySelector(eleSelector).innerText) {
                    dellmetricsTrack("890.220.012", "Queue number: " + document.querySelector(eleSelector).innerText);
                    clearInterval(findingEle);
                    if (document.querySelector(eleSelector).innerText > 0 && document.querySelector(eleSelector).innerText != "You're up next!") {
                        eleExistWithVariable('.dockableContainer .embeddedServiceLiveAgentStateWaiting .waitingStateContainer .waitingStateContent .queuePositionContent .header', waitChatCounter, document.querySelector(eleSelector).innerText);
                    }
                }
            } else {
                clearInterval(findingEle);
            }
        } else {
            clearInterval(findingEle);
        }
    } catch (e) {
        console.log("Error in:" + e);
    }
}
function eleExistWithVariable(eleSelector, callbackFunc, value) {
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle, value);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}
function snapinPrechatLoaded(eleSelector, findingEle) {
    try {
        if (document.getElementById("loadingSnapinMsg"))
            removeDomElement(document.getElementById("loadingSnapinMsg"));
        clearInterval(findingEle);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

function removeDomElement(DomElement) {
    DomElement.parentNode.removeChild(DomElement);
}
function initLiveAgent(liveAgentObject) {
    try {
        $.getScript(liveAgentObject.deploymentUrl, function () {
            liveagent.enableLogging();
            liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
            if (!window._laq) {
                window._laq = [];
            }
            window._laq.push(function () {
                liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
                liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
                if ("serviceTag" in liveAgentObject)
                    liveagent.addCustomDetail('serviceTag', liveAgentObject.serviceTag);
            });
        });
    } catch (e) {
        console.log('error:' + e);
    }
}
function initLiveAgentWithoutPrechatForm(liveAgentObject, callbackOnline, callbackOffline) {
    try {
        delete window.liveagent;
        delete window.liveAgentDeployment;
        $.getScript(liveAgentObject.deploymentUrl, function () {
            //BNR
            callDellmetricsTrack("890.220.078");
            liveagent.enableLogging();
            liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
            if (!window._laq) {
                window._laq = [];
            }
            window._laq.push(function () {
                liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
                liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
                if ("serviceTag" in liveAgentObject)
                    liveagent.addCustomDetail('serviceTag', liveAgentObject.serviceTag).saveToTranscript('Service_Tag__c');
                liveagent.addCustomDetail("First Name", liveAgentObject.firstName).saveToTranscript('FirstName__c');
                liveagent.addCustomDetail("Last Name", liveAgentObject.lastName).saveToTranscript('LastName__c');
                liveagent.addCustomDetail("Phone Number", liveAgentObject.phoneNumber).saveToTranscript('ContactNumber__c');
                liveagent.addCustomDetail("Email ID", liveAgentObject.emailId).saveToTranscript('Email__c');
                liveagent.addCustomDetail("Issue Type", liveAgentObject.issueType).saveToTranscript('Issue__c');
                liveagent.addCustomDetail("Issue Description", liveAgentObject.issueDescription).saveToTranscript('Description__c');
                liveagent.findOrCreate("Asset").map("Asset__c", liveAgentObject.serviceTag, true, false, false).showOnCreate();
                liveagent.setName(liveAgentObject.firstName + ' ' + liveAgentObject.lastName);
            });
            checkifLiveAgentButtonIsOnline(liveagent, liveAgentObject, callbackOnline, callbackOffline);
        });
    } catch (e) {
        console.log('error:' + e);
    }
}
function checkifLiveAgentButtonIsOnline(liveagent, liveAgentObject, callbackOnline, callbackOffline) {
    liveagent.addButtonEventHandler(liveAgentObject.buttonId, function (e) {
        if (e == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE) {
            callbackOnline();
            return;
        } else if (e == liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE) {
            callbackOffline();
            return;
        }
    });
}
function initResumeLiveAgent(liveAgentObject) {
    if (!window._laq) {
        window._laq = [];
    }
    window._laq.push(function () {
        liveagent.showWhenOnline(liveAgentObject.buttonId, document.getElementById('liveagent_button_online_' + liveAgentObject.buttonId));
        liveagent.showWhenOffline(liveAgentObject.buttonId, document.getElementById('liveagent_button_offline_' + liveAgentObject.buttonId));
    });
    liveagent.addCustomDetail('deltaSr', liveAgentObject.srNumber).saveToTranscript('Delta_Sr__c');
    liveagent.findOrCreate("Case").map("Delta_SR__c", "deltaSr", true, false, true).showOnCreate();
    liveagent.init(liveAgentObject.liveAgentInitUrl, liveAgentObject.deploymentId, liveAgentObject.organizationId);
    liveagent.setName(liveAgentObject.firstName + ' ' + liveAgentObject.lastName);
}
function startLiveAgentChat(buttonId) {
    //BNR
    callDellmetricsTrack("890.220.077");
    liveagent.startChat(buttonId);
}
function eleExist(eleSelector, callbackFunc) {
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}