const fs = require("fs");
const fse = require("fs-extra");
const childProcess = require("child_process");

childProcess.exec("npm install", (error, stdout, stderr) => {
	if (fs.existsSync("./build")) {
		fse.removeSync("./build");
	}

	childProcess.execSync("vue-cli-service build", { stdio: "inherit" });

	fse.moveSync("./build", "./server/build", { overwrite: true });
	fse.copySync("./pull.php", "./server/build/pull.php");
});
