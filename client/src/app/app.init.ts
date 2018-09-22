import {BootstrapService} from './core/services/bootstrap-service';

export function onAppInit(bootstrapService: BootstrapService) {
  return () => bootstrapService.bootstrap$();
}
