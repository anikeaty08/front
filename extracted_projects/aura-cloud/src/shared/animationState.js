// A simple mutable state object shared between GSAP and WebGL canvas
// to avoid expensive React state updates on every frame.
export const sharedAnimState = {
  introValue: 0.0,
  burstValue: 0.0,
  scrollValue: 0.0
};