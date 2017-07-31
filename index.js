var fs = require("fs");
var path = require("path");
var Promise = require("bluebird");

function getPackageInfo(module_name, work_dir) {
	return Promise.resolve()
		.then(function () {
			if (!work_dir) {
				work_dir = process.cwd();
			}
			else {
				work_dir = path.resolve(work_dir);
			}

			var package_json;

			if (fs.existsSync(path.resolve(work_dir, "./node_modules"))) {
				var module_dir = path.resolve(work_dir, "./node_modules/" + module_name);

				if (fs.existsSync(module_dir) && fs.existsSync(module_dir + "/package.json")) {
					package_json = JSON.parse(fs.readFileSync((module_dir + "/package.json") + ""));
				}
			}

			if (!package_json && work_dir != "/") {
				return getPackageInfo(module_name, path.resolve(work_dir, ".."));
			}

			return package_json;
		});
}

module.exports = getPackageInfo;
