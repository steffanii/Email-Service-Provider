import axios from "axios";

export async function validateGetResponse(apiKey: string) {
  try {
    const res = await axios.get("https://api.getresponse.com/v3/accounts", {
      headers: { "X-Auth-Token": `api-key ${apiKey}` }
    });
    return res.data;
  } catch (err) {
    throw new Error("Invalid GetResponse API Key");
  }
}

export async function getGetResponseLists(apiKey: string) {
  const res = await axios.get("https://api.getresponse.com/v3/campaigns", {
    headers: { "X-Auth-Token": `api-key ${apiKey}` }
  });
  return res.data;
}