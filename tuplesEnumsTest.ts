const stuff: (string | number)[] = ['fe', 'asdf', 65468];

// const color: number[] = [23,324,42,234];

const color: [number, number, number] = [556, 5684, 4586];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK']
// goodRes[0] = '250'

goodRes.push(234)
goodRes.pop()

const responses: HTTPResponse[] = [[404, "NOT FOUND"], [200, "OK"]]

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED = 23,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

ArrowKeys.LEFT