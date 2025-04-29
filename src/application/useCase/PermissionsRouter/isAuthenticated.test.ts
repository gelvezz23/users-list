/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { isAuthenticated } from "./isAuthenticated";

describe("isAuthenticated", () => {
  let sessionStorageMock: {
    getItem: Mock;
    setItem: Mock;
    removeItem: Mock;
    clear: Mock;
  };

  beforeEach(() => {
    sessionStorageMock = {
      getItem: vi.fn(() => null),
      setItem: vi.fn(() => {}),
      removeItem: vi.fn(() => {}),
      clear: vi.fn(() => {}),
    };
    // @ts-ignore: Forzar la asignación al objeto global
    global.sessionStorage = sessionStorageMock;
  });

  it("should return true if authToken exists in sessionStorage", () => {
    sessionStorageMock.getItem.mockReturnValue("some-auth-token");
    expect(isAuthenticated()).toBe(true);
  });

  it("should return false if authToken does not exist in sessionStorage", () => {
    sessionStorageMock.getItem.mockReturnValue(null);
    expect(isAuthenticated()).toBe(false);
  });
});
