# Description

A library to search and load a node module's package.json.


# Usage

	var pj = require("node-packagejson");

    var packagejson = pj("mocha");

    console.log("packagejson", packagejson);

	// see the test cases for more examples

# Use case

Detect the version of the dependency library you are using in your application during startup rather allowing a bug or crash to happen.

Usually useful for utility libraries with optional dependencies (not mentioned in the app's own package.json).

	var pj = require("node-packagejson");
	var semver = require("semver");

    var packagejson = pj("another_lib");

    if (!packagejson || !semver.gt(packagejson.version, "1.0.0")) {
        throw new Error("At least version 1.1.0 of 'another_lib' is required")
    }

