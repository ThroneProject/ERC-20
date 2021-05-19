const ThroneERC20 = artifacts.require("ThroneERC20");
const BigNumber = require('bignumber.js');

module.exports = async function (deployer) {
  const token = await ThroneERC20.deployed();
  const decimals = (await token.decimals()).toNumber();
  const fm = new BigNumber(10).pow(decimals);

  await token.mint("0x326262E558082eD41aB52A3b1Fae99e49629c8FC", new BigNumber("1214132192.5").times(fm));
  await token.mint("0x4fCD4e87Fcfb37f9d8AB10bB8306b5170606d2BA", new BigNumber("360291260.4").times(fm));
  await token.mint("0xe2080E14383604c3837a527de7C36C2B298218D2", new BigNumber("251710332.6").times(fm));
  await token.mint("0xf6aF7c4062D74bF62513Cd910413d7638BEC748b", new BigNumber("148064901.5").times(fm));
};
