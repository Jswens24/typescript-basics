const stuff: (string | number)[] = ['fe', 'asdf', 65468];

// const color: number[] = [23,324,42,234];

const color: [number, number, number] = [556, 5684, 4586];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK']
// goodRes[0] = '250'

goodRes.push(234)
goodRes.pop()

const responses: HTTPResponse[] = [[404, "NOT FOUND"], [200, "OK"]]

