import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
  getUrlPage} from "../functions/urls";

test('functions/urls/buildUrl', () => {
  expect(buildUrl("www.example.com")).toBe("www.example.com");
  expect(buildUrl("www.example.com",{})).toBe("www.example.com");
  expect(buildUrl("www.example.com",{"page":1})).toBe("www.example.com?page=1");
  expect(buildUrl("www.example.com",{"page":1,"fast":true})).toBe("www.example.com?fast=true&page=1");
});




test('functions/urls/getPureUrl', () => {
  expect(getPureUrl("www.example.com")).toBe("www.example.com");
  expect(getPureUrl("www.example.com?")).toBe("www.example.com");
  expect(getPureUrl("www.example.com?notpage=545")).toBe("www.example.com");
  expect(getPureUrl("www.example.com?page=545")).toBe("www.example.com");
});