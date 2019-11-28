﻿(function () {
    var initESW;
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);

    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;

})();


function triggerPartnerPortalSnapin_DPP(partnerPortalDetails) {
    try {            
			let sfdcSnapinDetails = {
					//Chat 
					baseLiveAgentContentURL: 'https://c.la2-c1cs-ord.salesforceliveagent.com/content',
					deploymentId: '5720b000000CbfS',
					baseLiveAgentURL: 'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I0x0000008OPzEAM_16d81041603',             
                    componentName: "Partner_Portal_Snap_ins",
                    organizationId: "00D0x0000000WEw",
                    snapInInitURL: 'https://dellservices--Chat.my.salesforce.com',
                    snapInJs: "https://service.force.com/embeddedservice/5.0/esw.min.js",
                    snapInLAURL: 'https://chat-dellservices.cs95.force.com/LASnapIn', 
					
					//DEV2
					snapInInitURL: 'https://dellservices--DEV2.my.salesforce.com',
					snapInLAURL: 'https://dev2-dellservices.cs45.force.com/LASnapIn',
					organizationId: '00D8A00000057oF',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la2-c2cs-ph2.salesforceliveagent.com/content',
					deploymentId: '5720b000000GneC',
					baseLiveAgentURL: 'https://d.la2-c2cs-ph2.salesforceliveagent.com/chat',
					eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I8A0000004CE8UAM_16e214e1296',
					snapInJs: 'https://dellservices--DEV2.my.salesforce.com/embeddedservice/5.0/esw.min.js',
					/*
					//SIT2
					snapInInitURL: 'https://dellservices--SIT2.my.salesforce.com',
					snapInLAURL: 'https://sit2-dellservices.cs36.force.com/LASnapIn',
					organizationId: '00D2h0000008aOa',
					componentName: 'Partner_Snap_In',
					baseLiveAgentContentURL: 'https://c.la3-c2cs-ph2.salesforceliveagent.com/content',
                    deploymentId: '5720b000000GneC',
                    baseLiveAgentURL: 'https://d.la3-c2cs-ph2.salesforceliveagent.com/chat',
                    eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I2h0000004CBOEA2_16e7ea2ec9b',
					snapInJs: 'https://dellservices--SIT2.my.salesforce.com/embeddedservice/5.0/esw.min.js',
                    */
					//fixed object values
					buttonId: routingConfig_DPP(partnerPortalDetails),
					issueSubject: partnerPortalDetails.productGroup +" - "+ partnerPortalDetails.productType,
					logsCollected: checkLogGrants_DPP(partnerPortalDetails),
					logTypeMultiPickList: convertLogToMultiPickList_DPP(partnerPortalDetails),
					concatenatedDescription: concatenatDescription_DPP(partnerPortalDetails),
					casePriority: convertToPriority_DPP(partnerPortalDetails.caseSeverity),
					serviceForceURL: "https://service.force.com",
		}
            var initESW = function (gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = false;//true;
                embedded_svc.settings.language = "en";
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
                //embedded_svc.settings.storageDomain = sfdcSnapinDetails.domainName;
                embedded_svc.settings.defaultMinimizedText = 'Chat Now';
                
                embedded_svc.settings.directToButtonRouting = routingConfig_DPP(partnerPortalDetails);

				 embedded_svc.settings.extraPrechatFormDetails = [{
						"label": "Type",
						"value": 'Partner',
						"transcriptFields": ["Type__c"]
					},{
						"label": "Chat Source",
						"value": chatSourceValDPP(partnerPortalDetails.productGroup),
						"transcriptFields": ["Chat_Source__c"]
					},{
						"label": "Service Tag",
						"value": partnerPortalDetails.serviceTag,
						"transcriptFields": ["Service_Tag__c"]
					},{
						"label": "Service Tag",
						"value": partnerPortalDetails.serviceTag,
						"transcriptFields": ["Asset__c"],
						"displayToAgent": false

					},{
						"label": "DPId",
						"value": partnerPortalDetails.dpid,
						"transcriptFields": ["PP_DPId__c"]
					},
					{
						"label": "Subject",
						"value": sfdcSnapinDetails.issueSubject,
						"transcriptFields": ["Issue__c"]
					},{
						"label":  "Issue Description",
						"value": sfdcSnapinDetails.concatenatedDescription,
						"transcriptFields": ["Description__c"]
					},{
						"label":  "Description",
						"value": partnerPortalDetails.issueDescription,
						"transcriptFields": ["Collaborate_Description__c"]
					},{
                        "label": "First Name",
                        "name": "FirstName",
                        "value": partnerPortalDetails.firstName,
                        "transcriptFields": ["FirstName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Last Name",
                        "value": partnerPortalDetails.lastName,
                        "transcriptFields": ["LastName__c"],
                        "displayToAgent": true
                    },{
                        "label": "Email Address",
                        "value": partnerPortalDetails.email,
                        "transcriptFields": ["Email__c"]
                    },{
                        "label": "Agent Name",
                        "value": partnerPortalDetails.loginId,
                        "transcriptFields": ["Agent_Name__c"],
                        "displayToAgent": true
					},{
						"label":  "Badge",
						"value":  partnerPortalDetails.badgeId,
						"transcriptFields": ["PP_Badge__c"]
					},{
						"label":  "Location",
						"value": partnerPortalDetails.region,
						"transcriptFields": ["PP_Location__c"]
					},{
						"label":  "Service Request",
						"value": partnerPortalDetails.caseNumber,
						"transcriptFields": ["PP_Service_Request__c"]
					},{
						"label":  "Case Number",
						"value": partnerPortalDetails.caseNumber,
						"transcriptFields": ["Case_Number__c"]
					},{
						"label":  "Product",
						"value": partnerPortalDetails.productName,
						"transcriptFields": ["PP_Product__c"]
					},{
						"label":  "Case Priority",
						"value": sfdcSnapinDetails.casePriority,
						"transcriptFields": ["PP_Priority__c"]
					},{
						"label":  "Customer on the Phone?",
						"value": partnerPortalDetails.customerOnThePhone,
						"transcriptFields": ["PP_Customer_on_the_Phone__c"]
					},{
						"label":  "Driver/Firmware updated?",
						"value": partnerPortalDetails.driverFirmwareUpdated,
						"transcriptFields": ["PP_Driver_Firmware_updated__c"]
					},{
						"label":  "Logs Collected",
						"value": sfdcSnapinDetails.logsCollected,
						"transcriptFields": ["PP_Logs_Collected__c"]
					},{
						"label":  "Log Type",
						"value": sfdcSnapinDetails.logTypeMultiPickList,
						"transcriptFields": ["PP_Log_Type__c"]
					},{
						"label":  "Record Type",
						"value": "0120b000000IiF6",//DEV2 = "0120b000000IiF6", SIT2 = "0120b000000IiF6" Need to change for each environment
						"transcriptFields": ["RecordType"]
					}
				];
				 embedded_svc.settings.extraPrechatInfo = [{
					"entityFieldMaps": [{
						"doCreate": false,
						"doFind": true,
						"fieldName": "Name",
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
						"label": "Issue Description"
					}
				],
				"entityName": "Case"
				}
				];
				embedded_svc.addEventHandler("onChatRequestSuccess", function (data) {
                    $("body").on('DOMNodeRemoved', function(e) {
                        if(e.target.className){
                            className = e.target.className.split(" ");
                            if(className[0] === "modalContainer")
                                location.reload();
                        }	
                    });
                /*
                    let bgLoader = document.getElementById('overlay');
                    if(bgLoader)
                        bgLoader.style.display = "none"; 
                */
               $('.overlay-content').hide();
                });

                embedded_svc.init(sfdcSnapinDetails.snapInInitURL, sfdcSnapinDetails.snapInLAURL, gslbBaseURL, sfdcSnapinDetails.organizationId, sfdcSnapinDetails.componentName, {
                    baseLiveAgentContentURL: sfdcSnapinDetails.baseLiveAgentContentURL,
                    deploymentId: sfdcSnapinDetails.deploymentId,
                    buttonId: sfdcSnapinDetails.buttonId,
                    baseLiveAgentURL: sfdcSnapinDetails.baseLiveAgentURL,
                    eswLiveAgentDevName: sfdcSnapinDetails.eswLiveAgentDevName,
                    isOfflineSupportEnabled: false
                });

                eleExist_DPP('#helpButtonSpan > .message', chatClick_DPP);
            };
            if (!window.embedded_svc) {
                var s = document.createElement('script');
                s.setAttribute('src', sfdcSnapinDetails.snapInJs);
                s.onload = function () {
                    initESW(null);
                };
                document.body.appendChild(s);
            } else {
                initESW(sfdcSnapinDetails.serviceForceURL);
            }
    } catch (e) {
        console.log("Error in: " + e);
    }
}
function chatSourceValDPP(productGroup){
	var returnValue = "Partner-"+productGroup;
	return returnValue;
}
//Click on chat button
function chatClick_DPP(eleSelector, findingEle, waitCounter) {
    try {
            if (document.querySelector(eleSelector).innerText === 'Chat Now'){
                document.querySelector(eleSelector).click();
                clearInterval(findingEle);
            }
            else if (waitCounter > 20){
                clearInterval(findingEle);
                 
                var path = window.location.href;
                var result = path.substring(0, path.lastIndexOf('/'));
                console.log(result);
                window.open(result+"/closed.html", "_self"); 
            }else
                console.log("Searching for Agents = " + waitCounter);
    } catch (e) {
        console.log("Error in:" + e);
    }
}

//If element Exist Run function
function eleExist_DPP(eleSelector, callbackFunc) {
    let waitCounter = 0;
    var findingEle = setInterval(function () {
        if (document.querySelector(eleSelector)) {
            try {
                callbackFunc(eleSelector, findingEle,waitCounter++);
            } catch (e) {
                console.log('error in ' + callbackFunc + ' function: ' + e);
            }
        }
    }, 1000);
}


//Log Grants optimization
function checkLogGrants_DPP(partnerPortalDetails){
		let returnVal;
		if (partnerPortalDetails.logsGathered)
			returnVal = "Yes";
		else
			returnVal = "No - " + partnerPortalDetails.logTypes;
			return returnVal;

}

//Convert Log to Multi Pick List
function convertLogToMultiPickList_DPP(partnerPortalDetails){
	let returnVal;
		if (partnerPortalDetails.logsGathered)
			returnVal = convertSeparatorToMultiPickList_DPP(partnerPortalDetails.logTypes);
		else
			returnVal = null;
		return returnVal;
}

//Convert Sepatator to Semicolom
function convertSeparatorToMultiPickList_DPP(logTypes){
	var returnLogType;
	var logTypesArr = logTypes.split("Other: ");
	if(logTypesArr[1]){
		var logTypesArr1 = logTypesArr[1].replace(/[|]/g, " or ");
		var logTypesArr2 = logTypesArr1.replace(/[;]/g, ",");
		var logTypesArr3 = logTypesArr[0] + "Other: " + logTypesArr2;
		returnLogType = logTypesArr3.replace(/[|]/g, ";");
	}else{
		var logTypesArr3 = logTypesArr[0]
		returnLogType = logTypesArr3.replace(/[|]/g, ";");
	}
	return returnLogType;
}

//concatenat Description
function concatenatDescription_DPP(partnerPortalDetails){
	let description = "Customer on the Phone? " + (partnerPortalDetails.customerOnThePhone ? "Yes" : "No") + " | Driver/Firmware updated? " + (partnerPortalDetails.driverFirmwareUpdated ? "Yes" : "No")  + " | Logs Collected? " + checkLogGrants_DPP(partnerPortalDetails) + (partnerPortalDetails.logsGathered ? " - " + convertLogToMultiPickList_DPP(partnerPortalDetails) : "") + " | Issue Description : "+ partnerPortalDetails.issueDescription
	return description;
}

// Convert Sev to Priority
function convertToPriority_DPP(caseSeverity){
	let returnVal;
	switch(caseSeverity) {
		case "1":
			returnVal = "Critical";
			break;
		case "2":
			returnVal = "High";
			break;
		case "3":
			returnVal = "Medium";
			break;
		case "4":
			returnVal = "Low";
			break;
		default:
			returnVal = "Medium";
	}
	return returnVal;
}

//Routing Config
function routingConfig_DPP(partnerPortalDetails){
	console.log(partnerPortalDetails);
	var buttonID;
	if (partnerPortalDetails.productGroup === "GTT"){
		//STORY 7592112: FY20_Channels : Chat : Partner Portal : GTT_Create Queues on Lightning [START]
		switch(partnerPortalDetails.productType) {
		  case "Global Tag Team":
			//buttonID = "5738A0000008Om2";//GL_DB_INTB_MIX_CH_MU_BLND_GTT
			buttonID = "5730b000000PnCo";//SIT 2
			break;
		  case "LATAM Tag Team":
			//buttonID = "5738A0000008Olx";//DEV 2 LA_DB_INTB_MIX_CH_MU_BLND_GTT
			buttonID = "5730b000000PnCp";//SIT 2
			break;
		  case "OEM Tag Team":
			//buttonID = "5738A0000008Om7"; //DEV2 GL_DB_INTB_MIX_CH_EN_BLND_OEMGTT
			buttonID = "5730b000000PnCn";//SIT 2
			break;
		  case "OEM":
			//buttonID = "5738A0000008Om7"; //DEV2 GL_DB_INTB_MIX_CH_EN_BLND_OEMGTT
			buttonID = "5730b000000PnCn";//SIT 2
			break;
		  case "Fed":
			//buttonID = "5738A0000008OmH"; //DEV2 NA_DB_INTB_MIX_CH_EN_BLND_FEDGTT
			buttonID = "5730b000000PnCq";//SIT 2
			break;
		  default:
			//buttonID = "5738A0000008Om2";//DEV2 GL_DB_INTB_MIX_CH_MU_BLND_GTT
			buttonID = "5730b000000PnCo";//SIT 2
			}
		//STORY 7592112: FY20_Channels : Chat : Partner Portal : GTT_Create Queues on Lightning [END]
	}else if (partnerPortalDetails.productGroup === "Mixed IP") {
		//STORY 7248769 : FY20_Channels : Chat : Partner Portal : VCE_Create Queues on Lightning  [START]
		switch(partnerPortalDetails.productType) {
		  case "Azure":
			//buttonID = "5730R0000004FfB";//DEV2 GL_DB_INTB_ENT_CH_EN_BLND_SST_MSFT
			buttonID = "5731P000000TSWY";//SIT 2
			break;
		  case "PowerOne Network":
			//buttonID = "5730R0000004Ff2";//DEV2 GL_DB_INTB_ENT_CH_EN_BLND_NTWK
			buttonID = "5731P000000TSWP";//SIT 2
			break;
		  default:
			//buttonID = "5730R0000004Ff5";//GL_DB_INTB_ENT_CH_EN_BLND_SRVR_CPSD
			buttonID = "5731P000000TSWV";//SIT 2
            }
		//STORY 7248769 : FY20_Channels : Chat : Partner Portal : VCE_Create Queues on Lightning  [END]
    }
    buttonID = "5738A0000008Om2";
	return buttonID;
}