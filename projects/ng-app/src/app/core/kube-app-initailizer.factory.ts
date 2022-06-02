import { HttpClient } from '@angular/common/http';
import { L10nTranslationService } from 'angular-l10n';
import { map, tap } from 'rxjs/operators';


export const kubeAppInitializerFactory =
  (translationService: L10nTranslationService, httpClient: HttpClient) =>
  () => {
    return httpClient
      .get<Record<string, any>>('assets/core/lang/core-labels.json')
      .pipe(
        tap((langMappings) => {
          console.log('[INIT] adding lang data ->', langMappings);
          translationService.addData(langMappings, 'en-US');
        }),
        map(() => true)
      )
      .toPromise();
  };
