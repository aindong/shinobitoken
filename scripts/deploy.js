async function main() {
  // We get the contract to deploy
  const ShinobiToken = await hre.ethers.getContractFactory("ShinobiToken");
  const shin = await ShinobiToken.deploy();

  await shin.deployed();

  console.log("ShinobiToken deployed to:", shin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
