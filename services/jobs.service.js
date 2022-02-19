"use strict";

module.exports = {
	name: "jobs",

	actions: {
		say: {
			handler() {
				this.logger.info("HELLO");
			}
		}
	}
};
