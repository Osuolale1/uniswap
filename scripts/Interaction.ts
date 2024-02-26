import { ethers } from 'hardhat';
const helpers = require('@nomicfoundation/hardhat-network-helpers');

const main = async () => {
    const USDCAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
    const DAIAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

    const USDCHolder = '0xf584f8728b874a6a5c7a8d4d387c9aae9172d621';
    await helpers.impersonateAccount(USDCHolder);
    const impersonatedSigner = await ethers.getSigner(USDCHolder);

    const USDC = await ethers.getContractAt('IERC20', USDCAddress, impersonatedSigner);
    const DAI = await ethers.getContractAt('IERC20', DAIAddress);

    // Approve the Uniswap router to spend USDC on behalf of the user
    const amountToApprove = ethers.utils.parseUnits('2000', '6'); // Example amount to approve
    await USDC.approve(UNIRouter, amountToApprove);

    // Get the balance of USDC and DAI tokens for the user
    const usdcBalance = await USDC.balanceOf(impersonatedSigner.address);
    const daiBalance = await DAI.balanceOf(impersonatedSigner.address);

    console.log('USDC balance:', usdcBalance.toString());
    console.log('DAI balance:', daiBalance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
