enum LoadingStates {
  IDLE,
  LOADING,
  ERROR,
  LOADED,
}

export class SmartLoadingState {
  static readonly Idle = new this('Idle');
  static readonly Loading = new this('Loading');
  static readonly Error = new this('Error');
  static readonly Loaded = new this('Loaded');

  private constructor(public readonly name: string) {}
}

export default LoadingStates;
