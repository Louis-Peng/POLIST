sap.ui.define([
    "sap/ui/core/library"
], function (coreLibrary) {
    "use strict";
    
    var ValueState = coreLibrary.ValueState;

	return {
        //Status
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("POStatusA");
				case "B":
					return resourceBundle.getText("POStatusB");
				case "C":
					return resourceBundle.getText("POStatusC");
				default:
					return sStatus;
			}
        },
        
        //Amount State
        amountState: function(iValue) {
			if (iValue === 0) {
				return ValueState.Error;
			} else if (iValue >= 500) {
				return ValueState.Warning;
			} else {
				return ValueState.Success;
			}
		}
	};
});