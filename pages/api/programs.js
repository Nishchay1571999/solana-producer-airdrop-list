import * as solanaWeb3 from "@solana/web3.js";

const MAIN_NET = solanaWeb3.clusterApiUrl("devnet");
const solanaConnection = new solanaWeb3.Connection(MAIN_NET);

const radium_liquiditypool = new solanaWeb3.PublicKey(
  "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"
);

const programFinderHandler = async () => {
  try {
    const programDetails = await solanaConnection.getProgramAccounts(
      radium_liquiditypool
    );
    console.log(programDetails);
    // return programDetails;
  } catch (error) {
    console.log("Error:", error);
    // return error;
    // return res.status(500).json({
    //   error: "Server error",
    // });
  }
};

export default programFinderHandler;
