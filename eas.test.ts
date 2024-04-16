import { EAS } from "@ethereum-attestation-service/eas-sdk";
import { EAS as EAS150 } from "@ethereum-attestation-service/eas-sdk-150";
import { JsonRpcProvider, Wallet, id } from "ethers";
import { expect, it } from "vitest";

it("doesn't work with eas-sdk 1.6.0", async () => {
  const provider = new JsonRpcProvider(
    "https://optimism-sepolia-rpc.publicnode.com"
  );
  const signer = new Wallet(id("test"), provider);
  expect(
    () => new EAS("0x4200000000000000000000000000000000000021", { signer })
  ).toThrowError();
});

it("works with eas-sdk 1.5.0", async () => {
  const provider = new JsonRpcProvider(
    "https://optimism-sepolia-rpc.publicnode.com"
  );
  const signer = new Wallet(id("test"), provider);
  const eas = new EAS150("0x4200000000000000000000000000000000000021", {
    signer,
  });
  expect(eas).toBeTruthy();
});
