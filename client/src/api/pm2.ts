import { get, post } from '../utils';

class Pm2Api {
  static getList<T>() {
    return get<T>('/api/pm2/list');
  }

  static stop(id: number) {
    return post('/api/pm2/stop', {
      id: id
    });
  }

  static reload(id: number) {
    return post('/api/pm2/reload', {
      id: id
    });
  }

  static delete(id: number) {
    return post('/api/pm2/delete', {
      id: id
    });
  }
}

export default Pm2Api;
