import { enableProdMode } from '@angular/core';
import { bootstrapWorkerUi, WORKER_UI_LOCATION_PROVIDERS } from '@angular/platform-webworker';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('webworker.bundle.js', [WORKER_UI_LOCATION_PROVIDERS]);
