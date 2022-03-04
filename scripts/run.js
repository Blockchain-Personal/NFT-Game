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


    let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

// Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);

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
