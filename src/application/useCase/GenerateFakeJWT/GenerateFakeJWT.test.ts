/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import { generateFakeJWT } from ".";

describe("generateFakeJWT", () => {
  it("should return a string", () => {
    const token = generateFakeJWT();
    expect(typeof token).toBe("string");
  });

  it("should return a string with three parts separated by dots", () => {
    const token = generateFakeJWT();
    const parts = token.split(".");
    expect(parts.length).toBe(3);
  });

  it("should have a header part that is a valid Base64 string", () => {
    const token = generateFakeJWT();
    const headerBase64 = token.split(".")[0];
    const base64Regex = /^[a-zA-Z0-9+/=]+$/;
    expect(base64Regex.test(headerBase64)).toBe(true);

    try {
      const headerString = atob(headerBase64);
      JSON.parse(headerString);
      expect(true).toBe(true);
    } catch (error) {
      expect(false).toBe(true);
    }
  });

  it("should have a payload part that is a valid Base64 string", () => {
    const token = generateFakeJWT();
    const payloadBase64 = token.split(".")[1];
    const base64Regex = /^[a-zA-Z0-9+/=]+$/;
    expect(base64Regex.test(payloadBase64)).toBe(true);

    try {
      const payloadString = atob(payloadBase64);
      const payload = JSON.parse(payloadString);
      expect(payload).toHaveProperty("userId");
      expect(payload).toHaveProperty("username");
      expect(payload).toHaveProperty("email");
      expect(typeof payload.userId).toBe("string");
      expect(typeof payload.username).toBe("string");
      expect(typeof payload.email).toBe("string");
    } catch (error: any) {
      expect(false).toBe(true);
    }
  });

  it("should have a signature part that is a valid Base64 string", () => {
    const token = generateFakeJWT();
    const signatureBase64 = token.split(".")[2];
    const base64Regex = /^[a-zA-Z0-9+/=]+$/;
    expect(base64Regex.test(signatureBase64)).toBe(true);
    expect(atob(signatureBase64)).toBe("simulated-secret");
  });
});
