/*global QUnit*/

sap.ui.define([
	"ns/POList/controller/POINF.controller"
], function (Controller) {
	"use strict";

	QUnit.module("POINF Controller");

	QUnit.test("I should test the POINF controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});