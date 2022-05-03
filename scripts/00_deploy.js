const { ethers } = require("hardhat");
const fs = require('fs');
const path = require('path');

let contractAddress;
contractName = "studentRegistry";

async function main() {
    // Get provider and signer
    const network_URL = process.env.GANACHE_ACCESSPOINT_URL;
    const provider = new ethers.providers.JsonRpcProvider(network_URL); //Tiene la informacion para conectarse al access point, pero no tiene claves privadas para firmar transacciones
    const [signer] = await ethers.getSigners();
    
    //Deploy Contract
    const contractPath = "contracts/" + contractName + ".sol:" + contractName; // Se hace asi para poder cambiar de contrato facilmente.    
    const contractFactory = await ethers.ContractFactory(contractPath,signer);
    const contractInstance = await contractFactory.Deploy(); //Se podrian agregar como parametro los parametros que tenga el constructor del contrato, 
                                                             //separados por comas en caso de tener varios

    //Check transaction result
    const tx = contractInstance.deployTransaction.hash;
    const confirmationNumber = 1; //Para asegurarnos de que algo este minado tiene que estar entre 6 y 8
    const tx_result = await provider.waitForTransaction(tx,confirmationNumber);
    if (tx_result < confirmationNumber || tx_result === undefined) {
        throw new Error("-- No contract at address ", contractAddress);
    }
    
    console.log("---------------------------------------------------------------------------------------");
    console.log("-- Contract deployed");
    console.log("-- Contract address:",contractInstance.contractAddress);
    console.log("---------------------------------------------------------------------------------------");
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});