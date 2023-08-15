// import { vi, expect, test } from "vitest";
import * as aModule from "./aModule";

test('expect "sideEffect" to be called at least once', async () => {
  const sideEffectSpy = jest.spyOn(aModule, "sideEffect").mockReturnValue("b");

  const res = aModule.a(); // This function calls sideEffect internally.
  expect(res).toBe("b"); // This fails - it returns 'a' so the spyOn is not workng
  expect(sideEffectSpy).toHaveBeenCalled(); // This fails as well :(
});
