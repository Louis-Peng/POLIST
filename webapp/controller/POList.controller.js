sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ns.BSP11.controller.POList", {
        formatter: 
            formatter,

		// onInit : function () {
        // },

        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{
                poPath: window.encodeURIComponent(oItem.getBindingContext("purchaseorder").getPath().substr(1))
            });
		},
        
		onFilterPurchaseorders : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
                // aFilter.push(new Filter("CompanyOrder", FilterOperator.Contains, sQuery));
                // aFilter.push(new Filter("Order", FilterOperator.Contains, sQuery));
  aFilter=new Filter({
    filters: [
      new Filter({
        path: 'CompanyOrder',
        operator: FilterOperator.Contains,
        value1: sQuery
      }),
      new Filter({
        path: 'Order',
        operator: FilterOperator.Contains,
        value1: sQuery
      }),
      new Filter({
        path: 'Status',
        operator: FilterOperator.Contains,
        value1: sQuery
      })
    ],
    and: false
  })
			}



			// filter binding
			var oList = this.byId("polist");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});