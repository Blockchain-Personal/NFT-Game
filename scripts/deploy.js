const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["KernelPanic", "InfiniteLoop", "SegmentationFault"],       // Names
        ["https://raw.githubusercontent.com/rya-sge/myNFTCollection/main/coll2/InfinieLoop.png", // Images
            "https://raw.githubusercontent.com/rya-sge/myNFTCollection/main/coll2/KernelPanic.png",
            "https://raw.githubusercontent.com/rya-sge/myNFTCollection/main/coll2/SegmentationFault.png"],
        [100, 200, 300],                    // HP values
        [100, 60, 35]      ,
        "C++11", // Boss name
        "https://raw.githubusercontent.com/rya-sge/myNFTCollection/main/coll2/tractor.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage                 // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();


    console.log("Done deploying and minting!");



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
