sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("logaligroup.invoices.controller.mainView", {
			onInit: function () {
            const oJsonModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJsonModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJsonModel,"selectionScreen")

			}
		});
	});
