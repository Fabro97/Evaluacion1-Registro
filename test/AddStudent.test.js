const { ethers } = require("hardhat");
const fs = require('fs');
const path = require('path');
const { expect } = require("chai");

// Contract to deploy
const contractAddress = process.env.GANACHE_REGISTRY_CONTRACT_ADDRESS;
let contractInstance;

describe("AddUser test",() =>{
    Before(async ()=> {
        // Get provider and signer
        const [signer] = await ethers.getSigners();
        
        // Get contract instance
        const contractABIPath = path.resolve(process.cwd(), "artifacts/contracts/StudentRegistry.sol/StudentRegistry.json");
        const contractArtifact = JSON.parse(fs.readFileSync(contractABIPath, 'utf8'));
        contractInstance  = new ethers.Contract(contractAddress, contractArtifact.abi, signer);
        
        if (contractInstance == null) {
            throw new Error("-- No contract at address ", contractAddress);
        }
    }); //Una vez antes de hacer ningun test

    BeforeEach();//Antes de cada uno de los test

    it("AddUser 111111",async () => {
        contractInstance.addStudent(111111);
        expect.fail(
            "Fallo"
        )
    });

    AfterEach();//Cada vez que finaliza uno de los test
    After(); //Una vez finalizado todos los test

});