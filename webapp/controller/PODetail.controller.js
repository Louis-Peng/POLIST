sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/m/library"
], function (Controller, History, UIComponent, mobileLibrary) {
	"use strict";
	return Controller.extend("ns.BSP11.controller.PODetail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
        
        _onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").poPath),
				model: "purchaseorder"
            });
            console.log(this.getView().getModel("purchaseorder").getData());
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
        },

		formatMail: function(sEmail, sContactPerson) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sEmail,
				oBundle.getText("mailSubject", [sContactPerson]),
				oBundle.getText("mailBody"));
		}
	});
});