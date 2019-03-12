import service from './index'

const getSendSMS = (params) => service.get('sendSMS', {params})
const getRegis = (params) => service.get('regis', {params})

export {
  getSendSMS,
  getRegis
}
