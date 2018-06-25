import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x320671682F22FB9F15A3927ec9dF7f3C0626fA7C'
);

export default instance;
