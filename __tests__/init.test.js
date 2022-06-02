const init = require('../src/init');

jest.setTimeout(10000);
jest.mock('../src/init');

test('Gets input from user.', async () => {
    const answers = await init();
    const answer = answers[0];

    expect(answer.name).toEqual(expect.any(String));
    expect(answer.ID).toEqual(expect.any(Number));
    expect(answer.email).toEqual(expect.any(String));
    expect(answer.role).toEqual(expect.any(String));
    expect(answer.moreEmployees).toEqual(expect.any(Boolean));
})