import { Request, Response } from "express";
import Integration from "../models/integrationModel";
import {validateMailchimp, getMailchimpLists} from "../services/mailchimpServices";
import {validateGetResponse, getGetResponseLists} from "../services/getResponseServices";

export async function saveIntegration(req:Request, res: Response) {
    try {
        const {provider, apiKey} = req.body;

        if (provider === "mailchimp") await validateMailchimp(apiKey);
        if (provider === "getResponse") await validateGetResponse(apiKey);

        const integration  = new Integration({ provider, apiKey});
        await integration.save();

        res.status(201).json({ message: "Integration saved successfully"});

    } catch (error: any) {
        res.status(400).json({ error: error.message}); 
    }
}


export async function fetchLists(req: Request, res: Response) {
    try {
        const {provider} = req.query;
        const integration = await Integration.findOne({ provider});

        if (!integration ) throw new Error("Integration not found");

        let lists;
        if (provider === "mailchimp") lists = await getMailchimpLists(integration.apiKey);
        if (provider === "getResponse") lists = await getGetResponseLists(integration.apiKey);

        res.json({lists});
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}
