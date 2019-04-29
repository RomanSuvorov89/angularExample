import { HttpHandler } from '@angular/common/http';

import { LoaderService } from './service/loader.service';
import { CustomHttpService } from './service/custom-http.service';

function httpServiceFactory(handler: HttpHandler, loaderService: LoaderService) {
    return new CustomHttpService(handler, loaderService);
}

export { httpServiceFactory };