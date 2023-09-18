export const restClient = async(info: RequestInfo, init:RequestInit) => {
    let response:Response = await fetch(info, init)
    return await response.json()
}
