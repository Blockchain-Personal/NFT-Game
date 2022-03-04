const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["KernelPanic", "InfiniteLoop", "SegmentationFault"],       // Names
        ["https://github.com/rya-sge/myNFTCollection/blob/main/coll2/InfinieLoop.png", // Images
            "https://github.com/rya-sge/myNFTCollection/blob/main/coll2/KernelPanic.png",
            "https://github.com/rya-sge/myNFTCollection/blob/main/coll2/SegmentationFault.png"],
        [100, 200, 300],                    // HP values
        [100, 60, 35]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
