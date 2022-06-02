const init = require('../src/init');

jest.setTimeout(10000);

test('Gets input from user.', async () => {
    const answers = await init();
    const answer = answers[0];

    expect(answer.name).toEqual(expect.any(String));
    expect(answer.ID).toEqual(expect.any(String));
    expect(answer.email).toEqual(expect.any(String));
    expect(answer.role).toEqual(expect.any(String));
    expect(answer.moreEmployees).toEqual(expect.any(Boolean));
})