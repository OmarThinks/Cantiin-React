import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
  getUrlPage} from "../functions/urls";

test('functions/urls/buildUrl', () => {
  expect(buildUrl("www.example.com")).toEqual("www.example.com");
  expect(buildUrl("www.example.com",{})).toEqual("www.example.com");
  expect(buildUrl("www.example.com",{"page":1})).toEqual("www.example.com?page=1");
  expect(buildUrl("www.example.com",{"page":1,"fast":true})).toEqual("www.example.com?fast=true&page=1");
});



test('functions/urls/getPureUrl', () => {
  expect(getPureUrl("www.example.com")).toEqual("www.example.com");
  expect(getPureUrl("www.example.com?")).toEqual("www.example.com");
  expect(getPureUrl("www.example.com?notpage=545")).toEqual("www.example.com");
  expect(getPureUrl("www.example.com?page=545")).toEqual("www.example.com");
});





test('functions/urls/getUrlQueryParameters', () => {
  expect(getUrlQueryParameters("www.example.com")).toEqual({});
  expect(getUrlQueryParameters("www.example.com?")).toEqual({});
  expect(getUrlQueryParameters("www.example.com?page=2")).toEqual({"page":"2"});
  expect(getUrlQueryParameters("www.example.com?page=2&fast=true"))
  .toEqual({"fast":"true","page":"2"});
});