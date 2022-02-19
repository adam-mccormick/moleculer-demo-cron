"use strict";

const cron = require("moleculer-cron");

module.exports = {
	mixins: [cron],

	crons: [
		{
			name: "JobHelloWorld",
			cronTime: "* * * * *",
			manualStart: true,
			async onTick() {
				await this.call("jobs.say");
			},
		}
	],
	methods: {
		getDataFromMicroservices() {
			this.getJob("JobHelloWorld").start();
		}
	}
};
