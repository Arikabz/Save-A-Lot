import type { NextApiRequest, NextApiResponse } from "next";

async function fetchHashesFromIPFS(cid: string): Promise<string[]> {
  const url = `https://ipfs.io/ipfs/${cid}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch hashes from IPFS");
  const data = await response.json();
  return data.hashes || [];
}

async function storeHashOnIPFS(hash: string, existingHashes: string[]): Promise<string> {
  // Add the new hash to the existing ones
  existingHashes.push(hash);
  const data = {
    hashes: existingHashes
  };
  
  // Store on IPFS
  const response = await fetch('https://ipfs.infura.io:5001/api/v0/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.Hash;
}


export const config = {
  api: {
    externalResolver: true,
  },
};

export type VerifyReply = {
  code: string;
  detail: string;
};

const verifyEndpoint = `${process.env.NEXT_PUBLIC_WLD_API_BASE_URL}/api/v1/verify/${process.env.NEXT_PUBLIC_WLD_APP_ID}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyReply>
) {
  console.log("Received request to verify credential:\n", req.body);
  const reqBody = {
    nullifier_hash: req.body.nullifier_hash,
    merkle_root: req.body.merkle_root,
    proof: req.body.proof,
    credential_type: req.body.credential_type,
    action: req.body.action,
    signal: req.body.signal,
  };
  console.log("Sending request to World ID /verify endpoint:\n", reqBody);

  const verifyRes = await fetch(verifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });

  const wldResponse = await verifyRes.json();

  console.log(
    `Received ${verifyRes.status} response from World ID /verify endpoint:\n`,
    wldResponse
  );

  if (verifyRes.status == 200) {
    console.log(
      "Credential verified! This user's nullifier hash is: ",
      wldResponse.nullifier_hash
    );
    res.status(verifyRes.status).send({
      code: "success",
      detail: "This action verified correctly!",
    });

    const existingHashes = await fetchHashesFromIPFS("bafybeifrof2xryjphrgnvqiwzrmzfscnyewspmj44i3jqvhg7rymwcocfy");
    const newCID = await storeHashOnIPFS(wldResponse.nullifier_hash, existingHashes);
    console.log("Stored hash on IPFS with new CID:", newCID);
  } else {
    res
      .status(verifyRes.status)
      .send({ code: wldResponse.code, detail: wldResponse.detail });
  }
}

