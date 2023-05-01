// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");

export default async function Contact(req, res) {
    if (req.method === "POST") {
        // Check for required body
        const RequiredBody = ["name", "mail", "phone", "message", "discord"];
        const hasAllRequiredBody = RequiredBody.every(item => Object.keys(req.body).includes(item));
        if (!hasAllRequiredBody || Object.keys(req.body).length < RequiredBody.length) {
            return res.status(400).json(`The following items are all required for this route : [${RequiredBody.join(", ")}]`);
        }
        else if (Object.keys(req.body).length > RequiredBody.length) {
            return res.status(400).json(`Only allowed ${RequiredBody.length} items in the body : [${RequiredBody.join(", ")}]`);
        }

        const body = req.body;
        const data = JSON.stringify({
            username: body.name || "無",
            embeds: [
                {
                    color: 0xfd0000,
                    fields: [
                        {
                            name: "電子郵件",
                            value: body.mail || "無",
                        },
                        {
                            name: "連絡電話",
                            value: body.phone || "無",
                        },
                        {
                            name: "Discord",
                            value: body.discord || "無",
                        },
                        {
                            name: "Message",
                            value: "```\n" + (body.message || "無") + "\n```",
                        },
                    ],
                },
            ],
        });
        const config = {
            method: "POST",
            url: "https://canary.discord.com/api/webhooks/1102594260135575603/n34NNAH33Tp0G7BEc8EDdqLHOQDkw9g_yXSYV-TI3wMjSNW5845gVP0VMBNXwGl_MFu6",
            headers: { "Content-Type": "application/json" },
            data: data
        };

        try {
            const response = await axios(config);
            if (response.status === 204) {
                res.status(201).json({ message: "Successfully Send Contact Info" });
            }
            else {
                throw new Error("Failed to post discord webhook");
            }
        }
        catch (e) {
            console.log(data);
            console.log(e);
            res.status(500).json({ message: "Something Goes Wrong" });
        }
    } else {
        res.status(405).json({ message: "Invalid Request Method" });
    }
}