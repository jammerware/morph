import { Service } from '@angular/core';

import packageJson from "../../../package.json";

@Service()
export class VersionService {
  get() {
    return packageJson.version;
  }
}
