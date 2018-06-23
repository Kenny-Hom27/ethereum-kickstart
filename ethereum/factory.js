import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x72Cc43321223C8f79d38007aD1aDa08afa87C805'
);

export default instance;
