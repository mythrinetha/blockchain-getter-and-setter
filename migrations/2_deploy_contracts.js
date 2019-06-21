const Migrations = artifacts.require("Courses");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
