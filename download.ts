import { Connect } from "@ibm-aspera/connect-sdk-js";
import { TransferSpec } from "@ibm-aspera/connect-sdk-js/dist/esm/core/types";

const connectClient = new Connect();
connectClient.initSession();
const transferSpec: TransferSpec = {
  remote_host: "",
  direction: "receive",
  paths: [],
};
const connectSpec = {};
connectClient.startTransferPromise(transferSpec, connectSpec);
