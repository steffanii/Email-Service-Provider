import axios from "axios";

export async function validateMailchimp(apiKey: string) {
const dc = apiKey.split("-")[1]; 
  try {
    const res = await axios.get(`https://${dc}.api.mailchimp.com/3.0/`, {
      headers: { Authorization: `apikey ${apiKey}` }
    });
    return res.data;
  } catch (err) {
    throw new Error("Invalid Mailchimp API Key");
  }
}


export async function getMailchimpLists(apiKey: string) {
  const dc = apiKey.split("-")[1];
  const res = await axios.get(`https://${dc}.api.mailchimp.com/3.0/lists`, {
    headers: { Authorization: `apikey ${apiKey}` }
  });
  return res.data.lists;
}
