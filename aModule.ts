export function a() {
  return sideEffect();
}

export function sideEffect() {
  return "a";
}
