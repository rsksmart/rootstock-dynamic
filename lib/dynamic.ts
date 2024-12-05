export * from "@dynamic-labs/sdk-react-core";
export * from "@dynamic-labs/ethereum";
export * from "@dynamic-labs/bitcoin";

export const dynamicEnvId = process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID;

if (!dynamicEnvId) {
  throw new Error("Dynamic env id has not been found");
}
