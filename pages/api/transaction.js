import * as solanaWeb3 from "@solana/web3.js";

const DEV_NET = solanaWeb3.clusterApiUrl("devnet");
const solanaConnection = new solanaWeb3.Connection(DEV_NET);
{
  /**

 data  {
  blockTime: 1686065223,
  meta: {
    computeUnitsConsumed: 7816,
    err: { InstructionError: [Array] },
    fee: 5000,
    innerInstructions: [],
    logMessages: [
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx invoke [1]',
      'Program log: Instruction: RegisterMint',
      'Program log: AnchorError caused by account: mint. Error Code: AccountOwnedByWrongProgram. Error Number: 3007. Error Message: The given account is owned by a different program than expected.',
      'Program log: Left:',
      'Program log: 11111111111111111111111111111111',
      'Program log: Right:',
      'Program log: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx consumed 7816 of 200000 compute units',
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx failed: custom program error: 0xbbf'
    ],
    postBalances: [ 33572583674, 0, 1, 15632160, 1141440, 288122430560, 1412880 ],
    postTokenBalances: [],
    preBalances: [ 33572588674, 0, 1, 15632160, 1141440, 288122430560, 1412880 ],
    preTokenBalances: [],
    rewards: [],
    status: { Err: [Object] },
    loadedAddresses: undefined
  },
  slot: 220966334,
  transaction: {
    message: {
      accountKeys: [Array],
      addressTableLookups: null,
      instructions: [Array],
      recentBlockhash: 'GzBx7BD92Eh7BQupnz3efDLszA13efkn2fSt2Hh9NLEo'
    },
    signatures: [
      '3JEukXGt7Zeum8RypFjbTc1LnxfX2tjXJLHnFk1uG7UEUbwmudduLFkiVgv9MbooPvbsbPfxWK1aVroSspWCLM44'
    ]
  },
  version: undefined
}
Transactions : data  {
  blockTime: 1686065223,
  meta: {
    computeUnitsConsumed: 7816,
    err: { InstructionError: [Array] },
    fee: 5000,
    innerInstructions: [],
    logMessages: [
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx invoke [1]',
      'Program log: Instruction: RegisterMint',
      'Program log: AnchorError caused by account: mint. Error Code: AccountOwnedByWrongProgram. Error Number: 3007. Error Message: The given account is owned by a different program than expected.',
      'Program log: Left:',
      'Program log: 11111111111111111111111111111111',
      'Program log: Right:',
      'Program log: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx consumed 7816 of 200000 compute units',
      'Program AVNAM79VZBogmQLQWWgryaqrWXqooWP9UqUQvo3JRDUx failed: custom program error: 0xbbf'
    ],
    postBalances: [ 33572583674, 0, 1, 15632160, 1141440, 288122430560, 1412880 ],
    postTokenBalances: [],
    preBalances: [ 33572588674, 0, 1, 15632160, 1141440, 288122430560, 1412880 ],
    preTokenBalances: [],
    rewards: [],
    status: { Err: [Object] },
    loadedAddresses: undefined
  },
  slot: 220966334,
  transaction: {
    message: {
      accountKeys: [Array],
      addressTableLookups: null,
      instructions: [Array],
      recentBlockhash: 'GzBx7BD92Eh7BQupnz3efDLszA13efkn2fSt2Hh9NLEo'
    },
    signatures: [
      '3JEukXGt7Zeum8RypFjbTc1LnxfX2tjXJLHnFk1uG7UEUbwmudduLFkiVgv9MbooPvbsbPfxWK1aVroSspWCLM44'
    ]
  },
  version: undefined
}
*/
}
const handler = async (req, res) => {
  const transactionHash = req.body.transactionHash;
  if (!transactionHash) {
    return res.status(401).json({
      error: "Invalid transaction hash",
    });
  }
  try {
    const transaction = await solanaConnection.getParsedTransaction(
      transactionHash
    );
    const accountdetails = await solanaConnection.getBlockProduction(
      transaction
    );
    console.log(transaction.transaction.message.accountKeys);
    return res.status(200).json({ transaction: transaction });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      error: "Server error",
    });
  }
};

export default handler;
