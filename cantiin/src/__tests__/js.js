test('js object mod', () => {
    let originalObject = {"page":1,"q":"what"};
    expect({...originalObject,"page":2})
    .toEqual({"page":2,"q":"what"});
    expect(originalObject)
    .toEqual({"page":1,"q":"what"});
});


test('js object get with default value', () => {
    let originalObject = {"page":1,"q":"what"}; 
    let {q:myData} = originalObject;
    expect(myData).toEqual("what");
    
    let {nonExistentKey:myKey ="it does not exist"} = originalObject;
    expect(myKey)
    .toEqual("it does not exist");
});





