const { ethers } = require("hardhat");
const fs = require('fs');
const path = require('path');

// Contract to deploy
const contractAddress = process.env.RINKEBY_REGISTRY_CONTRACT_ADDRESS;

async function main() {
    // Get provider and signer
    const [signer] = await ethers.getSigners();
    
    // Get contract instance
    const contractABIPath = path.resolve(process.cwd(), "artifacts/contracts/StudentRegistry.sol/StudentRegistry.json");
    const contractArtifact = JSON.parse(fs.readFileSync(contractABIPath, 'utf8'));
    const contractInstance  = new ethers.Contract(contractAddress, contractArtifact.abi, signer);
    
    if (contractInstance == null) {
        throw new Error("-- No contract at address ", contractAddress);
    }
    
    console.log("---------------------------------------------------------------------------------------");
    console.log("-- Get task score by task number");
    console.log("---------------------------------------------------------------------------------------");

    //------------------------------------------------------------------------
    // ESCRIBA SU CÓDIGO ENTRE LAS LÍNEAS PUNTEADAS. DEBAJO DE CADA COMENTARIO
    //------------------------------------------------------------------------

    // Llame al método para obtener el puntaje de una tarea segun su numero de tarea.
    const taskNumber = 1; //Iria el numero de la tarea a entregar
    const taskScore = await contractInstance.getTaskScoreByTaskNumber(taskNumber);
    console.log("");
    console.log("-- The score for task ",taskNumber, " is :",taskScore);
    //------------------------------------------------------------------------
    
    console.log("---------------------------------------------------------------------------------------");
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});