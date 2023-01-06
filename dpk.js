const crypto = require("crypto");

exports.deterministicPartitionKey = (data) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let result;

  if (data) {
    //data.partitionKey has the priority so check it and assign it to result
    if (data.partitionKey) {
      result = data.partitionKey;
      if (typeof result !== "string") {
        result = JSON.stringify(result);
      }
    } else {
      //if data.partitionKey is not defined then assign stringify value to result
      result = JSON.stringify(data);
    }
  }

  //Check result value and assign default if not null
  if (!result) {
    result = TRIVIAL_PARTITION_KEY;
  }

  //generating message digest only when venet is there or if data.partitionKey length is greater than MAX_PARTITION_KEY_LENGTH
  if ((data && !data.partitionKey) || result.length > MAX_PARTITION_KEY_LENGTH) {
    result = crypto.createHash("sha3-512").update(result).digest("hex");
  }
  return result;
};
