"use strict";

const mediator = require("../mixins/mediator.mixin");

module.exports = {
	name: "receiver",
	mixins: [mediator],

	actions: {
		receive: {
			async handler() {
				this.getDataFromMicroservices();
				return {
					status: 1,
					message: "MESSAGE PUBLISHED",
				};
			}
		}
	}
};
