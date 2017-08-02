var assert = require("assert");

describe("#getPackageInfo", function () {
	it ("Find a node module and load package.info", function () {
		var package_json = require("../index");

		var json = package_json("mocha");

		console.log("json", json);

		assert.ok(json);
	});

	it ("Find a node module and load package.info", function () {
		var package_json = require("../index");

		var json = package_json("missing");

		console.log("json", json);

		assert.ok(json);
	});
});