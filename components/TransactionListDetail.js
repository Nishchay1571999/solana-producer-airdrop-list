import React from "react";
import { fromUnixTime, format } from "date-fns";

const TransactionListDetail = ({ loading, transactionData }) => {
  console.log(transactionData);
  return (
    <div className="w-full">
      {!loading && transactionData && (
        <div className="rounded-lg border max-w-xl overflow-x-auto mx-auto">
          <table className="table-auto w-full border-collapse p-4">
            <tbody className="overflow-x-scroll">
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Signature</td>
                <td className="p-4">
                  {transactionData?.transaction?.signatures[0]}
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Timestamp</td>
                <td className="p-4">
                  {format(
                    fromUnixTime(transactionData?.blockTime),
                    "MMMM d, yyyy 'at' HH:mm:ss OOOO"
                  )}
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Recent Blockhash</td>
                <td className="p-4">
                  {transactionData?.transaction?.message.recentBlockhash}
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Slot</td>
                <td className="p-4">
                  {Intl.NumberFormat().format(transactionData.slot)}
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Fee</td>
                <td className="p-4">
                  ◎{transactionData?.meta?.fee / 1_000_000_000}
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-medium text-sm p-4">Amount</td>
                <td className="p-4">
                  ◎
                  {transactionData?.transaction?.message?.instructions[0]
                    ?.parsed?.info?.lamports / 1_000_000_000}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <h1 className="max-w-xl overflow-x-auto mx-auto my-10">
        Wallets Interacted in the transactions:{" "}
      </h1>
      <div className="rounded-lg w-auto border max-w-xl overflow-x-auto mx-auto my-10">
        {transactionData?.transaction?.message?.accountKeys?.length > 0 &&
          transactionData?.transaction?.message?.accountKeys &&
          transactionData?.transaction?.message?.accountKeys?.map((item) => {
            return (
              <div className="my-4 mx-10 w-auto justify-between">
                <p>{item?.pubkey}</p>
                <div className="flex mx-10 w-auto align-middle flex-row justify-between">
                  {item.writable && (
                    <p className="flex bg-green-50 w-20 text-black align-middle justify-center">
                      writable
                    </p>
                  )}
                  {item.signer && (
                    <p className="flex bg-green-50 w-20 text-black align-middle justify-center">
                      signer
                    </p>
                  )}
                  {item.signer && item.writable && (
                    <p className="flex bg-green-50 w-20 text-black align-middle justify-center">
                      payer
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      {!loading && !transactionData && (
        <p className="text-center">No transaction to display</p>
      )}
    </div>
  );
};

export default TransactionListDetail;
