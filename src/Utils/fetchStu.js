
const appkey = "demo13_1545210570249"
export async function fetchAll() {
    const list = await fetch(`/api/student/findAll?appkey=${appkey}`).then(res => res.json())
    return list
}

export async function fetchByPage(page = 1, size = 10) {
    const list = await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`)
        .then(res => res.json()).then(res => res.data)
    return list
}


// /api/student / searchStudent ? appkey = demo13_1545210570249 & page=1 & sex=-1 & search=% E7 % 8E % 8B & size=5

//     / api / student / searchStudent ? appkey = demo13_1545210570249 & page=1 & sex=-1 & search=% E7 % 8E % 8B & size=5
export async function fetchBySearch(params) {
    console.log(params)
    const list = await fetch(`/api/student/searchStudent?appkey=${appkey}&sex=${params.sex}&page=${params.page}&search=${params.searchVal}&size=${params.limit}`)
        .then(res => res.json()).then(res => res.data)
    return list
}