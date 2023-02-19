// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");

export default async function Contact(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    if (!body.name || !body.mail || !body.phone || !body.message) {
      res.status(200).json({ code: 400, message: "400: Invalid Form Body" });
    } else {
      let data = JSON.stringify({
        username: body.discord ? body.discord : "無",
        embeds: [
          {
            color: 0xfd0000,
            fields: [
              {
                name: `電子郵件`,
                value: body.discord ? body.discord : "無",
              },
              {
                name: `連絡電話`,
                value: body.discord ? body.discord : "無",
              },
              {
                name: `Discord`,
                value: body.discord ? body.discord : "無",
              },
              {
                name: `message`,
                value: "```\n" + (body.discord ? body.discord : "無") + "\n```",
              },
            ],
          },
        ],
      });
      var config = {
        method: "POST",
        url: "https://canary.discord.com/api/webhooks/1073582657360900186/0l8jFuZj43oVN14GtVAql-Rc2uUIuXOjkqKbmQ_OAOz02z3Kg8LwnjSPBjtpJ3-Uda4P",
        headers: { "Content-Type": "application/json" },
        data: data,
      };
      try {
        axios(config);
        res.status(201).json({ message: "201 Success Send Contact Info" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "500 Something Going Error" });
      }
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
