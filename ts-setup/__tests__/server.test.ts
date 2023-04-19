import { helloWorld } from "../src/server";

describe("Hello world", () => {
  test("Returns hello world", () => {
    expect(helloWorld()).toBe("Hello world!");
  });
});