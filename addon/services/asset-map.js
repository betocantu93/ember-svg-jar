import Service from '@ember/service';
import { getOwner } from '@ember/application';

export default class AssetMapService extends Service {
  // eslint-disable-next-line
  resolve(path) {
    const { rootURL = '' } = getOwner(this).resolveRegistration('config:environment');
    return `${rootURL}${path}`;
  }
}
