import api from './api';

export default class StatusService {
  static async store(status) {
    return api
      .post('/58b60c64-04e9-45e5-a467-05ceada83ff0', status)
      .then(async response => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || 'Erro',
        };
      })
      .catch(error => ({
        ok: false,
        data: error.response.data,
        status: error.response.status,
        message: error.response.data.message || 'Erro',
      }));
  }
}
