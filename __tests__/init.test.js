const init = require('../src/init');

jest.setTimeout(20000);

//Tests that the data returned from init() is the right data type.
test('Gets input from user.', async () => {
    const answers = await init();
    const answer = answers[0];

    expect(answer.name).toEqual(expect.any(String));
    expect(answer.ID).toEqual(expect.any(Number));
    expect(answer.email).toEqual(expect.any(String));
    expect(answer.role).toEqual(expect.any(String));
    expect(answer.moreEmployees).toEqual(expect.any(Boolean));

    if(answer.role === 'Manager') {
        expect(answer.extra).toEqual(expect.any(Number));
    } else {
        expect(answer.extra).toEqual(expect.any(String));
    }
    
})