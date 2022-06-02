const init = require('../src/init');

jest.setTimeout(10000);

test('Gets input from user.', async () => {
    const answers = await init();

    expect(answers.name).toEqual(expect.any(String));
    expect(answers.ID).toEqual(expect.any(String));
    expect(answers.email).toEqual(expect.any(String));
    expect(answers.role).toEqual(expect.any(String));
    expect(answers.moreEmployees).toEqual(expect.any(Boolean));
})