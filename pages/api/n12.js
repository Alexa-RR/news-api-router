const superagent = require("superagent");


export default function handler(req, res) {
    ;
    superagent.get(`https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=ngt&lp=/direct/hls/live/2033791/k12dvr/index.m3u8?b-in-range=800-2700&rv=AKAMAI`).then((response) => {
        res.status(200).redirect(`https://mako-streaming.akamaized.net/direct/hls/live/2033791/k12dvr/index.m3u8?` + JSON.parse(response.text).tickets[0].ticket)
    });
  }