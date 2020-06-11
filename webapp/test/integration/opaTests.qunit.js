/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/BSP11/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});