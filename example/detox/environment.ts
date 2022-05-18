const {
  DetoxCircusEnvironment,
  SpecReporter,
  WorkerAssignReporter,
} = require('detox/runners/jest-circus');

export default class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config: any, context: any) {
    super(config, context);

    this.initTimeout = 300000;

    this.registerListeners({
      SpecReporter,
      WorkerAssignReporter,
    });
  }
}
