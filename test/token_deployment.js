const ThroneERC20 = artifacts.require("ThroneERC20");
const chai = require('chai');
const expect = chai.expect;
const { default: BigNumber } = require('bignumber.js');
chai.use(require('chai-bignumber')(BigNumber));


contract("Deployment", async accounts => {
  it("should have name, symbol, and decimals set correctly", async () => {
    sut = await ThroneERC20.deployed();

    expect(sut).to.not.be.undefined;

    const actualName = await sut.name();
    const actualSymbol = await sut.symbol();
    const actualDecimals = (await sut.decimals()).toNumber();

    expect(actualName).to.be.equal("Throne");
    expect(actualSymbol).to.be.equal("TRN");
    expect(actualDecimals).to.be.equal(18);
  });

  it("should distribute tokens in accordance with the requirements", async () => {
    sut = await ThroneERC20.deployed();
    const multiplier = new BigNumber(10).pow(18);


    const balance1 = (await sut.balanceOf("0x326262E558082eD41aB52A3b1Fae99e49629c8FC")).toString()
    const balance2 = (await sut.balanceOf("0x4fCD4e87Fcfb37f9d8AB10bB8306b5170606d2BA")).toString()
    const balance3 = (await sut.balanceOf("0xe2080E14383604c3837a527de7C36C2B298218D2")).toString()
    const balance4 = (await sut.balanceOf("0xf6aF7c4062D74bF62513Cd910413d7638BEC748b")).toString()

    expect(balance1).to.be.equal(new BigNumber("1214132192.5").times(multiplier).toFixed());
    expect(balance2).to.be.equal(new BigNumber("360291260.4").times(multiplier).toFixed());
    expect(balance3).to.be.equal(new BigNumber("251710332.6").times(multiplier).toFixed());
    expect(balance4).to.be.equal(new BigNumber("148064901.5").times(multiplier).toFixed());
  });
});
