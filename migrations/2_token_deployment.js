const ThroneERC20 = artifacts.require("ThroneERC20");

module.exports = function (deployer) {
  deployer.deploy(ThroneERC20, "Throne", "TRN");
};
